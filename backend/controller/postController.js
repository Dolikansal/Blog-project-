export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await post.findById(id);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Agar post premium hai toh user ka subscription check karo
        if (post.isPremium) {
            // req.user humare auth middleware se aayega
            if (!req.user || !req.user.isSubscribed) {
                return res.status(403).json({ 
                    message: "Premium content locked", 
                    isLocked: true 
                });
            }
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};