const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
const userSchema = require('../models/userModel');

const updateUserProfile = async (req, res)=>{
    try{

    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal Server Error');
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
    //taking user data from client
    const { currentPassword, newPassword, confirmNewPassword } = req.body;
    //get token from cookie 
    const token = req.cookies.auth_cookie.token;
    const id = req.cookies.auth_cookie.id;

    try{
        jwt.verify(token, process.env.secretKey, {}, async(err, info)=>{
            if(err)
                return res.status(401).json('user not authenticated');
            //(401) - unautherized
            else{
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

const updateUserInterest = async (req, res)=>{

    try{

    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
}

const getAllFollowers = async (req, res)=>{
    try{

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
    getAllFollowers
}