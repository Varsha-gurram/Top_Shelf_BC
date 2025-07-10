import React from "react";
import Notification from './components/Features/Notification/Notification';
import Navbar from './components/Features/Navbar/Navbar';
import Filterbar from './components/Features/Filterbar/Filterbar';
import { Outlet } from "react-router-dom";
import './App.css'; 

const LandingPage = () => (
  <div className="landing-center-wrapper">
    <Notification />
    <Navbar />
    <Filterbar />
    <Outlet />
  </div>
);

export default LandingPage;
