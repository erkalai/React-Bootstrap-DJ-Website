import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import MapEmbed from './MapEmbed'
import ContactForm from './ContactForm'
import '../App.css';

const ContactUs = () => {
  return (
    <section id='contact_us'>
        <div className='ContactBg5'>
        <Container className=' '>
            <Row>
                <Col >
                    {/* <ContactForm /> */}
                </Col>
                <Col>
                {/* Map embed in this Column */}
                {/* <MapEmbed /> */}
                </Col>
            </Row>
        </Container>
        </div>
    </section>
  )
}

export default ContactUs