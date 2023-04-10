//import express 
const express = require('express');

//create an express instance
const app = express();

//To parse the incoming requests with JSON we are using express.json() which is a built-in middleware function in Express.
app.use(express.json());


//configure env
const dotenv = require('dotenv');
dotenv.config();

//Define port
const port  = process.env.PORT || 4000;

//start server
app.listen(port, (req, res)=>{
    console.log(`Server Listening at port ${port}`);
})