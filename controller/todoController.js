const Todo = require('../model/toDoModel')

const todoList = (req,res)=>{
   const {item} = req.body;

 if(!item){
    return res.status(400).json({
        message: "Please provide data"
    })
 }else{
    const todoData = new Todo({
        item,
        userId:req.userId
    })
    todoData.save();

   return res.status(200).json({ message:"update items"})
 }
}

const getTodoList = async (req,res)=>{
    try{
        const data = await Todo.find({userId: req.userId})
        if(!data){
            return res.status(500).json({
                message: "Internal server error"
            })
        }else{
            return res.status(200).json({data})

        }
            
    }catch{
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

const putTodoList = async (req,res) =>{
    
    try {
        const {item} = req.body
        const data = await Todo.findByIdAndUpdate({_id:req.params.id},{item})
        if(!data){
            return res.send({message:"data invalid"})
        }else{
      
            return res.send({message:"Update SuccessFully"})
        }
        
    } catch (error) {
        console.log(error);
        return res.status(400).send({meaasge:"error"})
        
    }
}
const delTodoList = async (req,res) =>{
    try {
        await Todo.findByIdAndDelete(req.params.id)
        return res.send({message:"user deleted"})
        
    } catch (error) {
        console.log(error);
        return res.status(400).send({meaasge:"error"})
           
    }
}
module.exports = {todoList,getTodoList,putTodoList,delTodoList};