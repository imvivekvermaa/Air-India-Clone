const mongoose = require("mongoose");
const bcrypt= require('bcrypt')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
}, {timestamps: true});


//pre save is a trigger that gets a function and execute it before user object is save.
// and since its a pre camputaional function, we must define it before the User = mongoose.model('User, userSchema)

userSchema.pre('save', async function encryptPassword(next) {   //this pre fucntion calls the next function before
    const user = this;                                          // the flow reach and initiate the user schema/model
    const hash = await bcrypt.hash(user.password, 10);
    this.password =hash;
    next();
    console.log("Hi I'm from userModel.js - pre-save!!")

    console.log(hash)
});

userSchema.methods.isValidPassword = async function checkValidity(password) {
    const user= this;
    console.log("Hi I'm from userModel.js - login")

    const compare= await bcrypt.compare(password, user.password)
    return compare
};

const User = mongoose.model("User", userSchema);

module.exports= User