import { Box } from '@mui/material'
import React from 'react'
import CoverPage from '../pages/CoverPage';
import Assurance from '../components/Features/Assurance/Assurance';
import Product from '../components/Features/Products/Product';
import ReviewSection from '../components/Features/CustomerReviews/ReviewSection';
import CategoryF from '../pages/CategoryF';
import ProcessLayout from '../components/Features/Process/ProcessLayout';
import Types from '../components/Features/ProductTypes/Types';
import InformationPage from '../components/Features/Information/InformationPage';
import RecentlyF from '../pages/RecentlyF';
import Edu from '../components/Features/WeedEducation/Edu';
import Footer from '../components/Features/Footer/Footer';
import { Outlet } from "react-router-dom";
//import ProductListPage from "../components/Features/Products/ProductListPage";
import ProductCardWithModal from '../components/Common/ProductGallery';
const HomePage = () => {
  return (
    <Box>
      <CoverPage />
      {/* <ProductCardWithModal/> */}
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
    </Box>
  )
}

export default HomePage
