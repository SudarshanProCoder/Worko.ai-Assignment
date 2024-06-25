// src/routes/users.js
const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

// Example of a protected route
router.get('/', auth, async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
    