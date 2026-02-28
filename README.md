# SetSail

SetSail is a full-stack Travel & Tourism web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).  
The platform allows users to explore destinations, generate AI-powered travel itineraries, and enables admins to dynamically manage trips and monitor platform activity.

---

## 🚀 Tech Stack

### Frontend
- React.js  
- Bootstrap  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  

### Authentication
- Google OAuth  

### AI Integration
- Gemini API (Google AI)  

### Storage
- Firebase Storage (for saving JSON itineraries)  

---

## 📌 Project Overview

SetSail is designed to:

- Showcase curated travel trips
- Allow users to generate custom AI-powered itineraries
- Store itinerary data securely
- Provide a secure admin panel for trip management
- Track AI usage and platform analytics

The application follows a secure and modular MERN architecture.

---

## 🌍 Key Features

### 👤 User-Facing Pages

- **Home Page**
  - Promotional UI
  - Displays 4 featured trips

- **About Us Page**
  - Platform purpose
  - Developer information

- **Destinations Page**
  - Displays all trips created by the admin
  - Dynamically fetched from MongoDB

- **AI Trip Planner Page**
  - Users input:
    - Destination
    - Number of Days
    - Number of People
    - Budget
  - Custom itinerary generated using AI
  - Redirected to a beautifully designed itinerary display page

---

## 🤖 AI Trip Planner Workflow

1. User submits trip details.
2. Input is injected into a structured prompt.
3. Prompt is sent to the Gemini API.
4. API returns a JSON-formatted itinerary.
5. JSON is stored in Firebase Storage.
6. Metadata (destination, budget, people, user, etc.) is logged in MongoDB.
7. User is redirected to a visual itinerary page.
8. Authenticated users can view their previous itineraries.

---

## 🔐 Authentication

- Google OAuth login system
- Only authenticated users can:
  - Generate AI itineraries
  - View previously generated itineraries
- Secure route protection implemented on both frontend and backend

---

## 🛠 Admin Panel

The Admin Panel is accessible only to authorized users.

### Admin Capabilities:

- Create trips (stored in MongoDB)
- View all trips in a table layout
- Edit trips
- Delete trips
- View AI itinerary logs
- Monitor user-generated activity
- Dashboard statistics:
  - Total trips
  - Popular destinations
  - Total itineraries generated

### Planned / Optional Enhancements:

- Upload trip images via Firebase Storage or Cloudinary
- User management panel
- Activity tracking dashboard improvements

---

## 📁 Project Structure


##  Project Structure

```sh
└── Setsail-Website/
    ├── Backend
    │   ├── .gitignore
    │   ├── config
    │   ├── controllers
    │   ├── index.js
    │   ├── models
    │   ├── package-lock.json
    │   ├── package.json
    │   └── routes
    └── Frontend
        ├── .gitignore
        ├── Basic_React.txt
        ├── README.md
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── public
        ├── src
        ├── vercel.json
        └── vite.config.js
```
