const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    mobNo:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true
    },
    teamName:{
        type:String
    },
    teamUserId: [{
        playerName:{
            type:String
        },
        mobNo:{
            type:String
        }
    }
    ],
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true
    }
})

module.exports = mongoose.model('user',userSchema)