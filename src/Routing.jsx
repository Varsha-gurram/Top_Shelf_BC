import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const wait = ms => new Promise(res => setTimeout(res, ms));
const LandingPage = lazy(() => wait(600).then(() => import("./LandingPage")));
const EduDetail = lazy(() => wait(600).then(() => import('./components/Features/WeedEducation/EduDetail')));
const ProductDetail = lazy(() => wait(600).then(() => import("./pages/ProductDetail")));
const ProductPage = lazy(() => wait(600).then(() => import("./pages/CategoryPage")));
const HomePage = lazy(() => wait(600).then(() => import("./pages/HomePage")));
const CartPage = lazy(() => wait(600).then(() => import("./pages/CartPage")));
const CheckoutPage = lazy(() => wait(600).then(() => import("./pages/ShoppingCart")));
const Checkout = lazy(() => wait(600).then(() => import("./pages/CheckoutPage")));
const ShippingDetails = lazy(() => wait(600).then(() => import("./components/Features/OrderComplete/ShippingDetails")));
// const Dashboard = lazy(() => wait(600).then(() => import('../pages/Dashboard')));
// const Profile = lazy(() => wait(600).then(() => import('./pages/Profile')));

const AppRoutes = () => (
  <Suspense
    fallback={
      <div style={{
        textAlign: "center",
        marginTop: 100,
        fontSize: 16,

        fontWeight: "bold"
      }}>
        Loading Page...Please Dont't refresh.
      </div>
    }
  >
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route index element={<HomePage />} />
        <Route path="article/:id" element={<EduDetail />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<ShippingDetails />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="profile" element={<Profile />} /> */}
      </Route>
    </Routes>
  </Suspense>
);

export default AppRoutes;
