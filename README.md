ServiLink – Local Service Marketplace Platform
1. Project Overview

Project Name: ServiLink
Group Name: Innovators
Course: Full-Stack Web Development (Telesom Academy)
Instructor: Eng. Zakaria Mohamed
Submission Date: February 18, 2026

Purpose

In today’s digital era, many essential daily services—such as plumbing, electrical work, cleaning, and technical maintenance—are still accessed through informal and inefficient methods. There is a significant lack of structured digital platforms that reliably connect customers with verified service providers.

As a result:

-Customers struggle to find trustworthy professionals.

-Skilled workers face challenges in reaching potential clients and expanding their businesses.

ServiLink is a web-based Local Service Marketplace designed to solve this problem by providing a centralized digital platform where customers can easily discover, compare, and book skilled service providers.

The system allows users to:

-Browse available services.

-View detailed provider profiles.

-Make and track bookings.

-Leave reviews and ratings.

At the same time, service providers can:

-Manage professional profiles.

-Receive and manage job requests.

-Build reputation through customer feedback.

By digitalizing the service interaction process, ServiLink improves accessibility, efficiency, and transparency while contributing to economic empowerment by increasing visibility and opportunities for skilled workers.

2. Team Members and Roles
No	Name	Role
1	Isxaaq Cabdiqani	Backend Developer
2	Guuleed Maxamed	Frontend Developer
3	Naciima Haruun	UI/UX & Documentation
4	Cabdiraxmaan Ibrahim	Backend Developer
5	Hibo Sulieman Amen	UI/UX & Documentation
6	Cabdiraxman Mustafe	Frontend Developer

3. Technologies Used

ServiLink is built using the MERN Stack and deployed on Railway.

Frontend

React 18

Vite

React Router DOM

Axios

CSS3 (Global Stylesheet)

Backend

Node.js

Express.js

Database

MongoDB Atlas (Mongoose ODM)

Authentication & Security

JWT (JSON Web Tokens)

bcryptjs (Password hashing)

DevOps & Tools

Deployment: Railway

Version Control: Git & GitHub

UI/UX Design: Figma

API Testing: Postman

-------

4. Installation Guide
Step 1: Clone the Repository
git clone https://github.com/your-repo/servilink.git
cd servilink

Step 2: Backend Setup
cd backend
npm install
# Create .env file (see Environment Variables section)
npm run dev

Backend runs on:
http://localhost:5000

Step 3: Frontend Setup

Open a new terminal:

cd frontend
npm install
npm run dev


Frontend runs on:
http://localhost:5173

5. Implemented Features

-Role-Based Access Control: Separate dashboards for Customers, Providers, and Admins.

-Secure Authentication: JWT-based login and registration with encrypted passwords.

-Provider Verification: Admin approval system for trusted providers.

-Service Discovery: Browse services by category with detailed provider profiles.

-Booking System: Full booking lifecycle (Pending → Accepted → Completed).

-Reviews & Ratings: Customers rate providers after service completion.

-Responsive Design: Fully responsive UI for desktop and mobile.

-Error Handling: Centralized backend error middleware and frontend validation.

-CORS Configuration: Supports both localhost and Railway domains.

-------

6. Screenshots & UI/UX Designs

User Dashboard UI:
https://tinyurl.com/servilink-user-UI

Provider Dashboard UI:
https://www.figma.com/make/mocqjTciUehGpAT2EiUTJU/Admin-Dashboard-UI

Admin Dashboard (Repository):
https://github.com/the-gulleid/local_services_provider

Detailed Documentation wth Demo Screenshots: https://tinyurl.com/servilinkdocumentation

Github Repository Link: https://github.com/the-gulleid/local_services_provider/tree/main

----------

7. Challenges and Solutions
7.1 CORS Configuration

Challenge: Frontend could not communicate with backend after deployment.
Solution: Configured Express CORS middleware to allow both localhost and Railway domains.

7.2 JWT Authentication & Roles

Challenge: Managing three user roles securely.
Solution: Implemented reusable role-based middleware to validate access to protected routes.

7.3 Database Relationships

Challenge: Managing relationships between Users, Providers, Bookings, and Reviews.
Solution: Used Mongoose ref fields with indexing and .populate() for efficient queries.

7.4 Booking State Synchronization

Challenge: Keeping booking status consistent across dashboards.
Solution: Implemented backend state machine and React Context API for live updates.

8. Future Improvements

Planned enhancements include:

-AI-powered chatbot for smart service recommendations.

-Real-time chat using Socket.io.

-Payment integration (ZAAD, Stripe).

-Email & SMS notifications (Nodemailer / Twilio).

-Google Maps or Mapbox integration.

-React Native mobile app.

-Advanced filters (price, rating, availability).

-Analytics dashboard for providers and admins.

9. Conclusion

ServiLink demonstrates a complete full-stack solution for solving real-world service discovery challenges. The project applies modern web technologies, clean architecture, and role-based system design to deliver a scalable, secure, and user-friendly platform suitable for real-world deployment.
