import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import '../styles/Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    telephone: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Add your login logic here
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Add Google OAuth logic here
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
    // Add Facebook OAuth logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit={handleSubmit} className="login-form">
          {/* Telephone Input */}
          <div className="input-group">
            <label htmlFor="telephone" className="input-label">
              Telephone <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
              placeholder="Enter telephone"
              className="form-input"
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password <span className="required">*</span>
            </label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
                className="form-input password-input"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-button">
            LOGIN
          </button>

          {/* Forgot Password Link */}
          <div className="forgot-password">
            <a href="/forgot-password" className="forgot-link">
              Forgot your password?
            </a>
          </div>

          {/* Divider */}
          <div className="divider">
            <span>OR</span>
          </div>

          {/* Social Login Buttons */}
          <div className="social-buttons">
            <button
              type="button"
              className="social-button google-button"
              onClick={handleGoogleLogin}
            >
              <span className="google-icon">G</span>
              Continue with Google
            </button>

            <button
              type="button"
              className="social-button facebook-button"
              onClick={handleFacebookLogin}
            >
              <span className="facebook-icon">f</span>
              Continue with Facebook
            </button>
          </div>

          {/* Register Link */}
          <div className="register-section">
            <span className="register-text">
              New StyleStore? <a href="/register" className="register-link">Register</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;