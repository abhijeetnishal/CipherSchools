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
10. 
