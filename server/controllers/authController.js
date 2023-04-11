const userSchema = require('../models/userModel');
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

/*
1. Take user data: {first name, last name, email, phone(optional), password}
2. Now implement input validation.
3. Check user is already registered or not using email
4. If not registered then save data (with passsword encrypted) to DB.
5. Else return user already registered.
*/
const register = async (req, res)=>{
    //taking user data from client
    const {firstName, lastName, email, phone, password} = req.body;

    //using try catch for error handling
    try{
        //validate input
        if(!firstName || !lastName || !email || !password){
            //Bad request (400)
            res.status(400).json('Enter Required Input Fields');
        }
        //validate email
        else if(!validator.isEmail(email)){
            //400 - Bad request
            res.status(400).json('Invalid Email Address');
        }
        else{
            const emailExist = await userSchema.findOne({email: email});
            //check if user already registered or not
            if(emailExist){
                //request could not be completed due to a conflict with the current state of the target resource
                res.status(409).json('Email Already Registered');
            }
            else{
                //hash the password
                const hashedPassword = await bcrypt.hash(password, 10);

                //create a user data in DB
                const userData = await userSchema.create({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    password: hashedPassword
                });
                //created(201)
                res.status(201).json("User Registered Successfully");
            }
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
}

/*
1. Take user data:{email, password}
2. Now implement input validation
3. Check if email is present or not in DB.
4. If not present, return user doesn't exist.
5. If present, then check password is matched or not if matched logged in, else password doesn't match.
6. Create a token using jwt for authentication and autherization.
*/
const login = async (req, res)=>{
    //taking user data from client
    const {email, password} = req.body;

    try{
        //validate input
        if(!email || !password){
            //Bad request (400)
            return res.status(400).json('Enter Required Input Fields');
        }
        //validate email
        else if(!validator.isEmail(email)){
            //400 - Bad request
            return res.status(400).json('Invalid Email Address');
        }
        else{
            const emailExist = await userSchema.findOne({email: email});
            //check if user registered or not
            if(!emailExist){
                return res.status(404).json('Email Not Registered');
            }
            else{
                //compare the password saved in DB and entered by user.
                const matchPassword = await bcrypt.compare(password, emailExist.password);

                //if password doesn't match
                if(!matchPassword){
                    //401 - unauthorised
                    return res.status(401).json('Incorrect password');
                }
                else{
                    const user = emailExist;
                    const { firstName, lastName, email, phone, password } = user;
                    //create a jwt token
                    const token = jwt.sign({email, id:user._id}, process.env.secretKey);
                    
                    return res.cookie('auth_cookie', 
                    {   id: user._id,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phone: phone,
                        token: token
                    }).status(200).json('user logged-in successfully');
                }
            }
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
}

//Clear the cookie to logout
const logout = (req, res)=>{
    res.clearCookie('token').json('logout');
}

module.exports = {
    register,
    login,
    logout
}