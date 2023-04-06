const express= require("express");

const router= express.Router();

const helpDetails = require("../../controllers/helpController");
const airlineController = require('../../controllers/airlineControllers')

router.get("/help",helpDetails);
router.post('/airline', airlineController.createAirline)
router.get('/getAirline/:name', airlineController.getAirline)
router.get('/getAllairlines', airlineController.getAllAirline)
router.get('/deleteAirline', airlineController.destroyAirline)



module.exports = router;