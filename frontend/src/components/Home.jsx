import React, { useState, useEffect } from 'react';
import { frontendcreatedeploy12 } from '../backendpath/createuser.js';

const Home = () => {
  const { createBooking } = frontendcreatedeploy12();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    doorOrWindow: '',
    size: '',
    material: '',
    color: '',
    installationDate: ''
  });

  const [formColor, setFormColor] = useState('');
  const [bgColor, setBgColor] = useState('');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    setFormColor(getRandomColor());
    setBgColor(getRandomColor());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    
    const response = await createBooking(formData);

    if (response.success) {
      console.log(response.message);
      alert("sucess");
      // Optional: show success alert
    } else {
      console.error(response.message);
      // Optional: show error alert
    }
  };

  return (
    <div className="vw-100 d-flex flex-column justify-content-center align-items-center py-5" style={{ backgroundColor: bgColor }}>
      <form
        onSubmit={handleSubmit}
        className="w-100 h-100 p-5 shadow-lg rounded-lg"
        style={{ maxWidth: '1000px', backgroundColor: formColor }}
      >
        <h2 className="text-center mb-4 text-primary">Welcome to the Dashboard</h2>
        <p className="lead text-center mb-4 text-muted">
          This is your main dashboard where you can explore different sections, manage your profile, and customize your settings.
        </p>

        <section className="fitting-details-section py-4 w-100 h-100 p-4 bg-white" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 className="text-center mb-4 text-success">Booking Details</h3>

          <div className="form-group">
            <label htmlFor="name" className="text-dark">Name</label>
            <input type="text" className="form-control shadow-sm" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="text-dark">Email</label>
            <input type="email" className="form-control shadow-sm" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber" className="text-dark">Phone Number</label>
            <input type="text" className="form-control shadow-sm" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required placeholder="Enter your phone number" />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="text-dark">Address</label>
            <input type="text" className="form-control shadow-sm" id="address" name="address" value={formData.address} onChange={handleChange} required placeholder="Enter your address" />
          </div>

          <h4 className="text-center mb-3">Fitting Details</h4>

          <div className="form-group">
            <label htmlFor="doorOrWindow" className="text-dark">Door or Window</label>
            <select className="form-control shadow-sm" id="doorOrWindow" name="doorOrWindow" value={formData.doorOrWindow} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="door">Door</option>
              <option value="window">Window</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="size" className="text-dark">Size (e.g., 2m x 3m)</label>
            <input type="text" className="form-control shadow-sm" id="size" name="size" value={formData.size} onChange={handleChange} required placeholder="Enter fitting size" />
          </div>

          <div className="form-group">
            <label htmlFor="material" className="text-dark">Material</label>
            <select className="form-control shadow-sm" id="material" name="material" value={formData.material} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="aluminum">Aluminum</option>
              <option value="steel">Steel</option>
              <option value="wood">Wood</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="color" className="text-dark">Color</label>
            <input type="text" className="form-control shadow-sm" id="color" name="color" value={formData.color} onChange={handleChange} required placeholder="Enter color" />
          </div>

          <div className="form-group">
            <label htmlFor="installationDate" className="text-dark">Installation Date</label>
            <input type="date" className="form-control shadow-sm" id="installationDate" name="installationDate" value={formData.installationDate} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-primary btn-lg w-100 mt-4 shadow-sm">
            Submit
          </button>
        </section>

        <section className="cta-section py-5 text-center w-100 h-100 p-4 bg-light" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 className="text-info">Ready to take action?</h3>
          <p className="lead">Click below to get started with your tasks, settings, or explore more features.</p>
          <button className="btn btn-primary btn-lg">Get Started</button>
        </section>
      </form>
    </div>
  );
};

export default Home;
