const ReviewModel = require('../models/reviewModel');


const createReview = async (data)=> {
    try {
        const newReview = {
            comment: data.comment,
            user: data.user,
            flight: data.flight

        }
        console.log(newReview)
        const response= await new ReviewModel.reviewModel(newReview).save();
        return response
    } catch (error) {
        console.log(error)
    }
}

const destroyReview= async (id)=> {
    try {
        const response = await ReviewModel.reviewModel.findByIdAndDelete(id)
        return response;
    } catch (error) {
        console.log(error)
    }
}

const getReview= async(user, flight)=> {
    try {
        const response = await ReviewModel.reviewModel.findOne({user: user, flight: flight})
        return response;
    } catch (error) {
        console.log(error)
    }
}

const getAllReview= async(flight)=> {
    try {
        const response = await ReviewModel.reviewModel.find(flight)
        return response;
    } catch (error) {
        
    }
}

module.exports = {
    createReview,
    destroyReview,
    getReview,
    getAllReview
}