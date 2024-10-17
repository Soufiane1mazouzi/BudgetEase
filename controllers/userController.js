const User = require('../models/user'); // Make sure this path is correct

// Controller to handle user registration
const registerUser = async (req, res) => {
  try {
    const userData = req.body; // Assume user data comes from request body
    const newUser = await User.create({
      username: userData.name,
      password: userData.password,
    });
    res.status(201).json({ message: 'User created successfully!', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user', error });
  }
};

module.exports = { registerUser };
