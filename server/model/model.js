//This is a Node.js module that defines a Mongoose schema for a User
//and exports it as a model for use in other parts of the application.

const mongoose= require('mongoose');


var bankSchema = new mongoose.Schema({
    accNum:{
        type: Number,
        required: true,
        unique: true
    },
    bankName:{
        type: String,
        required: true
    },
    ifscCode:{
        type: String,
        required: true,
        unique: true 
    },
    accHolderName:{
        type: String,
        required: true
    },
    phNum:{
        type: Number,
        required: true,
        unique: true
    },
    aadharCardNum:{
        type: Number,
        required: true,
        unique: true
    }
})

var paymentSchema = new mongoose.Schema({
    accNum:{
        type: Number,
        required: true,
        unique: true
    },
    ifscCode:{
        type: String,
        required: true,
        unique: true 
    },
    recipientName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const Bankdb = mongoose.model('bankdb', bankSchema);
const Paymentdb = mongoose.model('paymentdb', paymentSchema);

module.exports = Bankdb;
module.exports = Paymentdb;
