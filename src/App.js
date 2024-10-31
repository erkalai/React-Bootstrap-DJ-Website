import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import Banner from './components/Banner';
import Services from './components/Services';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
    
    <AppNavBar />
    <Banner />
    <Services />
    <Gallery />
    
    <Services />
    </>
  );
}

export default App;
