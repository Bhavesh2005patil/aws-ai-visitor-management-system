# 🤖 AI Visitor Management System

<div align="center">

![Lambda](https://img.shields.io/badge/Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white)
![S3](https://img.shields.io/badge/S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)
![DynamoDB](https://img.shields.io/badge/DynamoDB-4053D6?style=for-the-badge&logo=amazondynamodb&logoColor=white)
![API Gateway](https://img.shields.io/badge/API_Gateway-FF4F8B?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### 🚀 Intelligent Visitor Registration with Facial Recognition and Voice Greeting

*An AI-powered serverless platform that automates visitor registration using facial recognition, voice synthesis, cloud storage, and real-time data processing.*

</div>

---

# 📌 Project Overview

The AI Visitor Management System is a modern cloud-based application that automates visitor registration and identity verification.

The platform enables visitors to register through a web interface, upload their photograph, detect faces automatically, generate personalized voice greetings, store visitor records securely, and maintain a complete visitor history.

The project demonstrates the integration of Artificial Intelligence services with Serverless Architecture and real-time cloud processing.

---

# ✨ Features

## 👤 Visitor Registration
- Visitor Name
- Email Address
- Mobile Number
- Purpose of Visit
- Department Selection
- Host Name
- Photo Upload

## 🤖 AI Features
- Automatic Face Detection
- Face Confidence Score
- Personalized Voice Greeting
- Real-Time Image Processing
- Secure Visitor Verification

## ☁️ Cloud Features
- Serverless Architecture
- Object Storage
- NoSQL Database
- REST API Communication
- Monitoring and Logging

---

# 🏗 Architecture

```text
┌───────────────────────────┐
│     Visitor Browser       │
│   HTML • CSS • JS         │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│        API Gateway        │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│          Lambda           │
│      Python Backend       │
└───────┬────────┬──────────┘
        │        │
        ▼        ▼
   Face Detection Voice Greeting
        │        │
        ▼        ▼
      Storage   Database

              ▼
        Monitoring Logs
```

---

# ☁️ Cloud Services Used

| Service | Purpose |
|----------|---------|
| S3 | Stores visitor images and generated audio |
| Lambda | Executes backend logic |
| API Gateway | Handles API requests |
| DynamoDB | Stores visitor records |
| Rekognition | Detects visitor faces |
| Polly | Generates voice greetings |
| IAM | Security and permissions |
| CloudWatch | Monitoring and logs |

---

# 🔄 Workflow

1. Visitor fills out the registration form.
2. Image is converted into Base64 format using JavaScript.
3. API Gateway receives the request.
4. Lambda processes visitor information.
5. Face detection service analyzes the uploaded image.
6. Voice greeting service generates personalized audio.
7. Images and audio files are stored securely.
8. Visitor records are saved in the database.
9. Logs are generated for monitoring and debugging.

---

# 💻 Technology Stack

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend
- Python
- Serverless Functions

## Database
- DynamoDB

## AI Services
- Face Detection
- Voice Synthesis

---

# 📸 Project Screenshots

## 📝 Visitor Registration Form

![Visitor Form](https://github.com/user-attachments/assets/ff97c378-d45a-4af6-ae9f-4bf6544eb865)

---

## ✅ Registration Successful

![Result](https://github.com/user-attachments/assets/09e6b19b-0725-4b19-a766-4e475f733821)

---

## 🗄 Database Records

![Database](https://github.com/user-attachments/assets/f2c3e98e-049e-4c1a-aef8-c1d0c377daa5)

---

## ☁️ Object Storage

![Storage](https://github.com/user-attachments/assets/6cdced10-ed01-4b82-936e-74de7f60198f)

---

## ⚡ Backend Function

![Lambda](https://github.com/user-attachments/assets/7e4d51e0-0074-4870-a381-5325564e44f9)

---

# 📂 Repository Structure

```text
aws-ai-visitor-management-system/
│
├── index.html
├── style.css
├── script.js
├── lambda_function.py
└── README.md
```

---

# 🎯 Learning Outcomes

- Serverless Computing
- REST API Development
- Object Storage
- NoSQL Database Design
- AI Service Integration
- Access Management
- Monitoring and Logging

---

# 📈 Project Highlights

✅ Real-Time Visitor Registration  
✅ AI-Based Face Detection  
✅ Personalized Voice Greeting  
✅ Secure Cloud Storage  
✅ Serverless Backend Architecture  
✅ Fully Managed Infrastructure  
✅ Event Driven Processing  
✅ Production Ready Design  

---

# 👨‍💻 Author

## Bhavesh Patil

Cloud Enthusiast • Developer • AI & ML Student

GitHub: https://github.com/Bhavesh2005patil

---

<div align="center">

## ⭐ If you found this project useful, consider giving it a star.

### Built with ❤️ using Serverless Cloud Technologies

</div>
