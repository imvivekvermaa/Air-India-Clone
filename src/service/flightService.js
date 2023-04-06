const flightModel = require('../models/flightModel')


const createFlight = async (data)=> {
    try {
        const newFlight = {
            departureAirport: data.departureAirport,
            arrivalAirport: data.arrivalAirport,
            duration: data.duration,
            flightDate: data.flightDate,
            departureTime: data.departureTime,
            arrivalTIme: data.arrivalTIme,
            flightNumber:  data.flightNumber,
            price: data.price,
            airline: data.airlineId

        }
        const response= await new flightModel(newFlight).save();
        return response
    } catch (error) {
        console.log(error)
    }
}

const updateFlight= async (data)=> {
    try {
        const response = await flightModel.updateOn({flightNumber: data.flightNumber}, data)
        return response;
    } catch (error) {
        console.log(error)
    }
}


const destroyFlight= async (flightNumber)=> {
    try {
        const response = await flightModel.findOneAndDelete({flightNumber: flightNumber})
        return response;
    } catch (error) {
        console.log(error)
    }
}

const getFlight= async(flightNumber)=> {
    try {
        const response = await flightModel.findOne({flightNumber: flightNumber})
        return response;
    } catch (error) {
        console.log(error)
    }
}

const getAllFlights= async()=> {
    try {
        const response = await flightModel.find()
        return response;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createFlight,
    updateFlight,
    destroyFlight,
    getFlight,
    getAllFlights
}