const defineUser = require("../models/userModel");
const mongoose= require('mongoose');


const User= mongoose.model('User', defineUser);

const createUser = async(user) => {
    return await User.create({
        email:  user.email,
        password: user.password,
        username: user.username
    });
}

module.exports= {
    createUser: createUser
}