import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Name" required />
        <label>Phone Number</label>
        <input type="tel" placeholder="Enter 10-digit contact-number" required />
        <label>Email-Id</label>
        <input type="email" placeholder="Email" required />
        <label>Password</label>
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;
