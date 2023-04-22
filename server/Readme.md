### Process to create this Project:
1. Create a folder with cipherSchools.
2. Now Within this folder, create two more folders name client for frontend and server for backend.
3. Now go to server folder and create a backend server
4. Then go to client folder to create react app.


### Process to setup backend using node.js and express:
1. Run command: "npm init" to initialize a new Node.js project
2. Install express using command npm install express.
3. Install dotenv using 'npm i dotenv' and import and create a port using command:
```js
    const dotenv = require('dotenv');
    dotenv.config();

    const port  = process.env.PORT || 4000;
```
4. Now use the express module using:
```js
    const express = require("express");
    Create a express app and start server:
    const app = express();

    app.listen(port, (req, res) => {
    console.log("Server listening at port "+ port);
    });
```
5. Now start the server using node filename(index.js or server.js)
This will start the server but after making changes you need to restart server again so we use nodemon package which restart the server automatically. 
6. To install nodemon use command: npm i nodemon.
7. Add nodemon to package.json as an NPM script script->
```script
    "scripts":{
        "start": "node index.js"
        "dev": "nodemon index.js"
    }
```
8. Now start server using command npm run dev.

9. To parse the incoming requests with JSON we are using express.json() which is a built-in middleware function in Express.
```js
    app.use(express.json());
```
10. Install cors using 'npm i cors' to consume apis for client.
```js
    const cors = require('cors');
    app.use(cors());
```
11. The cookie-parser middleware is used to parse cookies from incoming requests, making them available in the req.cookies object.
```js 
    const cookieParser = require('cookie-parser');
    app.use(cookieParser());
```

12. Setup database and import in index.js to connect to db:
```js
    //require database connection 
    const dbConnect = require("./database/dbConnect");

    // execute database connection 
    dbConnect();  
```

13. Finally use endpoints.
```js
//get request when server is live
app.get('/',(req, res)=>{
    res.status(200).json('Server is Live');
  })

//user Router 
const userRouter = require('./routes/userRoutes')
app.use('/api/auth',userRouter)
```
14. This is the basic backend setup.

### Create an API endpoints:
1. create a folder name routes and create different routes file according to your need.
2. create a file called authRoutes.js where all user related routes are present such as register, login, profile, etc.
3. Refer the authRoutes.js and profileRoutes.js file in routes folder to know how to create and use routes.

### Create a functinality for API endpoints:
1. Create a folder name controller and create different controller files according to your need.
2. create a file called authController.js where all functionality for route is implemented.
3. Refer the authController.js and profileController.js in controller folder to know more.

