const BookingService = require('../service/bookingService')


const createBooking= async (req, res)=> {
    try {
        const booking= await BookingService.createBooking(req.body);
        res.status(200).json({
            success: true,
            message: 'Successfully created Booking.',
            data: booking
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong.'
        })
    }
}

const getBoardingPass = async (req, res)=> {
    try {
        const booking= await BookingService.boardingPass(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Successfully Fetched the  Boarding-Pass.',
            data: booking
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong.'
        })
    }
}

const cancelBooking = async (req, res)=> {
    try {
        const booking= await BookingService.cancelBooking(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Successfully Cancelled the Booking.',
            data: booking
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
    createBooking,
    getBoardingPass,
    cancelBooking
}