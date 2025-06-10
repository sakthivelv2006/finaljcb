import React from 'react';

const Settings = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle settings form submission logic
  };

  return (
    <div className="vw-100 d-flex flex-column justify-content-center align-items-center bg-light">
      {/* Settings Page Form Section */}
      <form
        onSubmit={handleSubmit}
        className="w-100 h-100 p-4 bg-white"
        style={{ maxWidth: '1000px' }}
      >
        <h2 className="text-center mb-4">Account Settings</h2>
        <p className="lead text-center mb-4">
          Manage your account settings and preferences here.
        </p>

        {/* General Settings Section */}
        <section className="general-settings-section py-5 w-100 h-100 p-4 bg-white" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 className="text-center mb-4">General Settings</h3>
          <div className="row d-flex justify-content-center">
            {/* Setting 1: Change Email */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4>Change Email</h4>
                  <input type="email" className="form-control" placeholder="New Email Address" />
                </div>
              </div>
            </div>
            {/* Setting 2: Change Password */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4>Change Password</h4>
                  <input type="password" className="form-control" placeholder="New Password" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notification Settings Section */}
        <section className="notification-settings-section py-5 w-100 h-100 p-4 bg-white" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 className="text-center mb-4">Notification Settings</h3>
          <div className="row d-flex justify-content-center">
            {/* Setting 1: Email Notifications */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4>Email Notifications</h4>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Receive email notifications</label>
                  </div>
                </div>
              </div>
            </div>
            {/* Setting 2: Push Notifications */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4>Push Notifications</h4>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Receive push notifications</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Settings Section */}
        <section className="privacy-settings-section py-5 w-100 h-100 p-4 bg-white" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 className="text-center mb-4">Privacy Settings</h3>
          <div className="row d-flex justify-content-center">
            {/* Setting 1: Profile Visibility */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4>Profile Visibility</h4>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Make my profile public</label>
                  </div>
                </div>
              </div>
            </div>
            {/* Setting 2: Data Sharing */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4>Data Sharing</h4>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Allow data sharing with third parties</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Language Settings Section */}
        <section className="language-settings-section py-5 w-100 h-100 p-4 bg-white" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 className="text-center mb-4">Language Preferences</h3>
          <div className="row d-flex justify-content-center">
            {/* Setting 1: Select Language */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4>Select Preferred Language</h4>
                  <select className="form-control">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Save Settings Section */}
        <section className="save-settings-section py-5 text-center w-100 h-100 p-4 bg-white" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <button type="submit" className="btn btn-success btn-lg">Save Settings</button>
        </section>

        {/* Footer Section */}
        <section className="footer-section py-4 bg-dark text-white text-center w-100 h-100 p-4 bg-white" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p>&copy; 2025 Settings Page. All Rights Reserved.</p>
        </section>
      </form>
    </div>
  );
};

export default Settings;
