import React, { useState } from 'react';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import Working from './Working';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = ({ userId, logout }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));

  const handleProfileClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdateDetails = () => {
    console.log('Updated Name:', name);
    console.log('Updated Email:', email);
    handleCloseModal();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info fixed-top vw-100">
        <div className="container-fluid w-100">
          <a className="navbar-brand text-white" href="#">Dashboard</a>
          <div className="navbar-nav mx-auto">
            <button
              className={`nav-link btn ${activeTab === 'home' ? 'btn-primary' : 'btn-light'} text-white`}
              onClick={() => handleTabChange('home')}
              style={{ marginRight: '240px' }}
            >
              Home
            </button>
            <button
              className={`nav-link btn ${activeTab === 'profile' ? 'btn-primary' : 'btn-light'} text-white`}
              onClick={() => handleTabChange('profile')}
              style={{ marginRight: '240px' }}
            >
              Business
            </button>
            <button
              className={`nav-link btn ${activeTab === 'working' ? 'btn-primary' : 'btn-light'} text-white`}
              onClick={() => handleTabChange('working')}
              style={{ marginRight: '240px' }}
            >
              Working
            </button>
            <button
              className={`nav-link btn ${activeTab === 'settings' ? 'btn-primary' : 'btn-light'} text-white`}
              onClick={() => handleTabChange('settings')}
              style={{ marginRight: '240px' }}
            >
              Settings
            </button>

            <button className="btn btn-danger text-white" onClick={logout} style={{ marginRight: '20px' }}>
              Logout
            </button>

            <div
              className="nav-link"
              onClick={handleProfileClick}
              style={{ cursor: 'pointer' }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#ff6347',
                  color: '#fff',
                  borderRadius: '50%',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                {randomLetter}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="p-4 mt-5">
        {activeTab === 'home' && <Home />}
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'settings' && <Settings />}
        {activeTab === 'working' && <Working />}
      </div>

      {showModal && (
        <div className="modal show" style={{ display: 'block' }} onClick={handleCloseModal}>
          <div
            className="modal-dialog"
            style={{ marginTop: '100px', maxWidth: '501px', marginLeft: 'auto', marginRight: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-light">
              <div className="modal-header bg-info text-white">
                <h5 className="modal-title">Update Profile</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="form-group mb-3">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleUpdateDetails}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
