import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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

function App() {
  return (
    <>
      <AppNavBar />
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
      <Appfooter />
      {/* <ContactForm /> */}
      
 
    </>
  );
}

export default App;
