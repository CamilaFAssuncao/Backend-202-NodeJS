require('dotenv').config();

const secretKey = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");

// Middleware/middleware.js

function authenticationMiddleware(req, res, next) {
    // Your authentication logic using JWT here
    // Make sure to call next() to move to the next middleware or route handler
  }
  
  module.exports = authenticationMiddleware;
  