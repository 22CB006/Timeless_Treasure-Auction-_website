import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContactInfo } from '../redux/contactUsSlice';
import './ContactUs.css';

const ContactUs = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    department: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to update contact info or handle form submission
    dispatch(updateContactInfo(formData));
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>Thank you for showing interest in our auction site. We appreciate your inquiries and feedback. Please don't hesitate to reach out to us using the details provided below:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <select name="department" value={formData.department} onChange={handleChange} required>
          <option value="">Choose Department</option>
          <option value="sales">Sales</option>
          <option value="support">Support</option>
          <option value="general">General Inquiry</option>
        </select>
        <textarea
          name="query"
          placeholder="Type your query here"
          value={formData.query}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <p><strong>Phone Number:</strong> +91-22-6901-4800, 2204-8139</p>
        <p><strong>Email:</strong> contact@astaguru.com</p>
        <div className="location">
          <h3>Location</h3>
          <p><strong>Head Office:</strong> Hargovindas Building, 2nd Floor, K. Dubash Marg, Kala Ghoda, Fort, Mumbai - 400 001.</p>
          <p><strong>Gallery:</strong> 22/26 ICIA Building, K. Dubash Marg, Kala Ghoda, Fort, Mumbai - 400 001.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
