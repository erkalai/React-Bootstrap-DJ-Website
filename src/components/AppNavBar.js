import React from 'react'
import '../assets/css/style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


const AppNavBar = () => {
  return (
    <section id='home'>
   <Navbar expand="lg" style={{ '--bs-navbar-brand-margin-end': '0rem' }} data-bs-theme="dark" className="position-sticky bg-body-tertiary d-block sticky-top">
        <Container>
          <Image className='titlelogo' src={require('../assets/img/Logo.png')} fluid />
            <Navbar.Brand href="#home">Muthamizh DJ
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav " className=' justify-content-end'>
            <Nav>
                <Nav.Link href="#home" >Home</Nav.Link>
                <Nav.Link href="#services" >Services</Nav.Link>
                <Nav.Link href="#gallery">Gallery</Nav.Link>
                <Nav.Link href="#contact_us">Contact Us</Nav.Link>
                <Nav.Link href="#about_us" >About Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  )
}

export default AppNavBar;