const mongoose= require('mongoose');

var userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    country:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    phNum:{
        type: Number,
        required: true
    },
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
})

const Userdb = mongoose.model('userdb', userSchema);

module.exports = Userdb;