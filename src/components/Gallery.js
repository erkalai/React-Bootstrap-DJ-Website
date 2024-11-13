import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../assets/css/style.css';  

const Gallery = () => {
  // Sample array of image data (URLs and titles)
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
    <div className="container-f my-5 m-1">
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
  );
};

export default Gallery;
