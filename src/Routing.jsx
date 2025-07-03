import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import EduDetail from './components/Features/WeedEducation/EduDetail';
//import Dashboard from '../pages/Dashboard';
//import Profile from './pages/';
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/CategoryPage";
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/article/:id" element={<EduDetail />} />
    <Route path="/product/:id" element={<ProductDetail />} />
    {/* <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} /> */}
    <Route path="/products" element={<ProductPage />} />
  </Routes>
);

export default AppRoutes;
