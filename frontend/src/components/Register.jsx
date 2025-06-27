import React, { useState } from 'react';
import '../styles/Register.css';


const Register = () => {
  const [formData, setFormData] = useState({
    gender: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    country: 'Cambodia',
    city: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGenderChange = (gender) => {
    setFormData(prev => ({
      ...prev,
      gender: gender
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration attempt:', formData);
    // Add your registration logic here
  };

  const handleFacebookLogin = () => {
    console.log('Facebook registration clicked');
    // Add Facebook OAuth logic here
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <form onSubmit={handleSubmit} className="register-form">
          {/* Gender Selection */}
          <div className="gender-group">
            <label className="gender-label">
              Gender <span className="required">*</span>
            </label>
            <div className="gender-options">
              <button
                type="button"
                className={`gender-btn ${formData.gender === 'Male' ? 'active' : ''}`}
                onClick={() => handleGenderChange('Male')}
              >
                Male
              </button>
              <button
                type="button"
                className={`gender-btn ${formData.gender === 'Female' ? 'active' : ''}`}
                onClick={() => handleGenderChange('Female')}
              >
                Female
              </button>
            </div>
          </div>

          {/* Name Fields */}
          <div className="name-row">
            <div className="input-group">
              <label htmlFor="firstName" className="input-label">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
                className="form-input"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName" className="input-label">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
                className="form-input"
                required
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="input-group">
            <label htmlFor="mobileNumber" className="input-label">
              Mobile number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              className="form-input"
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              className="form-input"
              required
            />
          </div>

          {/* Location Fields */}
          <div className="location-row">
            <div className="input-group">
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="Cambodia">Cambodia</option>
                <option value="Thailand">Thailand</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Malaysia">Malaysia</option>
              </select>
            </div>
            <div className="input-group">
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">City/province</option>
                <option value="Phnom Penh">Phnom Penh</option>
                <option value="Siem Reap">Siem Reap</option>
                <option value="Battambang">Battambang</option>
                <option value="Kampong Cham">Kampong Cham</option>
              </select>
            </div>
          </div>

          {/* Create Account Button */}
          <button type="submit" className="create-account-button">
            CREATE ACCOUNT
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