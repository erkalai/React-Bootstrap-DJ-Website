import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../assets/css/style.css';  

const Gallery = () => {
  // Sample array of image data (URLs and titles)
  const images = [
    { src: 'https://via.placeholder.com/300', title: 'Image 1' },
    { src: 'https://via.placeholder.com/300', title: 'Image 2' },
    { src: 'https://via.placeholder.com/300', title: 'Image 3' },
    { src: 'https://via.placeholder.com/300', title: 'Image 4' },
    { src: 'https://via.placeholder.com/300', title: 'Image 5' },
    { src: 'https://via.placeholder.com/300', title: 'Image 6' },
    { src: 'https://via.placeholder.com/300', title: 'Image 7' },
    { src: 'https://via.placeholder.com/300', title: 'Image 8' },
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
