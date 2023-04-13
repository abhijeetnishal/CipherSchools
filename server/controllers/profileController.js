const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
const userSchema = require('../models/userModel');
const userInterestSchema = require('../models/userInterestsModel');
const userFollowerSchema = require('../models/userFollowersModel');

/*
1. Check if user is authenticated or not.
2. If authenticated then take input from client and validate input.
3. After validating input update the profile details in DB.
*/

const updateUserProfile = async (req, res)=>{
    //get token from cookie 
    const token = req.cookies.auth_cookie.token;

    try{
        jwt.verify(token, process.env.secretKey, {}, async(err, info)=>{
            if(err)
                return res.status(401).json({message: 'user not authenticated'});
            //(401) - unautherized
            else{
                //taking user data from client
                const { firstName, lastName, phone, image } = req.body;

                //input validation
                if(!firstName || !lastName){
                    //Bad request (400)
                    return res.status(400).json({message:'Enter Required Input Fields'});
                }
                else{
                    //get id from cookie
                    const id = req.cookies.auth_cookie.id;

                    const updateUser = {
                        firstName: firstName,
                        lastName: lastName,
                        phone: phone,
                        image: image || ''
                    }
                    await userSchema.findByIdAndUpdate(id, updateUser, {new: true});
                    res.status(200).json({ firstName, lastName, phone, image, message:'Profile updated'});
                }
            }
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'Internal Server Error'});
    }
}

/*
1. First check user authenticated or not.
2. If authenticated then take data from user and validate input
3. check if current password matches or not with password saved in DB.
4. if not matches then simply return enter correct password.
5. if matches, then check for new password and confirm password matches or not
6. if matches then, update the password in DB in encrypted form.
*/
const updateUserPassword = async (req, res)=>{
    //get token from cookie 
    const token = req.cookies.auth_cookie.token;

    try{
        jwt.verify(token, process.env.secretKey, {}, async(err, info)=>{
            if(err)
                return res.status(401).json('user not authenticated');
            //(401) - unautherized
            else{
                //taking user data from client
                const { currentPassword, newPassword, confirmNewPassword } = req.body;
                const id = req.cookies.auth_cookie.id;

                //input validation
                if(!currentPassword || !newPassword || !confirmNewPassword){
                    //Bad request (400)
                    return res.status(400).json('Enter Required Input Fields');
                }
                else{
                    const userExist = await userSchema.findOne({_id: id});
                    //compare the password saved in DB and entered by user.
                    const matchPassword = await bcrypt.compare(currentPassword, userExist.password);

                    //if password doesn't match
                    if(!matchPassword){
                        //401 - unauthorised
                        return res.status(401).json('Incorrect password');
                    }
                    else{
                        //check if newPassword not matches confirmNewPassword
                        if(newPassword !== confirmNewPassword){
                            return res.status(401).json('new password and confirm password not matches')
                        }
                        else{
                            //hash the new password
                            const hashedNewPassword = await bcrypt.hash(newPassword, 10);

                            await userSchema.findByIdAndUpdate(id, {password: hashedNewPassword}, {new: true} );
                            //updated (200-ok)
                            return res.status(200).json('password updated');
                        }
                    }
                }
            }
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
}

/*
1. authenticate the user
2. get interests from client
3. check if interest is present in DB or not if not present then create empty interest.
4. else update the interests.
*/
const updateUserInterest = async (req, res)=>{
    //get token from cookie 
    const token = req.cookies.auth_cookie.token;

    try{
        jwt.verify(token, process.env.secretKey, {}, async(err, info)=>{
            if(err)
                return res.status(401).json('user not authenticated');
            //(401) - unautherized
            else{
                //get interests from client
                const { interests } = req.body;
                
                //get userId from cookie
                const userId = req.cookies.auth_cookie.id;
        
                const interestsExist = await userInterestSchema.findOne({userId: userId});

                if(interestsExist){
                    const interest = await userInterestSchema.findOne({userId: userId});
                    //use the toString() method to convert the _id field to a string
                    const interestId =  interest._id.toString();
                    //update the interests data
                    const updateInterests = {
                        interestNames: interests,
                        userId: userId
                    }
                    const updatedInterests = await userInterestSchema.findByIdAndUpdate( interestId ,updateInterests, {new: true});
                    //updated (200-ok)
                    return res.status(200).json({message:'user interests updated', data: updateInterests.interestNames});
                }
                else{
                    const createInterests = {
                        interestNames: interests,
                        userId: userId
                    }
                    await userInterestSchema.create(createInterests);
                    return res.status(200).json('user interests created');
                }
            }
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
}

const getAllFollowers = async (req, res)=>{
    //get token from cookie 
    const token = req.cookies.auth_cookie.token;

    //error handling
    try{
        jwt.verify(token, process.env.secretKey, {}, async(err, info)=>{
            if(err)
                return res.status(401).json('user not authenticated');
            //(401) - unautherized
            else{
                //get details of followers
                // Empty `filter` means "match all documents"
                const getFollowers = await userFollowerSchema.find();

                return res.status(200).json(getFollowers);
            }
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
}

const getUserDetails = async(req, res)=>{
    //get token from cookie 
    const token = req.cookies.auth_cookie.token;

    //error handling
    try{
        jwt.verify(token, process.env.secretKey, {}, async(err, info)=>{
            if(err)
                return res.status(401).json('user not authenticated');
            //(401) - unautherized
            else{
                //get user-id
                const id = req.cookies.auth_cookie.id;

                const userDetails = await userSchema.findOne({_id: id});
                //send user data
                res.status(200).json({firstName: userDetails.firstName, lastName: userDetails.lastName, phone: userDetails.phone, image: userDetails.image})
            }
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
}

module.exports = {
    updateUserProfile,
    updateUserPassword,
    updateUserInterest,
    getAllFollowers,
    getUserDetails
}