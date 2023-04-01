const mongoose= require('mongoose');
const bcrypt= require('bcrypt')

// In mongoDB we first need to define the schema/table structure as given below and then
// we make a model out of it....

const defineUser = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    username: {
        type: String,
        required: true
    }
}, {timestamps: true})

//pre save is a trigger that gets a function and execute it before user object is save.
defineUser.pre('save', async function encryptPassword(next) {   //this pre fucntion calls the next function before
    const user = this;                                          // the flow reach and initiate the user schema/model
    const hash = await bcrypt.hash(this.password, 10);
    this.password =hash;
    next();
})

defineUser.method.isValidPassword = async (password) => {
    const user= this;
    const compare= await bcrypt.compare(password, user.password)
    return compare
}

module.exports= defineUser;