const mongoose = require("mongoose");

const drSchema = new mongoose.Schema({
    license:{
        type: String,
        unique: true,
        required: true,
    },
    exp:{
        type: String,
        required: true,
    },
    speciality:{
        type: String,
        required: true,
    },
    resume: {
        type : String,
        
    }

});

const drs = new mongoose.model("drs",drSchema);

module.exports = drs;