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
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(form.fullName)) {
      newErrors.fullName = "Full name must contain only letters and spaces.";
    }
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    } else if (!/(?=.*[0-9!@#$%^&*])/.test(form.password)) {
      newErrors.password = "Password must include at least one number or symbol.";
    }
    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear field error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      alert("Signup Successful!");
      setForm({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert("Sign Up failed: " + error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div>
          <img src={images.Logo} alt="Weed Logo" className="logo" width="100px" />
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
            {errors.fullName && <p className="error-text">{errors.fullName}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error-text">{errors.password}</p>}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword}</p>
            )}

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
