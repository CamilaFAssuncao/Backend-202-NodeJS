require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

const express = require('express');
const jwt = require("jsonwebtoken");
const middleware = require('./Middleware/middleware');
const login = require('./Routes/login');
const protected = require('./Routes/protected');
const signin = require('./User/signin');

const app = express();

app.use(middleware)
app.use('/', protected);
app.use('/', login);


// app.get("/", (req, res) => {
//     res.send("Home Page")
//   })
  
//   app.get("/users", (req, res) => {
//     res.send("Users Page")
//   })

app.listen(3000, () => {
    console.log(`Server started on http://127.0.0.1:3000`)
});