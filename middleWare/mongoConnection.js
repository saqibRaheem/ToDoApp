const mongoose = require('mongoose')

const URL = "mongodb+srv://saqib:saqib@cluster0.wdqfa.mongodb.net/saqib?retryWrites=true&w=majority"

mongoose.connect(URL)
mongoose.connection.on('connected', () => {
    console.log('mongoose is connected');
});
mongoose.connection.on('disconnected', () => {
    console.log('mongoosse is disconnected');
    process.exit(1)
});

