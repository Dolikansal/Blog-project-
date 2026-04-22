const User = require('../models/User');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "User already exists" });

        // Password hash karna (Security ke liye)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Naya user create karna
        user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();
        res.status(201).json({ msg: "User registered successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { registerUser };