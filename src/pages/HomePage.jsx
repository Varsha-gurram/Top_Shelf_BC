import React from 'react';
import { Box } from '@mui/material';
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
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1], // easeOutCubic for a smooth finish
    },
  },
};

const HomePage = () => {
  return (
    <Box>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <CoverPage />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Assurance />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Product />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <ReviewSection />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <CategoryF />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <ProcessLayout />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Types />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <InformationPage />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <RecentlyF />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Edu />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Footer />
      </motion.div>
    </Box>
  );
};

export default HomePage;
