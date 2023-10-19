const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        reuired:true
    },
    email:{
        type:String,
        reuired:true
    },
    password:{
        type:String,
        reuired:true
    },
    phone:{
        type:String,
        reuired:true
    }
})

module.exports = new mongoose.model('Users', userSchema)