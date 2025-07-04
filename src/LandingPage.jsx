import React from "react";
import Notification from './components/Features/Notification/Notification';
import Navbar from './components/Features/Navbar/Navbar';
import Filterbar from './components/Features/Filterbar/Filterbar';
import { Outlet } from "react-router-dom";


const LandingPage = () => (
  <>
    <Notification />
    <Navbar />
    <Filterbar />
    <Outlet/> 
  </>
);

export default LandingPage;
