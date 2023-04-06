const mongoose = require('mongoose');

const airlineSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    website: {
        type: String
    }
}, {timeStamps: true});

const AirlineModel = new mongoose.model('Airline', airlineSchema);

module.exports = AirlineModel