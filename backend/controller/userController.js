export const activateDummySubscription = async (req, res) => {
    try {
        const userId = req.user._id; // Auth middleware se authenticated user id

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { isSubscribed: true },
            { new: true }
        ).select("-password");

        res.status(200).json({
            message: "Subscription activated successfully! Welcome to premium club.",
            user: updatedUser
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};