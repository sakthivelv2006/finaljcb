// createuser.js
export const frontendcreatedeploy12 = () => {
    // Send OTP to the user's email
    const sendOTP = async (email) => {
      try {
        const res = await fetch("/api/registers/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        const data = await res.json();
        return res.ok
          ? { success: true, message: "OTP sent successfully" }
          : { success: false, message: data.message || "Error sending OTP" };
      } catch {
        return { success: false, message: "Server connection error" };
      }
    };
  
    // Create a new user
    const createnewuser = async (newUser) => {
      try {
        const res = await fetch("https://aluminium-ulwg.onrender.com/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });
        const data = await res.json();
        return res.ok
          ? { success: true, message: "User registered successfully" }
          : { success: false, message: data.message || "Registration failed" };
      } catch {
        return { success: false, message: "make the check box enable karo" };
      }
    };
  
    // User login functionality
    const loginUser = async (loginData) => {
      try {
        const res = await fetch("https://aluminium-ulwg.onrender.com/api/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        });
        const data = await res.json();
        return res.ok
          ? { success: true, message: "Login successful" }
          : { success: false, message: data.message || "Login failed" };
      } catch {
        return { success: false, message: "Server connection error" };
      }
    };
  
    // Create booking
    const createBooking = async (bookingData) => {
      try {
        const res = await fetch("https://aluminium-ulwg.onrender.com/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        });
        const data = await res.json();
        return res.ok
          ? { success: true, message: "Booking created successfully" }
          : { success: false, message: data.message || "Booking creation failed" };
      } catch {
        return { success: false, message: "Server connection error" };
      }
    };
  
    return { sendOTP, createnewuser, loginUser, createBooking };
  };
  