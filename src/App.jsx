import './App.css';
import MyButton from './components/Common/Button';
import Navbar from './components/Features/Navbar/Navbar';
import CoverPage from './pages/CoverPage';
import Filterbar from './components/Features/Filterbar/Filterbar';
import Notification from './components/Features/Notification/Notification';
import Assurance from './components/Features/Assurance/Assurance';
import Footer from './components/Features/Footer/Footer';
import ProcessLayout from './components/Features/Process/ProcessLayout';
import InformationPage from './components/Features/Information/InformationPage';
import Types from './components/Features/ProductTypes/Types';
function App() {
  return (
   <>
   {/* <p>Hi</p>
   <MyButton name="Shop All"/> */}
   <Notification/>
   <Navbar/>
   <Filterbar/>
   <CoverPage/>
   <Assurance/>
   <ProcessLayout/>
   <Types/>
   <InformationPage/>
   <Footer/>
    
   </>
  );
}

export default App;
