
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Image from 'react-bootstrap/Image';

const Aboutus = () => {
  return (
    <section id='about_us'>
    <Container className='mt-5'>
        <Row>
            <Col>
                <h1>About Us</h1>
                <h5>Some Details About me</h5>
                <p>Lorem   Line 28:25:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it</p>
                <div className='btn btn-primary'> Learn More</div>
            </Col>
            <Col>
                <Image className='w-10 h-10 d-block' src={require('../assets/dj-home.jpg')} fluid />
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Aboutus