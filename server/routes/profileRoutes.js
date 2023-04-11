const express = require('express');
const profileRouter = express.Router();

//import methods from profileController
const { updateUserProfile, updateUserPassword, updateUserInterest, getAllFollowers } = require('../controllers/profileController');

//create endpoint for updating user profile details
profileRouter.put('/update-user-profile', updateUserProfile);

//create endpoint for updating the password
profileRouter.put('/update-user-password', updateUserPassword);

//create a endpoint for updating user interests.
profileRouter.put('/update-user-interests', updateUserInterest);

//create a endpoint for getting followers details
profileRouter.post('/get-all-followers', getAllFollowers);

//export to router to use in other files (index.js file)
module.exports = profileRouter;