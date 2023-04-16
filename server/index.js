//import express 
const express = require('express');

//create an express instance
const app = express();

//To parse the incoming requests with JSON we are using express.json() which is a built-in middleware function in Express.
app.use(express.json());

//The cookie-parser middleware is used to parse cookies from incoming requests, making them available in the req.cookies object.
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//configure env
const dotenv = require('dotenv');
dotenv.config();

//Define port
const port  = process.env.PORT || 4000;

//This will allow the user in the frontend to consume the APIs that you have created without any problem.
const cors = require('cors');
app.use(cors({credentials:true, origin: ['http://localhost:3000','https://cipherschoolsclone.vercel.app']}));


//import database connection file
const dbConnect = require("./models/dbConnect");
//execute database connection 
dbConnect(); 

//start server
app.listen(port, (req, res)=>{
    console.log(`Server Listening at port ${port}`);
})

//get request when server is live
app.get('/',(req, res)=>{
    res.status(200).json('Server is Live');
})

//user Router  
const userRouter = require('./routes/authRoutes')
app.use('/auth/',userRouter)

//profile Router
const profileRouter = require('./routes/profileRoutes');
app.use('/profile/', profileRouter);


module.exports = app;