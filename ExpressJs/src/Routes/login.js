// Routes/login.js

require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


router.post('/login', (req, res) => {
  // Your login logic here, and if the user is authenticated:
  const user = { id: 'user-id', email: 'user@example.com' }; // Replace with user data
  const token = jwt.sign(user, secretKey, { expiresIn: '1h' }); // Sign the token
  res.json({ token });
});

module.exports = router;
