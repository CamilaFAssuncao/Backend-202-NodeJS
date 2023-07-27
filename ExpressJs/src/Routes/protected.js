// Load environment variables from .env file
require('dotenv').config();

// Get the secret key from environment variables
const secretKey = process.env.SECRET_KEY;

// Import required modules
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Middleware function to authenticate the JWT token
function authenticateToken(req, res, next) {
  // Extract the JWT token from the 'Authorization' header
  const token = req.header('Authorization');

  // Check if the token exists in the request header
  if (!token) {
    // If token is not provided, send a 401 status response with an error message
    return res.status(401).json({ message: 'Token não fornecido.' });
  }

  // Verify the token using the secret key
  jwt.verify(token, secretKey, (err, user) => {
    // Check for errors in verifying the token
    if (err) {
      // If token verification fails, send a 403 status response with an error message
      return res.status(403).json({ message: 'Token inválido.' });
    }

    // Attach the user data obtained from the token to the request object
    req.user = user;

    // Call the next middleware or route handler
    next();
  });
}

// Define a protected route that uses the authenticateToken middleware
router.get('/protected', authenticateToken, (req, res) => {
  // This route will only be accessible if the token is valid
  // Send a JSON response with a success message and the user data from the token
  res.json({ message: 'Protected route accessed successfully!', user: req.user });
});

// Export the router to be used in other files/modules
module.exports = router;


