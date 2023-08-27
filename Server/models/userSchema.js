const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required: true,
    },
    phone:{
        type :String  ,
        unique: true,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    dob:{
        type: String,
        unique: true,
        required: true,
    },
    gender:{
        type: String,
        unique: true,
        required: true,
    }

});

const users = new mongoose.model("users",userSchema);

module.exports = users;