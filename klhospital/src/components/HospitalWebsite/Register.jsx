import React, { useState } from "react";
import "./Register.css"; // Import the CSS file

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    bloodGroup: "",
    phone: "",
    age: "",
    street: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered Data:", formData);
  };

  return (
    <div className="register-container">
    <div className="register-box">
      <h2>Register</h2>
      <form>
        <div className="row">
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" placeholder="Enter First Name" required />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" placeholder="Enter Last Name" required />
          </div>
        </div>
  
        <div className="row">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter Email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter Password" required />
          </div>
        </div>
  
        <div className="row">
          <div className="form-group">
            <label>Contact No:</label>
            <input type="text" placeholder="Enter Contact No" required />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input type="number" placeholder="Enter Age" required />
          </div>
        </div>
  
        <div className="row">
          <div className="form-group">
            <label>User Gender:</label>
            <select required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Blood Group:</label>
            <select required>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        </div>
  
        <div className="row">
          <div className="form-group">
            <label>Street:</label>
            <textarea placeholder="Enter Street" required></textarea>
          </div>
          <div className="form-group">
            <label>City:</label>
            <input type="text" placeholder="Enter City" required />
          </div>
        </div>
  
        <div className="form-group">
          <label>Pincode:</label>
          <input type="text" placeholder="Enter Pincode" required />
        </div>
  
        <div className="form-group">
          <label>Register As:</label>
          <select required>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Doctor">Doctor</option>
            <option value="Patient">Patient</option>
          </select>
        </div>
  
        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  </div>
  
  );
};

export default Register;
