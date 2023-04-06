const mongoose= require('mongoose');

const bookingSchema= new mongoose.Schema('Booking', {
    id:{
        type: Number,
        required: true,
        unique: true
    },
    flight: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Flight' 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    status: {
        type: String,
        requred: true,
        default: 'In process',
        enum: ["booked","cancelled","in process"]
    }
}, {timestamps: true});

const BookingModel = new mongoose.Model('Booking', bookingSchema)

module.exports= {
    BookingModel
}