import React from 'react'
import "./Login.css"
function Login() {

  return (
    <div className="login-container">
    <div className="login-box">
      <h2>User Login</h2>
      <form>
        <div className="form-group">
          <label>User Role:</label>
          <select required>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Doctor">Doctor</option>
            <option value="Patient">Patient</option>
          </select>
        </div>
  
        <div className="form-group">
          <label>Email ID:</label>
          <input type="email" placeholder="Enter Email" required />
        </div>
  
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter Password" required />
        </div>
  
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  </div>
  
  )
}

export default Login