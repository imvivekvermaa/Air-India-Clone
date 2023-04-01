const mongoose = require('mongoose');

const connect = async () => {
    console.log("Mongodb connection requested.")
    return await mongoose.connect('mongodb://localhost/project')
}

module.exports = connect;