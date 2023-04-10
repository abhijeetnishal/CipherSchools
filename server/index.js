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
app.use(cors());

//require database connection 
const dbConnect = require("./database/dbConnect");
// execute database connection 
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
const userRouter = require('./routes/userRoutes')
app.use('/api/auth',userRouter)