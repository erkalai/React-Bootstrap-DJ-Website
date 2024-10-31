import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

const AppNavBar = () => {
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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#home">Gallery</Nav.Link>
                <Nav.Link href="#home">Videos</Nav.Link>
                <Nav.Link href="#home">Contact Us</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default AppNavBar;