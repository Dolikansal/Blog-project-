const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Check user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: "User does not exist" });

        // 2. Password Match check
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

        // 3. JWT Token generate (Optional but good)
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });

        res.json({
            token,
            user: { username: user.username, email: user.email },
            msg: "Login Successful!"
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Export mein add karna mat bhulna
module.exports = { registerUser, loginUser };