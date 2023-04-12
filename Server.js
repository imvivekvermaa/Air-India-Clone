const express= require("express");
const connect = require("./src/config/database")
const app= express();
const User = require("./src/models/userModel")
const bodyParser = require('body-parser');
const apiRouter =require("./src/routes/route")
const passport= require('passport');
const authRouter= require('./src/routes/authRouter')
require('./src/utility/auth')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', authRouter)
app.use('/api', passport.authenticate('jwt',{session: false}),apiRouter )

// app.use(function(err, req, res, next){
//     res.status(err.status || 500);
//     res.json({
//         success: false,
//         error: err
//     })
// })
app.listen(5000, async()=> {
    
    await connect()
    console.log("Mongodb started successfully")
    console.log('Server has started successfully!')

    // console.log(user);
    
})