import React from "react";
import Notification from './components/Features/Notification/Notification';
import Navbar from './components/Features/Navbar/Navbar';
import Filterbar from './components/Features/Filterbar/Filterbar';
import CoverPage from './pages/CoverPage';
import Assurance from './components/Features/Assurance/Assurance';
import Product from './components/Features/Products/Product';
import ReviewSection from './components/Features/CustomerReviews/ReviewSection';
import CategoryF from './pages/CategoryF';
import ProcessLayout from './components/Features/Process/ProcessLayout';
import Types from './components/Features/ProductTypes/Types';
import InformationPage from './components/Features/Information/InformationPage';
import RecentlyF from './pages/RecentlyF';
import Edu from './components/Features/WeedEducation/Edu';
import Footer from './components/Features/Footer/Footer';
import { Outlet } from "react-router-dom";
import ProductListPage from "./components/Features/Products/ProductListPage";

const LandingPage = () => (
  <>
    <Notification />
    <Navbar />
    <Filterbar />
    {/* <ProductListPage/> */}
    <CoverPage />
    <Assurance />
    <Product />
    <ReviewSection />
    <CategoryF />
    <ProcessLayout />
    <Types />
    <InformationPage />
    <RecentlyF />
    <Edu />
    <Footer />
    <Outlet /> 
  </>
);

export default LandingPage;
