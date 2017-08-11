const express = require('express');
const flightsService = require('../services/flights.service');

const router = express.Router();

router.post('/', function(req, res, next) {
    const parsedFlights = flightsService.parse(req.body);
    res.json(parsedFlights);
});

module.exports = router;
