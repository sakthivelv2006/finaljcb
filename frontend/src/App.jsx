import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import { frontendcreatedeploy12 } from './backendpath/createuser';

const App = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    checked: false
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [formStyles, setFormStyles] = useState({
    boxShadow: '',
    backgroundColor: '',
    inputBorderColor: ''
  });

  const { createnewuser, loginUser } = frontendcreatedeploy12();

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const updateStyles = () => {
    setFormStyles({
      boxShadow: `10px 30px 70px 12px ${getRandomColor()}`,
      backgroundColor: getRandomColor(),
      inputBorderColor: getRandomColor()
    });
  };

  useEffect(() => {
    const interval = setInterval(updateStyles, 3000);
    return () => clearInterval(interval);
  }, []);

  // Check if the user is already logged in on page load
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
    
    if (storedLoginStatus) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isRegister) {
      const res = await loginUser({ email: formData.email, password: formData.password });
      if (res.success) {
        setUserId(res.userId);
        setIsLoggedIn(true);
        // Store login status in localStorage
        localStorage.setItem('userId', res.userId);
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        alert(res.message);
      }
    } else {
      const res = await createnewuser(formData);
      alert(res.message);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    // Remove user data from localStorage
    localStorage.removeItem('userId');
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <Dashboard userId={userId} logout={logout} />
      ) : (
        <div className="vw-100 d-flex flex-column justify-content-center align-items-center bg-light">
          {/* 🔔 Instruction H1 Line Starts Here */}
          <h1 className="text-center mt-4 mb-2 text-danger">
            🖥️📱 For best experience:<br />
            👉 Open <strong>Desktop Site</strong> in Chrome settings ⚙️<br />
            📏 Then <strong>minimize screen</strong> to mobile view 🔽
          </h1>
          {/* 🔔 Instruction H1 Line Ends Here */}
          <form
            onSubmit={handleSubmit}
            className="w-100 h-100 p-4 bg-white"
            style={{
              maxWidth: '1000px',
              boxShadow: formStyles.boxShadow,
              backgroundColor: formStyles.backgroundColor,
              transition: 'all 0.5s ease-in-out'
            }}
          >
            <h2 className="text-center mb-4">{isRegister ? 'Register' : 'Login'} Form</h2>
            {isRegister && (
              <div className="form-group mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ height: '60px', borderColor: formStyles.inputBorderColor }}
                />
              </div>
            )}

            <div className="form-group mb-4">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                style={{ height: '60px', borderColor: formStyles.inputBorderColor }}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                style={{ height: '60px', borderColor: formStyles.inputBorderColor }}
              />
            </div>

            {isRegister && (
              <div className="form-check mb-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                  name="checked"
                  checked={formData.checked}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="check">Check me out</label>
              </div>
            )}

            <button type="submit" className="btn btn-primary btn-lg w-100 mb-3" style={{ height: '60px' }}>
              {isRegister ? 'Register' : 'Login'}
            </button>

            <div className="text-center">
              {isRegister ? (
                <p>
                  Already registered?{' '}
                  <button type="button" className="btn btn-link" onClick={() => setIsRegister(false)}>
                    Login
                  </button>
                </p>
              ) : (
                <p>
                  Don't have an account?{' '}
                  <button type="button" className="btn btn-link" onClick={() => setIsRegister(true)}>
                    Register
                  </button>
                </p>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
