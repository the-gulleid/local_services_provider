# ServiLink: A Local Service Marketplace Platform
## 1. Project Title and Purpose

Project Name: ServiLink  
Group Name:Innovators  
Course: Full-Stack Web Development (Telesom Academy)  
Instructor: Eng. Zakaria Mohamed  
Submission Date: February 18, 2026  

----
Purpose:
 In today’s digital era, many essential daily services such as plumbing, electrical work, cleaning, and technical maintenance are still accessed through informal and inefficient methods.There is currently a significant lack of dedicated software platforms that effectively connect skilled service providers with customers in a structured, reliable, and transparent way. As a result, customers struggle to find trustworthy professionals, while skilled workers face difficulties in reaching potential clients and growing their businesses.
ServiLink is a web-based Local Service Provider System designed to bridge this gap by creating a centralized digital marketplace that connects customers with verified andskilled service providers. The platform enables users to easily discover services, compare providers, make bookings, track service progress, and provide feedback through ratings andreviews. At the same time, service providers can manage their profiles, showcase their skills, receive job requests, and build professional reputations.By digitalizing the entire service
interaction process, ServiLink improves accessibility, efficiency, and trust for both customers and providers. The system not only simplifies service discovery and management but also contributes to economic empowerment by giving skilled workers greater visibility and opportunities in the digital economy. 

## 2. Team Members with Assigned Roles

| No | Name | Role |
| :--- | :--- | :--- |
| 1 | Isxaaq Cabdiqani | Web Backend |
| 2 | Guuleed Maxamed | Web Frontend |
| 3 | Naciima Haruun | UI/UX & Documentation |
| 4 | Cabdiraxmaan Ibrahim | Web Backend |
| 5 | Hibo Sulieman Amen | UI/UX & Documentation |
| 6 | Cabdiraxman Mustafe | Web Frontend |

---
## 3. Technologies Used

ServiLink is built using the **MERN Stack** and deployed on **Railway**:

- **Frontend:** React 18, Vite, React Router DOM, Axios, CSS3 (Global Stylesheet)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Authentication:** JWT (JSON Web Tokens), bcryptjs
- **Deployment:** Railway.app
- **Version Control:** Git & GitHub (Public Repository)
- **Design:** Figma (UI/UX Prototyping)
- **API Testing:** Postman

 ## 4. Installation Instructions
Step 1
…cd servilink

Step 2:Backend SetUp
cd backend
npm install
Create a .env file (see Environment Variables section)
npm run dev
Backend runs on http://localhost:5000

Step 3:Frontend Setup
--Open a new terminal--
cd frontend
npm install
npm run dev

Frontend runs on http://localhost:5173

 ## 5. Environment Variable Configuration
Create a .env file in backend root:
PORT=3000
##6. API Endpoints Documentation
Base URL: http://localhost:3000/api

-**Auth**:
POST /auth/register
POST /auth/login
GET /auth/me

-**Users**:
GET /users/profile
POST /users/profile

-**Bookings**:
POST /bookings
GET /bookings/my
PUT /bookings/:id/accept
PUT /bookings/:id/reject

-**Providers**:
POST /providers/profile
GET /providers

-**Services**:
POST /services
GET /services

-**Reviews**:
POST /reviews
GET /reviews/service/:id

## 6.  Implemented Features
-Role-Based Access Control: Separate dashboards for Customers, Service Providers, and Administrators.
-Secure Authentication: JWT-based login/register with password hashing (bcrypt).
-Provider Verification: Admin approval system ensures only trusted providers are visible.
-Service Discovery: Browse services by category with detailed provider profiles.
-Booking System: End-to-end booking flow (Pending → Accepted → Completed).
-Reviews & Ratings: Customers can rate providers after completed bookings.
-Responsive Design: Fully responsive UI for mobile and desktop using a single global CSS file.
-Error Handling: Comprehensive backend error middleware and frontend validation.
-CORS Configuration: Configured for both localhost and Railway deployment domains.

------
## 7. LINK AND DETAILED DOCUMENTATION FILE
User Dashboard UI:
https://tinyurl.com/servilink-user-UI

Provider Dashboard UI:
https://www.figma.com/make/mocqjTciUehGpAT2EiUTJU/Admin-Dashboard-UI

Admin Dashboard (Repository):
https://github.com/the-gulleid/local_services_provider

Detailed Documentation wth Demo Screenshots: https://tinyurl.com/servilinkdocumentation

Github Repository Link: https://github.com/the-gulleid/local_services_provider/tree/main

------

## 8. Challenges Faced and Solutions
### 8.1 CORS Configuration for Deployment
Challenge: Initially, the frontend could not communicate with the backend after deployment due to Cross-Origin Resource Sharing restrictions.
Solution: Configured Express CORS middleware to explicitly allow requests from both localhost and the Railway deployment domain.

### 8.2: JWT Authentication & Role-Based Access
Challenge: Managing three different user roles (Customer, Provider, Admin) with secure access control was complex.
Solution: Created a reusable roleMiddleware.js that verifies the JWT token and checks the user's role before granting access to protected routes.
### 8.3: Database Relationship Complexity
Challenge: Linking Users, ProviderProfiles, Bookings, and Reviews without creating circular dependencies.
Solution: Used Mongoose ref fields with strategic indexing (e.g., compound index on booking.providerId + customerId) and .populate() for efficient data fetching.
### 8.4: Booking State Management
Challenge: Keeping the booking status synchronized between customer and provider dashboards in real-time.
Solution: Implemented a clear state machine in the backend and used React Context API to propagate status updates instantly to the UI.


-----

## 9. Future Improvements

Based on our development roadmap and team feedback, the following enhancements are planned for future versions of ServiLink:

-AI-Powered Chatbot: Integrate an intelligent chatbot to assist customers in finding the right service providers based on natural language queries and automated support.

-Real-Time Chat: Implement Socket.io for direct messaging between customers and providers for better coordination.

-Payment Integration: Integrate local payment solutions like Telesom ZAAD or Stripe for secure in-app transactions.

-Push Notifications: Add email and SMS notifications using Nodemailer/Twilio to alert users about booking updates and approvals.

-Map & Location Services: Integrate Google Maps or Mapbox to show provider locations and enable location-based search.

-Mobile Application: Develop a React Native mobile app to provide on-the-go access for customers and providers.

-Advanced Search & Filters: Add filters for price range, availability, and rating to improve service discovery.

-Analytics Dashboard: Provide providers and admins with insights on bookings, earnings, and user engagement.

## 10. Conclusion

ServiLink demonstrates a complete full-stack solution for solving real-world service discovery challenges. The project applies modern web technologies, clean architecture, and role-based system design to deliver a scalable, secure, and user-friendly platform suitable for real-world deployment.





