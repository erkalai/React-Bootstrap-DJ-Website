import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const WhatsApp = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showIcon, setShowIcon] = useState(true); // State to control the visibility of the WhatsApp icon

  // Handle modal visibility (opens the modal)
  const handleShow = () => setShowModal(true);

  // Handle modal closing (closes the modal)
  const handleClose = () => setShowModal(false);

  // Handle hiding the WhatsApp icon only
  const handleCloseIcon = (e) => {
    e.stopPropagation(); // Prevent the click from affecting the modal
    setShowIcon(false); // Hide the WhatsApp icon
  };

  // Handle form submission to generate WhatsApp message link
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the message text
    const messageText = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `.trim();

    // WhatsApp phone number (replace with your own)
    const whatsappNumber = "916383006516";

    // Create the WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp with the generated link
    window.open(whatsappLink, "_blank");

    // Close the modal after form submission
    setShowModal(false);
  };

  return (
    <div>
      {/* WhatsApp Icon Button */}
      {showIcon && (
        <button
          className="btn btn-success"
          onClick={handleShow} // Open the modal when clicking the WhatsApp icon
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            borderRadius: '50%',
            padding: '10px',
            zIndex: 1000
          }}
        >
          <i className="bi bi-whatsapp" style={{ fontSize: '30px' }}></i>

          {/* Close button inside the WhatsApp icon */}
          <button
            onClick={handleCloseIcon} // Close the icon (but not the modal) when clicked
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              background: '',
              border: 'none',
              borderRadius: '50%',
              padding: '5px',
              color: 'black',
              fontSize: '12px',
              cursor: 'pointer',
              zIndex: 1100 // Make sure it is on top of the WhatsApp icon
            }}
          >
            X
          </button>
        </button>
      )}

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
