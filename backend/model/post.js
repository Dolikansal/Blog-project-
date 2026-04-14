const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        default: "Technology",
    },
    coverImage: {
        type: String,
        default: "",
    },
    // Baad mein hum ise User ID se connect karenge (Auth ke waqt)
    author: {
        type: String, 
        default: "Anonymous"
    }
}, { timestamps: true }); // Isse 'createdAt' aur 'updatedAt' apne aap ban jayenge

module.exports = mongoose.model('Post', PostSchema);