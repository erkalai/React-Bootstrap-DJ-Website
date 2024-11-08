
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Image from 'react-bootstrap/Image';

const AboutUs = () => {
  return (
    <section id='about_us'>
    <Container className='mt-5'>
        <Row>
            <Col >
                <h1>About Us</h1>
                <h5>Our Journey to Celebrating Love Through Sound
                </h5>
                <p className="text-justify mt-2">At <strong>Muthamizh Audios</strong>, we specialize in providing top-notch audio services for engagements, weddings, birthday parties, school events, and more. Whether it's the soft melodies of a wedding, lively tunes at a birthday, or clear speeches at a school event, we ensure every moment is captured with perfect sound quality. Our dedicated team is committed to making your event unforgettable with an exceptional audio experience tailored to your needs.
                </p>
                
            </Col>
            <Col md={6} >
                <Image  src={require('../assets/dj-home.jpg')} fluid />
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default AboutUs