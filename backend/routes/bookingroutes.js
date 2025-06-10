import express from 'express';
import { createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking } from '../controller/bookingcontroller.js'; // Fix path for controller

const router = express.Router();

// Create a new booking
router.post('/bookings', createBooking);

// Get all bookings
router.get('/bookings', getAllBookings);

// Get a booking by ID
router.get('/bookings/:id', getBookingById);

// Update a booking by ID
router.put('/bookings/:id', updateBooking);

// Delete a booking by ID
router.delete('/bookings/:id', deleteBooking);

export default router;
