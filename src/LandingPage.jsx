import React, { useState } from "react";
import Notification from './components/Features/Notification/Notification';
import Navbar from './components/Features/Navbar/Navbar';
import Filterbar from './components/Features/Filterbar/Filterbar';
import AccountPage from './pages/AccountPage'; // Import your account component
import { Outlet } from "react-router-dom";
import './App.css';

const LandingPage = () => {
  const [showAccount, setShowAccount] = useState(false);

  return (
    <div className="landing-center-wrapper">
      <Notification />
      <Navbar onAccountClick={() => setShowAccount(true)} />
      <Filterbar />
      <Outlet />

      {showAccount && (
        <div className="account-sidebar">
          <div className="overlay" onClick={() => setShowAccount(false)} />
          <div className="sidebar-content">
            <AccountPage />
            <button className="close-btn" onClick={() => setShowAccount(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
