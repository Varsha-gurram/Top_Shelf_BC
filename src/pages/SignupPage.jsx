import React, { useState } from "react";
import "./CommonPage.css";
import { images } from "../Assets/images";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      alert("signup Successful!");
      setForm({ fullName: "", email: "", password: "", comfirmPassword: "" });
    } catch (error) {
      alert("Sign Up failed:" + error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div>
          <img
            src={images.Logo}
            alt="Weed Logo"
            className="logo"
            width="100px"
          />
          <h2>Create an Account</h2>

          <form onSubmit={handleSubmit} className="signup-form">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            {error && <p className="error-text">{error}</p>}

            <button type="submit">Sign Up</button>
          </form>

          <Typography>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </div>
        <div className="auth-image">
          <img src={images.LSImage} alt="Cannabis" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
