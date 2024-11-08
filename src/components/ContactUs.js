import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import MapEmbed from './MapEmbed'

const ContactUs = () => {
  return (
    <section id='contact_us'>
        <div className='divider py-1 bg-primary'></div>
        <Container className='mt-4 '>
            <Row>
                <Col >
                <div >
                    <h3>Our Address</h3>
                    <div className='fw-bold'>Kachanam</div>
                    <div>Thiruthuraipoondi Taluk,</div>
                    <div>Thiruvarur Dt,</div>
                    <div>Tamilnadu -610 201</div>
                </div>
                <div className='mt-5'>
                <div className='fw-bold'>Ammanur</div>
                    <div>Near Elementry School, Ammanur,</div>
                    <div>Thiruthuraipoondi Taluk,</div>
                    <div>Thiruvarur Dt,</div>
                    <div>Tamilnadu -610 201</div>
                </div>  
                </Col>
                <Col>
                {/* Map embed in this Column */}
                <MapEmbed />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ContactUs