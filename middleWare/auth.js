const jwt = require('jsonwebtoken')
const secKey = "asdfghjkl"

const middleWare = (req,res,next) =>{
    try {
        const barerHeader = req.header('Authorization')
        if(!barerHeader) return res.status(400).send({message:"User UnAuthorize"})
         jwt.verify(barerHeader,secKey,(err,user)=>{
        if(err) return res.status(400).send({message:'Invalid Authrization'})
        req.userId = user.userId
    next()
        })
    } catch (error) {
       res.status(500).send({message:error.message})     
    }

}

module.exports = middleWare