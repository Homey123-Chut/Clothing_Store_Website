import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api';
import '../styles/Register.css';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      const response = await apiService.register(
        formData.name,
        formData.email,
        formData.password
      );
      console.log('Registration successful:', response);
      
      // Redirect to homepage
      navigate('/');
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookLogin = () => {
    console.log('Facebook registration clicked');
    // Add Facebook OAuth logic here
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <form onSubmit={handleSubmit} className="register-form">
          {/* Error Message */}
          {error && (
            <div className="error-message" style={{ 
              color: '#ef4444', 
              backgroundColor: '#fef2f2', 
              border: '1px solid #fecaca', 
              borderRadius: '4px', 
              padding: '12px', 
              marginBottom: '16px' 
            }}>
              {error}
            </div>
          )}

          {/* Name Field */}
          <div className="input-group">
            <label htmlFor="name" className="input-label">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="form-input"
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="form-input"
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password <span className="required">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password (min 6 characters)"
              className="form-input"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <label htmlFor="confirmPassword" className="input-label">
              Confirm Password <span className="required">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              className="form-input"
              required
            />
          </div>

          {/* Create Account Button */}
          <button type="submit" className="create-account-button" disabled={loading}>
            {loading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
          </button>

          {/* Divider */}
          <div className="divider">
            <span>OR</span>
          </div>

          {/* Facebook Login */}
          <button
            type="button"
            className="facebook-button"
            onClick={handleFacebookLogin}
          >
            <span className="facebook-icon">f</span>
            Continue with Facebook
          </button>

          {/* Login Link */}
          <div className="login-section">
            <span className="login-text">
              Already have an account? <a href="/login" className="login-link">Login</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;