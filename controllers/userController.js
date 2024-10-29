const User = require('../models/user');

const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await User.create({ username, password });
        res.status(201).json({ message: 'User created successfully!', user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user', error });
    }
};

module.exports = { registerUser };
