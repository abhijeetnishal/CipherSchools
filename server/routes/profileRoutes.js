const express = require('express');
const profileRouter = express.Router();

//create endpoint for updating user profile details
profileRouter.post('/update-user-profile', updateUserProfile);

//create endpoint for updating the password
profileRouter.post('/update-user-password', updateUserPassword);

//create a endpoint for updating user interests.
profileRouter.post('/update-user-interest', updateUserInterest);

//create a endpoint for getting followers details
profileRouter.get('/get-all-followers', getAllFollowers);

//export to router to use in other files (index.js file)
module.exports = profileRouter;