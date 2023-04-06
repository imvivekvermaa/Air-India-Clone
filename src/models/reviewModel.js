const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: {
        type: String,
        requierd: true,
        minlenth: 5
    },
    flight : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight'
    }
}, {timestamps: true});

const reviewModel= new mongoose.Model('Review', reviewSchema);

module.exports = {
    reviewModel
}