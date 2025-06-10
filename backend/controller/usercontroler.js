import User from "../model/usermodel.js";
import nodemailer from "nodemailer";

// --- Helper function to generate OTP ---
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// --- Helper function to send email ---
const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user:'sakthivelv202222@gmail.com', // Replace with your email
        pass: 'vjrriqtisknjfucn'    // Replace with your email password or app password
      }
    });

    const mailOptions = {
      from: 'sakthivelv202222@gmail.com', // Replace with your email
      to,
      subject,
      html
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

// --- Create User ---
export const createUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // In a real application, you would hash the password here
      const newUser = new User({
        name,
        email,
        password // Insecure in a real application!
      });
  
      const savedUser = await newUser.save();
  
      // --- Send Welcome Email ---
      const subject = "Thanks for Registering on Our Website!";
      const html = `
        <h2>Welcome, ${name}!</h2>
        <p>Thank you for registering on our website. We're excited to have you with us.</p>
        <p>Feel free to explore and enjoy our features.</p>
        <br/>
        <p>Best Regards,<br/>The Team</p>
      `;
      await sendEmail(email, subject, html);
  
      res.status(201).json({
        message: "User created successfully and welcome email sent",
        user: {
          _id: savedUser._id,
          name: savedUser.name,
          email: savedUser.email
        }
      });
  
    } catch (error) {
      if (error.code === 11000) {
        return res.status(409).json({ message: "Email already exists" });
      }
      res.status(500).json({ message: error.message });
    }
  };
  
// --- Post Login (Without JWT and bcrypt) ---
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Insecure password comparison - DO NOT USE IN PRODUCTION
    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ user: { _id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- Update User ---
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const updatedFields = {};
    if (name) updatedFields.name = name;
    if (email) updatedFields.email = email;
    if (password) {
      // In a real application, you would hash the new password here
      updatedFields.password = password; // Insecure in a real application!
    }

    const updatedUser = await User.findByIdAndUpdate(id, updatedFields, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", user: { _id: updatedUser._id, name: updatedUser.name, email: updatedUser.email } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- Delete User ---
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- Enter Email and Send OTP ---
export const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User with this email not found" });
    }

    const otp = generateOTP();
    const otpExpiry = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    const subject = "Your OTP for Verification";
    const html = `<p>Your OTP is: <b>${otp}</b>. This OTP will expire in 10 minutes.</p>`;

    await sendEmail(email, subject, html);

    res.status(200).json({ message: "OTP sent to your email" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- Verify OTP ---
export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp === otp && user.otpExpiry > Date.now()) {
      user.otp = null;
      user.otpExpiry = null;
      await user.save();
      res.status(200).json({ message: "OTP verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid OTP or OTP has expired" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};