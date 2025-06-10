import Booking from '../model/bookingmodel.js';
import nodemailer from 'nodemailer';

// Helper function to send email to owner
const sendBookingEmailToOwner = async (booking) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user:'sakthivelv202222@gmail.com', // Replace with your email
        pass: 'vjrriqtisknjfucn'            // Replace with your app password
      }
    });

    const mailOptions = {
      from: 'sakthivelv202222@gmail.com',
      to: 'sakthivelv202222@gmail.com',
      subject: 'New Booking Received',
      html: `
        <h2>New Booking Details</h2>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone Number:</strong> ${booking.phoneNumber}</p>
        <p><strong>Address:</strong> ${booking.address}</p>
        <p><strong>Type:</strong> ${booking.doorOrWindow}</p>
        <p><strong>Size:</strong> ${booking.size}</p>
        <p><strong>Material:</strong> ${booking.material}</p>
        <p><strong>Color:</strong> ${booking.color}</p>
        <p><strong>Installation Date:</strong> ${booking.installationDate}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log("Booking email sent to owner.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      address,
      doorOrWindow,
      size,
      material,
      color,
      installationDate
    } = req.body;

    const newBooking = new Booking({
      name,
      email,
      phoneNumber,
      address,
      doorOrWindow,
      size,
      material,
      color,
      installationDate
    });

    await newBooking.save();
    await sendBookingEmailToOwner(newBooking);

    res.status(201).json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Unable to create booking." });
  }
};

// Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Unable to fetch bookings." });
  }
};

// Get a booking by ID
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Unable to fetch booking." });
  }
};

// Update a booking by ID
export const updateBooking = async (req, res) => {
  try {
    const { name, email, phoneNumber, address, fittingDetails } = req.body;

    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { name, email, phoneNumber, address, fittingDetails },
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking updated successfully", booking: updatedBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Unable to update booking." });
  }
};

// Delete a booking by ID
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Unable to delete booking." });
  }
};
