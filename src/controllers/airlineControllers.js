const AirlineService = require('../service/airlineService')


const createAirline= async (req, res)=> {
    try {
        const airline= await AirlineService.createAirline(req.body);
        res.status(200).json({
            success: true,
            message: 'Successfully created Airline.',
            data: airline
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong.'
        })
    }
}

const getAirline = async (req, res)=> {
    try {
        const airline= await AirlineService.getAirline(req.params.name);
        console.log("I'm Here")
        res.status(200).json({
            success: true,
            message: 'Successfully Fetched the  Airline.',
            data: airline
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong.'
        })
    }
}

const getAllAirline = async (req, res)=> {
    try {
        const airlines= await AirlineService.getAllAirline();
        res.status(200).json({
            success: true,
            message: 'Successfully Fetched all the  Airlines.',
            data: airlines
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong.'
        })
    }
}

const destroyAirline = async (req, res)=> {
    try {
        const airlines= await AirlineService.destroyAirline(req.query.name);
        res.status(200).json({
            success: true,
            message: 'Successfully Deleted the  Airline.',
            data: airlines
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
    createAirline,
    getAirline,
    getAllAirline,
    destroyAirline
}