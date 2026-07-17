# 🤖 AI Visitor Management System using AWS Rekognition and Polly

<div align="center">

![AWS](https://img.shields.io/badge/AWS-Cloud-orange?style=for-the-badge&logo=amazonaws)
![Lambda](https://img.shields.io/badge/AWS-Lambda-FF9900?style=for-the-badge&logo=awslambda)
![S3](https://img.shields.io/badge/Amazon-S3-569A31?style=for-the-badge&logo=amazons3)
![DynamoDB](https://img.shields.io/badge/Amazon-DynamoDB-4053D6?style=for-the-badge&logo=amazondynamodb)
![API Gateway](https://img.shields.io/badge/API-Gateway-FF4F8B?style=for-the-badge&logo=amazonapigateway)
![Rekognition](https://img.shields.io/badge/Amazon-Rekognition-232F3E?style=for-the-badge)
![Polly](https://img.shields.io/badge/Amazon-Polly-00A1C9?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)

# AI Visitor Management System

### 🚀 AI Powered Visitor Registration using AWS Cloud Services

*An intelligent serverless visitor management platform that uses facial recognition and AI-generated voice greetings to automate visitor registration.*

</div>

---

# 📌 Project Overview

The **AI Visitor Management System** is a serverless cloud application developed using multiple AWS services to automate visitor registration and identity verification.

The system allows visitors to:

✅ Register using a web-based form  
✅ Upload their photograph  
✅ Detect faces using Amazon Rekognition  
✅ Generate personalized voice greetings using Amazon Polly  
✅ Store images in Amazon S3  
✅ Save visitor information in DynamoDB  
✅ Process requests through API Gateway and Lambda  

This project demonstrates the integration of **Artificial Intelligence services with Serverless AWS Architecture**.

---

# 🏗️ Architecture Diagram

```text
┌────────────────────┐
│   Visitor Browser  │
│ HTML • CSS • JS    │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│  Amazon API Gateway│
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│    AWS Lambda      │
│ Python Backend     │
└─────┬────┬────┬────┘
      │    │    │
      ▼    ▼    ▼
   Amazon Amazon Amazon
     S3   Polly Rekognition
      │
      ▼
┌────────────────────┐
│   Amazon DynamoDB  │
└────────────────────┘

                │
                ▼
        Amazon CloudWatch
```

---

# ⚙️ AWS Services Used

| AWS Service | Purpose |
|------------|---------|
| Amazon S3 | Stores visitor images and generated audio files |
| AWS Lambda | Executes backend business logic |
| API Gateway | Provides REST API endpoints |
| Amazon DynamoDB | Stores visitor records |
| Amazon Rekognition | Detects and analyzes visitor faces |
| Amazon Polly | Generates AI voice greetings |
| AWS IAM | Manages permissions and security |
| Amazon CloudWatch | Logs and monitoring |

---

# ✨ Features

### 👤 Visitor Registration
- Visitor Name
- Email Address
- Mobile Number
- Purpose of Visit
- Department Selection
- Host Employee Name
- Photo Upload

### 🤖 AI Features
- Face Detection
- Face Confidence Score
- AI Generated Voice Greeting
- Automatic Image Storage
- Automatic Visitor Record Creation

### ☁️ Cloud Features
- Serverless Architecture
- Fully Managed Backend
- Secure Object Storage
- No Server Maintenance
- Real-Time Processing

---

# 🖥️ Technology Stack

## Frontend
- HTML5
- CSS3
- JavaScript
- Live Server

## Backend
- Python 3.x
- AWS Lambda
- REST API

## Database
- Amazon DynamoDB

## AI Services
- Amazon Rekognition
- Amazon Polly

---

# 📸 Project Screenshots

## 📝 Visitor Registration Form

![Form](https://github.com/user-attachments/assets/ff97c378-d45a-4af6-ae9f-4bf6544eb865)

---

## ✅ Successful Registration Result

![Result](https://github.com/user-attachments/assets/09e6b19b-0725-4b19-a766-4e475f733821)

---

## 🗄️ DynamoDB Visitor Records

![DynamoDB](https://github.com/user-attachments/assets/f2c3e98e-049e-4c1a-aef8-c1d0c377daa5)

---

## ☁️ Amazon S3 Storage

![S3](https://github.com/user-attachments/assets/6cdced10-ed01-4b82-936e-74de7f60198f)

---

## ⚡ AWS Lambda Backend

![Lambda](https://github.com/user-attachments/assets/7e4d51e0-0074-4870-a381-5325564e44f9)

---

# 🔄 Workflow

1. Visitor enters details in the web form.
2. Image is converted to Base64 using JavaScript.
3. API Gateway receives the request.
4. Lambda processes visitor information.
5. Rekognition detects the visitor's face.
6. Polly generates a personalized greeting audio.
7. Images and audio are stored in Amazon S3.
8. Visitor information is saved in DynamoDB.
9. CloudWatch logs all activities.

---

# 📂 Repository Structure

```text
aws-ai-visitor-management-system
│
├── index.html
├── style.css
├── script.js
├── lambda_function.py
└── README.md
```

---

# 📈 Project Outcomes

✔ Successfully implemented serverless architecture.  
✔ Integrated AWS AI services into a real-world application.  
✔ Achieved automated visitor registration and verification.  
✔ Demonstrated cloud-native application development skills.

---

# 🎯 Learning Outcomes

- AWS Serverless Computing
- REST API Development
- Object Storage
- NoSQL Database Design
- AI Service Integration
- Cloud Security with IAM
- Monitoring using CloudWatch

---

# 👨‍💻 Author

## Bhavesh Dinesh Patil

### AWS Cloud Enthusiast | Cloud Engineer Aspirant | AI & ML Student

- GitHub: https://github.com/Bhavesh2005patil

---

<div align="center">

## ⭐ If you like this project, give it a star!

### Built with ❤️ using AWS Cloud Services

</div>
