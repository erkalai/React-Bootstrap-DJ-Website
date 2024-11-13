import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../assets/css/style.css';  

const Gallery = () => {
  
  const images = [
    { src: require('../assets/img/audio.jpg'), title: 'Image 1' },
    { src: require('../assets/img/cor (1).jpg'), title: 'Image 2' },
    { src: require('../assets/img/audio.jpg'), title: 'Image 1' },
    { src: require('../assets/img/cor (2).jpg'), title: 'Image 2' },
    { src: require('../assets/img/cor (3).jpg'), title: 'Image 2' },
    { src: require('../assets/img/audio.jpg'), title: 'Image 1' },
    { src: require('../assets/img/cor (2).jpg'), title: 'Image 2' },
    { src: require('../assets/img/cor (3).jpg'), title: 'Image 2' },
   
  ];

  return (
    <section id='gallery'>
    <div className="container-f my-5 m-1">
      <h2 className="services-heading text-center">- Gallery -</h2>
      <Row>
        {images.map((image, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={image.src}
                className="zoom-effect"
              />
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </section>
  );
};

export default Gallery;
