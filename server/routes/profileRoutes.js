const express = require('express');
const profileRouter = express.Router();

//import methods from profileController
const { updateUserProfile, updateUserPassword, updateUserInterest, getAllFollowers, getUserDetails, getUserInterests } = require('../controllers/profileController');

//create endpoint for updating user profile details
profileRouter.put('/update-user-profile', updateUserProfile);

//create endpoint for updating the password
profileRouter.put('/update-user-password', updateUserPassword);

//create a endpoint for updating user interests.
profileRouter.put('/update-user-interests', updateUserInterest);

//create a endpoint for getting interests details
profileRouter.get('/get-all-interests', getUserInterests);

//create a endpoint for getting followers details
profileRouter.get('/get-all-followers', getAllFollowers);

//create a endpoint to get user details
profileRouter.get('/get-user-details', getUserDetails);

//export to router to use in other files (index.js file)
module.exports = profileRouter;