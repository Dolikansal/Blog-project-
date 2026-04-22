const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postroute');
const authRoutes = require('./routes/authroutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json()); // JSON data handle karne ke liye
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes)
// Basic Route
app.get('/', (req, res) => {
  res.send("GreenBlog Backend is running!");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("❌ DB Connection Error:", err));