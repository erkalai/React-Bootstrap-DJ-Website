import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const WhatsApp = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle modal visibility
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Handle form submission to create WhatsApp message link
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the message text to send via WhatsApp
    const messageText = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `.trim();

    // Replace with your own WhatsApp number (including country code, but no '+')
    const whatsappNumber = "1234567890";  // Your WhatsApp phone number

    // Create the WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp with the generated link
    window.open(whatsappLink, "_blank");

    // Close the modal after submission
    setShowModal(false);
  };

  return (
    <div>
      {/* WhatsApp Icon Button */}
      <button 
        className="btn btn-success" 
        onClick={handleShow} 
        style={{
          position: 'fixed', 
          bottom: '20px', 
          left: '20px', 
          borderRadius: '50%', 
          padding: '10px',
          zIndex: 1000
        }}
      >
        <i className=" bi bi-whatsapp" style={{ fontSize: '30px' }}></i>
        
        {/* Close button inside the WhatsApp icon */}
        <button 
          onClick={handleClose} 
          style={{
            position: 'absolute', 
            top: '0px', 
            left: '0px', 
            background: 'red', 
            border: 'none', 
            borderRadius: '50%', 
            padding: '5px', 
            color: 'white', 
            fontSize: '12px', 
            cursor: 'pointer',
            zIndex: 1100 // Make sure it's on top of the WhatsApp icon
          }}
        >
          X
        </button>
      </button>

      {/* Modal for Contact Form */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us via WhatsApp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
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

export default WhatsApp;
