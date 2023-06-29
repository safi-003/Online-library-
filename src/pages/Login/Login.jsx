import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Perform login logic here
    // You can use the email and password state variables to access the entered values

    // Example login logic
    if (email === 'user@example.com' && password === 'password') {
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your email and password.');
    }
  };

  return (
    <div className="center-content">
      <div className="login-page">
        <div className="login-content">
          
       
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
      </div>
    </div>
  );
};

export default LoginPage;