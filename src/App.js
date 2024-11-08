import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavBar from './components/AppNavBar';
import Banner from './components/Banner';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Appfooter from './components/AppFooter';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ContactForm from './components/ContactForm';
import GoTop from './components/GoTop';
import { Fragment } from 'react';
import Story from './components/Story';


function App() {
  return (
    <>
      <AppNavBar />
      <Banner />
      <Story />
      <Services />
      <Gallery />
      <AboutUs />
      <ContactUs />
      <ContactForm />
      <Appfooter />
      <GoTop />
 
    </>
  );
}

export default App;
