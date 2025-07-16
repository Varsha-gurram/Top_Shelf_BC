import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import AccountPage from "./pages/AccountPage"
// Lazy loaded components with artificial delay
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
const RewardsPage = lazy(() => wait(600).then(() => import("./pages/Rewards")));
const SupportPage = lazy(() => wait(600).then(() => import("./pages/Support")));
const PromotionsPage = lazy(() => wait(600).then(() => import("./pages/Promotions")));
const BlogPage = lazy(() => wait(600).then(() => import("./pages/BlogPage")));

// ✅ FIXED: Proper component definition
const AppRoutes = () => {
  const [user] = useAuthState(auth);

  return (
    <Suspense
      fallback={
        <div style={{
          textAlign: "center",
          marginTop: 100,
          fontSize: 16,
          fontWeight: "bold"
        }}>
          Loading Page...Please don't refresh.
        </div>
      }
    >
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to="/" />} />

        {/* Main Routes under Layout */}
        <Route path="/" element={<LandingPage />}>
          <Route index element={<HomePage />} />
          <Route path="article/:id" element={<EduDetail />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="CheckoutPage" element={<CheckoutPage />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<ShippingDetails />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="promotions" element={<PromotionsPage />} />
          <Route path="blogpage" element={<BlogPage />} />
          <Route path="/accounts" element={<AccountPage/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
