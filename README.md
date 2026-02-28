# SetSail

SetSail is a Travel & Tourism web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to explore destinations, generate AI-powered travel itineraries, and enables admins to dynamically manage trips and monitor platform activity.

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

## 📁 Project Structure

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

## Run Locally

1. Clone the Repository:
   - git clone <[github.com/gauravm2003/Setsail-Website]>
2. Install deps:
   - Root: `npm install`
   - Backend: `cd Backend && npm install`
3. Start backend:
   - `cd Backend && npm run dev`
4. Start frontend:
   - `cd Frontend && npm run dev`
