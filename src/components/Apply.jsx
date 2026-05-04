// Apply.jsx
import React, { useState } from "react";
import "./Apply.css";

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    position: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
    console.log(formData);
  };

  return (
    <div className="apply-container">
      <div className="apply-card">
        <h1 className="apply-title">Apply Now</h1>

        <form className="apply-form" onSubmit={handleSubmit}>
          
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Position Applying For</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            >
              <option value="">Select Position</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
            </select>
          </div>

          <div className="input-group">
            <label>Why should we hire you?</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="apply-submit-btn">
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
};

export default Apply;