//Mongoose is an object data modeling (ODM) library for MongoDB and Node.js.
const mongoose = require('mongoose');
 
//configure dotenv to access secret keys
const dotenv = require('dotenv');
dotenv.config();

//Create and export a function to house the connection:
const dbConnect = async ()=>{
    //import url from .env file
    const url =process.env.DB_URL;

    //use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
    mongoose.connect(url, 
        {
            //these are options to ensure that the connection is done properly
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    //Use a then catch block to show if the connection was successful or not:
    .then(() => {
        console.log("Successfully connected to MongoDB Database");
    })
    .catch((error) => {
        console.log("Unable to connect to MongoDB Database");
        console.error(error);
    });
} 

//export the dbConnect method to use in main index.js file
module.exports = dbConnect;