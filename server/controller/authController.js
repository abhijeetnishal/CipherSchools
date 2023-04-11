const userSchema = require('../models/userModel');


/*
1. Take user data: {first name, last name, email, phone(optional), password}
2. Now implement input validation.
3. Check user is already registered or not using email
4. If not registered then save data (with passsword encrypted) to DB.
5. Else return user already registered.
*/
const register = async (req, res)=>{
    const {firstName, lastName, email, phone, password} = req.body;

    //using try catch for error handling
    try{
        if(!firstName || !lastName || !email || !password){
            //Bad request (400)
            res.status(400).json('Enter Required Input Fields');
        }
        else{
            const emailExist = userSchema.findOne({email: email});
            //check if user already registered or not
            if(emailExist){
                //request could not be completed due to a conflict with the current state of the target resource
                res.status(409).json('Email Already Registered');
            }
            else{
                //hash the password
                
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
*/
const login = async (req, res)=>{
    const {email, password} = req.body;

    try{

    }
    catch(error){
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
}

module.exports = {
    register,
    login
}