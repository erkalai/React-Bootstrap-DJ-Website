import React, { useState } from 'react';
import { Modal, Button, Row, Col, Card } from 'react-bootstrap';

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // List of images for the gallery
  const images = [
    {  src: require('../assets/img/audio.jpg'), alt: 'Audio Equipment' },
    { src: require('../assets/img/lighting.jpg'), alt: 'Audio Equipment' },
    {  src: require('../assets/img/audio.jpg'), alt: 'Audio Equipment' },
    { src: require('../assets/img/lighting.jpg'), alt: 'Audio Equipment' },
    { src: '/path/to/image3.jpg', alt: 'Image 3' },
    { src: '/path/to/image4.jpg', alt: 'Image 4' },
    // Add more images as needed
  ];

  // Handle opening the modal with the selected image
  const handleShow = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  // Handle closing the modal
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Row>
        {images.map((image, index) => (
          <Col md={3} sm={6} key={index}>
            <Card>
              <Card.Img
                variant="top"
                src={image.src}
                alt={image.alt}
                onClick={() => handleShow(image.src)}
                style={{ cursor: 'pointer' }}
              />
              <Card.Body>
                <Card.Text>{image.alt}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for displaying enlarged image */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: '100%', height: 'auto' }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Gallery;
