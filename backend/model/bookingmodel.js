import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String },

  doorOrWindow: { type: String, required: true },
  size: { type: String },
  material: { type: String, required: true },
  color: { type: String, required: true },
  installationDate: { type: Date, required: true }

}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
