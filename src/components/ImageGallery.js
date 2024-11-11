import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import '../assets/css/ImageGallery.css';  // ImageGallery CSS

const ImageGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // List of images for the gallery, with size property to control image size
  const images = [
    { src: require('../assets/img/lighting.jpg'), alt: 'Audio Equipment', size: 'large' },
    { src: require('../assets/img/audio.jpg'), alt: 'Audio Equipment', size: 'small' },
    {src: require('../assets/img/audio.jpg'), alt: 'Audio Equipment', size: 'small' },
    
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
    <div className="image-gallery">
      {images.map((image, index) => (
        <Card className={`image-card ${image.size}`} key={index} onClick={() => handleShow(image.src)}>
          <Card.Img variant="top" src={image.src} alt={image.alt} />
          <div className="card-body">
            <p>{image.alt}</p>
          </div>
        </Card>
      ))}

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

export default ImageGallery;
