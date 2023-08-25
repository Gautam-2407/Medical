const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required: true,
    },
    age:{
        type : Number ,
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
    },
    history:{
        type: String,
        unique: true,
        required: true,
    },
    disease:{
        type: String,
        unique: true,
        required: true,
    },
    idproff:{
        type: Object,
        unique:true,
        required:true,
    },
    license:{
        type: String,
        unique: true,
        required: true,
    },
    exp:{
        type: Number,
        unique: true,
        required: true,
    },
    resume:{
        type: Object,
        unique: true,
        required: true,
    },
    specialist:{
        type: String,
        unique: true,
        required: true,
    },
    
});

const users = new mongoose.model("users",userSchema);

module.exports = users;