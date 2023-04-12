const BookingModel = require('../models/bookingModel');


const createBooking = async (data)=> {
    try {
        const newBooking = {
            id: data.id,
            flight: data.flight,
            user: data.user,
            status: data.status 
        }
        const response= await new BookingModel.BookingModel(newBooking).save();
        return response
    } catch (error) {
        console.log(error)
    }
}

const cancelBooking= async (id)=> {
    try {
        const response = await BookingModel.BookingModel.findOneAndUpdate({id: id}, {status: 'cancelled'})
        return response;
    } catch (error) {
        console.log(error)
    }
}

const boardingPass= async(id)=> {
    try {
        const response = await BookingModel.BookingModel.findOne({id: id}).populate('flight').populate('user').exec();
        return response;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createBooking,
    cancelBooking,
    boardingPass,
}