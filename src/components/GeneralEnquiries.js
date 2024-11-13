import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const GeneralEnquiries = () => {
  return (
    <section id='General_Enquiries' className=''>
        <Container className=' mt-5 mb-3 text-center'>
            <Row>
                <Col>
                <div className='mt-2'>
                    <h3>General Enquiries</h3>
                    <div>muthamizhaudios@gmail.com</div>
                    <div>thamizh3500@gmail.com</div>
                </div>
                </Col>
                <Col>
                <div className=''>
                    <h3>Call Us</h3>
                    <div>+91 80983 53500</div>
                    <div>+91 80988 87469</div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default GeneralEnquiries