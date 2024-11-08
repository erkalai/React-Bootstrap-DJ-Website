import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import '../App.css';
import Image from 'react-bootstrap/Image';

function Story() {
  return (
    <>
        <Container className='mt-5'>
            <Row>
                <Col lg={4}>
                    <div className='text-warning'>OUR STORY</div>
                    <div className='storyTitle'>Our Journey to Celebrating Love Through Sound</div>
                </Col>
                <Col lg={4}>
                <div className='ex'>!</div>
                <div className='storyContent fs-5 '>We bring your celebrations to life with our top-notch event management services for weddings, engagements, birthday parties, and more. We specialize in creating unique and memorable experiences, from elegant decor and seamless sound to captivating lighting and entertainment. Whether it's a wedding celebration, a joyful engagement, or a fun-filled birthday party, our team ensures every detail is perfect, bringing your vision to life and making each occasion unforgettable for you and your guests.</div>
                </Col>
                <Col lg={4} className='text-center'>
                <Image className='storyImg ' src={require('../assets/Story_img.jpg')} fluid />
                <Image className='storyImg' src={require('../assets/Story_img.jpg')} fluid />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Story