const express= require('express');
const connect = require('./src/config/database');
const User = require('./src/models/userModel');
const saveUser = require('./src/controllers/userController');
const app= express();

app.get('/', (req, res)=> {
    res.status(200).send("Hello world.")
})

app.listen(3000, ()=> {
    console.log("Server has started successfully!")

    connect()
    console.log("Database has started successfully!")
    saveUser()

})