const express = require("express");
const app = express();
const path = require('path')
const PORT = 5000;
require('./middleWare/mongoConnection')
const route = require('./routes/userRoute')
const todoRoute = require('./routes/todoRoute')
const cors = require('cors')


app.use(express.json())
app.use(express.static(path.resolve(path.join(__dirname,"public"))))
app.use(route)
app.use(todoRoute)
app.use(cors({
    origin:"*",
    withCredentials:true,
}));


app.listen(PORT, ()=>{
    console.log("server is running on" , PORT);
})