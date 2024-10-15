const User = require('../models/user'); // Import the User model

// Function for user registration
const registerUser = async (req, res) => {
    try {
        const userData = req.body; // Get user data from request body
        const newUser = await User.create({
            name: userData.name, // Use the correct field names based on your User model
            password: userData.password,
        });
        res.status(201).json({ message: 'User created successfully!', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user', error });
    }
};

module.exports = { registerUser }; // Export the registerUser function
