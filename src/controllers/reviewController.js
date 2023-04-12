const ReviewService = require('../service/reviewService')


const createAReview= async (req, res)=> {
    try {
        const review= await ReviewService.createReview(req.body);
        res.status(200).json({
            success: true,
            message: 'Successfully created Review.',
            data: review
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong.'
        })
    }
}

const getReview = async (req, res)=> {
    try {
        const review= await ReviewService.getReview(req.params.userId, req.params.flightId);
        res.status(200).json({
            success: true,
            message: 'Successfully Fetched the  Review.',
            data: review
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong.'
        })
    }
}

const getAllReview = async (req, res)=> {
    try {
        const review= await ReviewService.getAllReview(req.params.flight);
        res.status(200).json({
            success: true,
            message: 'Successfully Fetched all the  Reviews.',
            data: review
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong.'
        })
    }
}

const destroyReview = async (req, res)=> {
    try {
        const review= await ReviewService.destroyReview(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Successfully Deleted the  Review.',
            data: review
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong.'
        })
    }
}

module.exports ={
    createAReview,
    getReview,
    getAllReview,
    destroyReview
}