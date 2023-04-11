//import express to use router method
const express = require('express');

//express.Router() is a method in the Express.js that creates a new router object.
//It is used to define routes for a specific endpoint.
const userRouter = express.Router();

//import methods from authController
const { register, login } = require('../controller/authController');

//create endpoint for registering a user.
userRouter.post('/register-user', register);

//create endpoint for logging a user.
userRouter.post('/login-user', login);

//export to router to use in other files (index.js file)
module.exports = userRouter;