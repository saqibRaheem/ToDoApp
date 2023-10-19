const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    item:{
        type:String,
    },
    userId:mongoose.Types.ObjectId
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;