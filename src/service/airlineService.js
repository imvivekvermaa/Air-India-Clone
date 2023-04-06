const AirlineModel = require('../models/airlineModel');


const createAirline = async (data)=> {
    try {
        const newAirline = {
            name: data.name

        }
        const response= await new AirlineModel(newAirline).save();
        return response
    } catch (error) {
        console.log(error)
    }
}

const destroyAirline= async (name)=> {
    try {
        const response = await AirlineModel.findOneAndDelete({name: name})
        return response;
    } catch (error) {
        console.log(error)
    }
}

const getAirline= async(name)=> {
    try {
        const response = await AirlineModel.findOne({name: name})
        return response;
    } catch (error) {
        console.log(error)
    }
}

const getAllAirline= async()=> {
    try {
        const response = await AirlineModel.find()
        return response;
    } catch (error) {
        
    }
}

module.exports = {
    createAirline,
    destroyAirline,
    getAirline,
    getAllAirline
}