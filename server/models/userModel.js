const mongoose = require('mongoose');

//create a schema for user
const userSchema = new mongoose.Schema({
       //specify the schema recored
       firstName:{
        type: String,
        require: true,
        unique: false
       },
       lastName:{
        type: String,
        require: true,
        unique: false
       },
       email:{
        type: String,
        require: true,
        unique: true
       },
       //optional
       phone:{
        type: String,
        default: null
        //if no address is provided, the value will be null.
       },
       password:{
        type: String,
        require: true,
        unique: false
       }
}, {timestamps: true});

//This will create a user table or collection if there is no table with that name already.
module.exports = mongoose.model.user || mongoose.model("user", userSchema);