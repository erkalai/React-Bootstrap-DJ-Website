import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Appfooter = () => {
  return (
   <>
    <div className='title-holder text-center mt-3'><h2>Footer</h2></div>

    <footer className='bg-dark text-white py-4'>
        <Container className='text-center'>
            <Row>
                <Col>
                    <p className='fw-bold'> LOGO</p>
                    <p>Muthamizh Audios</p>
                </Col>
                <Col>
                <h5>Muthamizh Audios</h5>
                <p>10, Kumarana Street, Guindy, 600 090</p>
                <p>Phone : +91 1234567890</p>
                </Col>
                <Col>
                <h5>Quick Links</h5>
                <ul className='list-unstyled'>
                    <li><a href='#'className='text-white'>Home</a></li>
                    <li><a href='#'className='text-white'>Services</a></li>
                    <li><a href='#'className='text-white'>Gallery</a></li>
                    <li><a href='#'className='text-white'>About Us</a></li>
                </ul>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col className='text-center'>
                    <p>&copy; {new Date().getFullYear()} Muthamizh Audios. All rights reserved.</p>
                </Col>
            </Row>
        </Container>

    </footer>

   </>
  )
}

export default Appfooter