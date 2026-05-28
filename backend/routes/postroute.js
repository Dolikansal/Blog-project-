const express = require('express');
const router = express.Router();
const Post = require('../model/post');

// 1. CREATE POST (Blog save karne ke liye)
router.post('/create', async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// 2. GET ALL POSTS (Saare blogs dikhane ke liye)
router.get('/all', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});


// 4. DELETE POST (ID ke zariye blog delete karna)
router.delete('/:id', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Blog has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}); 

// 5. UPDATE POST (ID ke zariye blog edit karna)
router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            { new: true } // Isse humein updated data wapas milta hai
        );
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// fetch post by id
router.get("/:id", async (req, res) => {
    try {
        // Check karein ki id valid hai ya nahi (Mongoose validation)
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post nahi mili!" });
        }
        res.status(200).json(post);
    } catch (err) {
        // Agar ID format galat hai (jaise length kam/zyada) toh 500 ki jagah focus karein
        res.status(500).json({ message: "Internal Server Error or Invalid ID format", error: err });
    }
});