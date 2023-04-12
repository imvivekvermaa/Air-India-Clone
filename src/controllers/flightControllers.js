const FlightService = require('../service/flightService')


const createFlight= async (req, res)=> {
    try {
        const flight= await FlightService.createFlight(req.body);
        console.log(flight)
        res.status(200).json({
            success: true,
            message: 'Successfully created Flight.',
            data: flight
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong.'
        })
    }
}

const getFlight = async (req, res)=> {
    try {
        const flight= await FlightService.getFlight(req.params.flightNumber);
        res.status(200).json({
            success: true,
            message: 'Successfully Fetched the Flight.',
            data: flight
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong.'
        })
    }
}

const getAllFlights = async (req, res)=> {
    try {
        const flights= await FlightService.getAllFlights(req.query);
        res.status(200).json({
            success: true,
            message: 'Successfully Fetched all the Flights.',
            data: flights
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong.'
        })
    }
}

const destroyFlight = async (req, res)=> {
    try {
        const flight= await FlightService.destroyFlight(req.query.flightNumber);
        res.status(200).json({
            success: true,
            message: 'Successfully Deleted the Flight.',
            data: flight
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
    createFlight,
    getFlight,
    getAllFlights,
    destroyFlight
}