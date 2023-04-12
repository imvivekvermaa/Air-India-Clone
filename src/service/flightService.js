const flightModel = require('../models/flightModel')


const createFlight = async (data)=> {
    try {
        const newFlight = {
            departureAirport: data.departureAirport,
            arrivalAirport: data.arrivalAirport,
            duration: data.duration,
            departureTime: data.departureTime,
            arrivalTIme: data.arrivalTIme,
            flightNumber:  data.flightNumber,
            price: data.price,
            airline: data.airlineId

        }
        const response= await new flightModel.flightModel(newFlight).save();
        return response
    } catch (error) {
        console.log(error)
    }
}

const updateFlight= async (data)=> {
    try {
        const response = await flightModel.flightModel.updateOn({flightNumber: data.flightNumber}, data)
        return response;
    } catch (error) {
        console.log(error)
    }
}


const destroyFlight= async (flightNumber)=> {
    try {
        const response = await flightModel.flightModel.findOneAndDelete({flightNumber: flightNumber})
        return response;
    } catch (error) {
        console.log(error)
    }
}

const getFlight= async(flightNumber)=> {
    try {
        const response = await flightModel.flightModel.findOne({flightNumber: flightNumber})
        return response;
    } catch (error) {
        console.log(error)
    }
}

const getAllFlights= async(data)=> {
    try {
        let response
        if(data.sort){
            if(data.price){
                if(data.sort === 'Inc'){
                    response = await flightModel.flightModel.find().sort('price')
                }else{
                    response = await flightModel.flightModel.find().sort('-price')
                }
                
            }else if(data.duration){
                if(data.sort === 'Inc'){
                    response = await flightModel.flightModel.find().sort('duration')
                }else{
                    response = await flightModel.flightModel.find().sort('-duration')
                }
                
            }else{
                response = await flightModel.flightModel.find()
            }
        }else if(data.filter){
            if(data.price){
                if(data.filter === 'lt'){
                    response = await flightModel.flightModel.find({price: {$lt: data.price}})
                }else{
                    response = await flightModel.flightModel.find({price: {$gt: data.price}})
                }
                
            }else if(data.duration){
                if(data.filter === 'lt'){
                    response = await flightModel.flightModel.find({duration: {$lt: data.duration}})
                }else{
                    response = await flightModel.flightModel.find({duration: {$gt: data.duration}})
                }
                
            }else{
                response = await flightModel.flightModel.find()
            }
        }
        
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