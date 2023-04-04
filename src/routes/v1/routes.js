const express= require("express");

const router= express.Router();

const helpDetails = require("../../controllers/helpController");


router.get("/help",helpDetails);



module.exports = router;