import React, { useState } from "react";
import "./CommonPage.css"; 
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { images } from "../Assets/images";
const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        await signInWithEmailAndPassword(auth,form.email,form.password);
        alert("Login Successful!");
        setForm({email:"",password:""});
    }catch(err){
        alert("Login Failed:"+err.message);
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
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit} className="signup-form">
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
          <button type="submit">Log In</button>
        </form>
        <p>
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
        </div>
        <div className="auth-image" >
              <img src={images.LSImage} alt="Cannabis"/>
        </div>
      </div>
      
    </div>
  );
};

export default LoginPage;
