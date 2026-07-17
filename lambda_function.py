 import json
import boto3
import base64
import uuid
import os
from datetime import datetime

# AWS Clients
s3 = boto3.client('s3')
rekognition = boto3.client('rekognition')
polly = boto3.client('polly')
dynamodb = boto3.resource('dynamodb')

# Environment Variables
BUCKET_NAME = os.environ['BUCKET_NAME']
TABLE_NAME = os.environ['TABLE_NAME']

table = dynamodb.Table(TABLE_NAME)


def lambda_handler(event, context):
    try:
        # Parse request body
        body = json.loads(event['body'])

        name = body.get('name')
        image_base64 = body.get('image')

        if not name or not image_base64:
            return {
                'statusCode': 400,
                'headers': {
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'message': 'Name and image are required'
                })
            }

        # Decode image
        image_bytes = base64.b64decode(image_base64)

        visitor_id = str(uuid.uuid4())

        # ---------------- S3 IMAGE UPLOAD ----------------
        image_key = f"images/{visitor_id}.jpg"

        s3.put_object(
            Bucket=BUCKET_NAME,
            Key=image_key,
            Body=image_bytes,
            ContentType='image/jpeg'
        )

        # ---------------- REKOGNITION ----------------
        rekognition_response = rekognition.detect_faces(
            Image={
                'Bytes': image_bytes
            },
            Attributes=['DEFAULT']
        )

        if len(rekognition_response['FaceDetails']) == 0:
            return {
                'statusCode': 400,
                'headers': {
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'message': 'No face detected in image'
                })
            }

        confidence = round(
            rekognition_response['FaceDetails'][0]['Confidence'],
            2
        )

        # ---------------- POLLY ----------------
        text = f"Welcome {name}. Your registration has been completed successfully."

        polly_response = polly.synthesize_speech(
            Text=text,
            OutputFormat='mp3',
            VoiceId='Joanna',
            Engine='standard'
        )

        audio_stream = polly_response.get("AudioStream")

        if audio_stream:
            audio_bytes = audio_stream.read()
        else:
            raise Exception("Polly did not generate audio")

        audio_key = f"audio/{visitor_id}.mp3"

        s3.put_object(
            Bucket=BUCKET_NAME,
            Key=audio_key,
            Body=audio_bytes,
            ContentType='audio/mpeg'
        )

        # Correct regional URLs
        image_url = (
            f"https://{BUCKET_NAME}.s3.ap-south-1.amazonaws.com/{image_key}"
        )

        audio_url = (
            f"https://{BUCKET_NAME}.s3.ap-south-1.amazonaws.com/{audio_key}"
        )

        # ---------------- DYNAMODB ----------------
        table.put_item(
            Item={
                'visitor_id': visitor_id,
                'name': name,
                'confidence': str(confidence),
                'image_url': image_url,
                'audio_url': audio_url,
                'created_at': datetime.now().isoformat()
            }
        )

        # ---------------- RESPONSE ----------------
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': '*'
            },
            'body': json.dumps({
                'message': 'Visitor registered successfully',
                'visitor_id': visitor_id,
                'name': name,
                'confidence': confidence,
                'image_url': image_url,
                'audio_url': audio_url
            })
        }

    except Exception as e:
        print("ERROR:", str(e))

        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'message': 'Internal Server Error',
                'error': str(e)
            })
        }
