import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Notification from './components/Features/Notification/Notification';
import Navbar from './components/Features/Navbar/Navbar';
import Filterbar from './components/Features/Filterbar/Filterbar';
import CoverPage from './pages/CoverPage';
import Assurance from './components/Features/Assurance/Assurance';
import ProcessLayout from './components/Features/Process/ProcessLayout';
import Types from './components/Features/ProductTypes/Types';
import InformationPage from './components/Features/Information/InformationPage';
import Edu from './components/Features/WeedEducation/Edu';
import Footer from './components/Features/Footer/Footer';

import EduDetail from './components/Features/WeedEducation/EduDetail';
//import Reviewcard from './components/Features/CustomerReviews/Reviewcard';
//import ReviewCarousel from './components/Features/CustomerReviews/ReviewCaraousel';
import ReviewSection from './components/Features/CustomerReviews/ReviewSection';
//import ProductCard from './components/Common/ProductCard';
import Product from './components/Features/Products/Product';

function App() {
  return (
    <Router>
      <Notification /> 
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Filterbar />
              <CoverPage />
              <Assurance />
              {/* <ProductCard/> */}
              <Product/>
              <ReviewSection/>
              <ProcessLayout />
              <Types />
              <InformationPage />
              <Edu />
              <Footer />
            </>
          }
        />
        <Route path="/article/:id" element={<EduDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
