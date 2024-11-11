import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceCard = ({ title, img, description}) => (
  <div className="col-md-6 mb-4">
  <Card.Img variant="top" src={img}  alt={title} />
    <Card >
      
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  </div>
);

const ServicesCard = () => (
    <section id="serviceCard">
  <div className="container mt-4 text-center">
    <h2 className='text-center'>Services</h2>
    <h5 className='text-center'>- We Provide Service For -</h5>
    <div className="row">
      <ServiceCard 
        title="Audio Services"
        img={require('../assets/img/audio.jpg')}
        description="We specialize in providing high-quality audio equipment and expert services for all types of events. Whether you're hosting a corporate seminar, wedding, concert, or private party, we offer a wide range of top-tier sound systems, including speakers, microphones, and mixers, to ensure your event sounds flawless. Our team of experienced technicians will work with you to design the perfect audio setup tailored to your event's needs. From equipment rental to setup and on-site support, we handle everything from start to finish, allowing you to focus on what matters most. With our reliable, state-of-the-art gear and exceptional service, you can trust us to create an unforgettable sound experience that keeps your guests engaged and your event running smoothly."
        link="#audio"
      />
      <ServiceCard 
        title="Lighting Services"
        img={require('../assets/img/lighting.jpg')}
        description="Our lighting services are designed to transform your event into a visually stunning experience. From dynamic stage lighting to atmospheric mood lighting and eye-catching special effects, we provide the perfect lighting solutions to elevate your event’s ambiance. Whether you're hosting a corporate event, wedding, concert, or private party, we offer a range of lighting options tailored to your needs. Our expert team will work with you to create the ideal lighting setup that enhances the mood, highlights key moments, and brings your vision to life. With our high-quality equipment and attention to detail, you can be sure that your event will shine in every sense of the word."
        link="#lighting"
      />
    </div>
  </div>
  </section>
);

export default ServicesCard;
