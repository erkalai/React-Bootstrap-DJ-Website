// Import React and necessary components from react-bootstrap
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBirthdayCake } from 'react-icons/fa';
import { FaRing } from 'react-icons/fa';
import { FaGlassMartini } from 'react-icons/fa';
// import { FaConfetti } from 'react-icons/fa';


// Services component to display event services
const Services = () => {
  return (
    <Container id="services" className="my-5">
      <h2 className="text-center mb-4">Our Event Services</h2>
      <Row>
        {/* Service 1 - Marriage */}
        <Col sm={12} md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body className="text-center">
              <FaRing size={50} className="mb-3" /> 
              <Card.Title>Marriage Events</Card.Title>
              <Card.Text>
                We specialize in organizing beautiful and memorable marriage ceremonies, tailored to your needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Service 2 - Birthday Party */}
        <Col sm={12} md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body className="text-center">
              <FaBirthdayCake size={50} className="mb-3" /> 
              <Card.Title>Birthday Parties</Card.Title>
              <Card.Text>
                From themed decorations to catering, we make your birthday celebrations extraordinary.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Service 3 - Engagement Ceremony */}
        <Col sm={12} md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body className="text-center">
              <FaGlassMartini size={50} className="mb-3" /> 
              <Card.Title>Engagement Ceremonies</Card.Title>
              <Card.Text>
                Celebrate your engagement with elegance and style. We plan everything from start to finish.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Service 4 - Other Functions */}
        <Col sm={12} md={4} className="mb-4">
          <Card className="shadow-sm">
            <Card.Body className="text-center">
            <img 
        src="https://picsum.photos/200" 
        alt="Birthday Cake" 
        style={{ width: 300, height: 300 }} 
      />
              <Card.Title>Other Functions</Card.Title>
              <Card.Text>
                Whether it’s a baby shower, graduation, or any other celebration, we provide event planning for all occasions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
