import React, { useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Services from './Services';
import Aboutus from './Aboutus';
import App from '../App';


// import React, {useRef} from 'react';





const Navbar = ({scrollToSection}) => {
  return (
    <>
    
    <Navbar expand="lg" data-bs-theme='dark' className=" bg-body-tertiary d-block sticky-top navbar-light "  >
        <Container>
        <section className='img'><Image className='w-10 h-10 d-block' src={require('../assets/Logo.png')} fluid /></section>
            <Navbar.Brand href="#home">Muthamizh Audios
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav " className=' justify-content-end'>
            <Nav>
                <Nav.Link href="#home" onClick={()=>scrollToSection("home")}>Home</Nav.Link>
                <Nav.Link href="#services" onClick={()=>scrollToSection("home")}>Services</Nav.Link>
                <Nav.Link href="#gallery" onClick={()=>scrollToSection("home")}>Gallery</Nav.Link>
                <Nav.Link href="#videos" onClick={()=>scrollToSection("home")}>Videos</Nav.Link>
                <Nav.Link href="#contact_us" onClick={()=>scrollToSection("home")}>Contact Us</Nav.Link>
                <Nav.Link href="#about_us" onClick={()=>scrollToSection("home")}>About Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

const App = () => (<div style={{height:'100vh',padding:'60px'}}>Home Section</div>);
const Services = () => (<div style={{height:'100vh',padding:'60px'}}>Services Section</div>);
const Aboutus = () => (<div style={{height:'100vh',padding:'60px'}}>About Us Section</div>);

const AppNavBarcopy =() => {

  const appRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (section) =>{
    if(section === "app") appRef.current.scrolIntoView({behavior:"smooth"});
    else if(section === "services") servicesRef.current.scrolIntoView({behavior:"smooth"});
    else if(section === "aboutus") servicesRef.current.scrolIntoView({behavior:"smooth"});
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />

      <div ref={appRef}><App /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={aboutRef}><Aboutus /></div>
    </div>
  );
  

}

export default AppNavBarcopy;