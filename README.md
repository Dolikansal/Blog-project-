# ✍️ MERN Stack Blog Application

A responsive and feature-rich full-stack blogging platform built with **React, Vite, Node.js, Express, and MongoDB**. Designed to offer a seamless writing and reading experience with complete content management capabilities.

🔗 **Live Demo:** [https://dolikansal.github.io/Blog-project-/](https://dolikansal.github.io/Blog-project-/)

---

## 🌟 Overview

This application serves as a complete publishing platform where users can explore articles, publish their own blogs, and interact with content. It leverages a modern frontend architecture built on React and Vite for blazing-fast page loads, backed by a robust RESTful API.

---

## ✨ Key Features

- **User Authentication & Profiles:** Secure registration, login, and token-based session handling (JWT).
- **Post Creation & Rich Content:** Create, edit, and format rich-text blog posts with title, banner/cover images, and tags.
- **Full CRUD Support:** Complete control to create, view, update, and delete personal blog posts.
- **Dynamic Feed & Filtering:** Browse posts by categories, search by keywords, and view trending or recent stories.
- **Responsive Layout:** Clean, mobile-first design adapted for mobile devices, tablets, and desktop screens.
- **Fast Build & Asset Bundling:** Powered by Vite for optimized bundle size and quick load times.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework / Library:** React.js (via Vite)
- **Styling:** CSS3 / Modern Flexbox & Grid
- **Routing & State:** React Router DOM, React Hooks (`useState`, `useEffect`, `useContext`)
- **Deployment:** GitHub Pages

### **Backend & Database**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Security & Auth:** JSON Web Tokens (JWT), Bcrypt.js (Password Hashing), CORS

---
### Clone the Repository
git clone [https://github.com/dolikansal/Blog-project-.git](https://github.com/dolikansal/Blog-project-.git)
cd Blog-project-

### Populate your .env file with the required variables:
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/blogDB?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here
CLIENT_URL=http://localhost:5173

### Start the backend development server:

### Using nodemon for auto-reload
npm run dev

### Standard node execution
npm start

### Start the Vite development server:
npm run dev


## 📁 Project Structure

```text
├── client/                 # React Frontend (Vite Setup)
│   ├── public/             # Static assets & icons
│   ├── src/
│   │   ├── components/     # Reusable UI elements (Navbar, Footer, PostCard)
│   │   ├── pages/          # View pages (Home, CreatePost, PostDetails, Login)
│   │   ├── context/        # State & auth context
│   │   ├── App.jsx         # Main application routes
│   │   └── main.jsx        # App entry point
│   └── package.json
│
├── server/                 # Node/Express Backend (if in same repo)
│   ├── controllers/        # Request handling logic
│   ├── models/             # Mongoose schemas (User, Post)
│   ├── routes/             # API endpoints (/api/auth, /api/posts)
│   ├── middleware/         # Auth verification & error handlers
│   └── server.js           # Server entry point
└── README.md
