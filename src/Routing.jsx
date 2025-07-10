import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import EduDetail from './components/Features/WeedEducation/EduDetail';
// import Dashboard from '../pages/Dashboard';
// import Profile from './pages/';
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/ShoppingCart";
import Checkout from "./pages/CheckoutPage";
import ShippingDetails from "./components/Features/OrderComplete/ShippingDetails";
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />}>
      <Route index element={<HomePage />} />
      <Route path="article/:id" element={<EduDetail />} />
      <Route path="product/:id" element={<ProductDetail />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/CheckoutPage" element={<CheckoutPage />} />
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/payment" element={<ShippingDetails/>}/>
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* <Route path="profile" element={<Profile />} /> */}
    </Route>
  </Routes>
);

export default AppRoutes;
