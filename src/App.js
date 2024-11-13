import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import Banner from './components/Banner';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Appfooter from './components/AppFooter';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import GoTop from './components/GoTop';
import Story from './components/Story';
import GeneralEnquiries from './components/GeneralEnquiries';
import DGImage from './components/DGImage';
import ContactForm from './components/ContactForm';
import Whatsapp from './components/Whatsapp'
import Home from './components/Home'

function App() {
  return (
    <>
      <AppNavBar />
      <Home />
      {/* <Banner /> */}
      <Story />
      <Services />
      <Gallery />
      <AboutUs />
      {/* <ContactUs /> */}
      {/* <GeneralEnquiries /> */}
      <DGImage />
      <Appfooter />
      <ContactForm />
      <Whatsapp />
      <GoTop />
 
    </>
  );
}

export default App;
