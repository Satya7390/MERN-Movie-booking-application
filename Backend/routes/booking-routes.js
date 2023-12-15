const express = require('express');
const Booking = require('../models/booking');
const bookingRouter = express.Router;

bookingRouter.post('/', Booking);
bookingRouter.delete('/:id', deleteBooking);


module.exports = bookingRouter;