import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppNavBar from './components/AppNavBar';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Appfooter from './components/AppFooter';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import GoTop from './components/GoTop';
import Story from './components/Story';
import DGImage from './components/DGImage';
import ContactForm from './components/ContactForm';
import Whatsapp from './components/Whatsapp'
import Home from './components/Home'
import StatsCard from './components/StatsCard';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <AppNavBar />
      <Routes>
         {/* Home Page */}

         <Route
          path="/"
          element={
            <>

      <Home />
      <Story />
      <Services />
      <Gallery />
      <AboutUs />
      <StatsCard />
      <ContactUs />
      <DGImage />
      <Whatsapp />
      <GoTop />

       </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />
      </Routes>

      <Appfooter />
      {/* <ContactForm /> */}

  
    </Router>
  );
}

export default App;
