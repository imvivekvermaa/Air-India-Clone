const express= require("express");

const router= express.Router();

const helpDetails = require("../../controllers/helpController");
const airlineController = require('../../controllers/airlineControllers')
const flightController = require('../../controllers/flightControllers')
const reviewController= require('../../controllers/reviewController')
const bookingController= require('../../controllers/bookingController')

router.get("/help",helpDetails);
router.post('/airline', airlineController.createAirline)
router.get('/getAirline/:name', airlineController.getAirline)
router.get('/getAllairlines', airlineController.getAllAirline)
router.delete('/deleteAirline', airlineController.destroyAirline)


router.post('/flight', flightController.createFlight)
router.get('/getflight/:flightNumber', flightController.getFlight)
router.get('/getAllflights', flightController.getAllFlights)
router.delete('/deleteflight', flightController.destroyFlight)

router.post('/review', reviewController.createAReview)
router.get('/review/:flightId/:userId',reviewController.getReview )
router.get('/getAllReview/:flightId',reviewController.getAllReview )
router.delete('/deleteReview/:flightId', reviewController.destroyReview)

router.post('/booking', bookingController.createBooking)
router.get('/booking/:id/boardingPass',bookingController.getBoardingPass)
router.delete('/booking/:id',bookingController.cancelBooking)
module.exports = router;