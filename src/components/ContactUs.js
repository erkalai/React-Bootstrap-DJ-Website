// ContactForm.js
import React, { useState } from 'react';
import '../assets/css/style.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone number field
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    // Basic form validation
    if (!name || !email || !phone || !message) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate sending data (replace this with actual email sending logic)
    console.log('Form submitted:', formData);

    // Show success message
    alert('Thank you for your message. We will get back to you soon!');
    setIsSubmitted(true);

    // Optionally, reset the form after submission
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id='contactus' className='contactUs'>
    <div id="contact-section">
      <h1>Contact Us</h1>

      {/* Contact Form and Google Map Wrapper */}
      <div id="contact-container">
        {/* Contact Form */}
        <div id="contact-form">
          <h2>Send Us a Message</h2>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />

              <label htmlFor="phone">Mobile Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Mobile Number"
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                required
              />

              <button type="submit" className='sendbtn'>Send Message</button>
            </form>
          ) : (
            <p>Thank you for your message. We will get back to you soon!</p>
          )}
        </div>

        {/* Google Map Embed */}
        <div id="google-map">
          <h2>Our Location</h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Information (Email, Mobile, and Address) */}
      <div id="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
        <p>Mobile: <a href="tel:+12345678901">+123 456 78901</a></p>
      </div>
    </div>
    </section>
  );
};

export default ContactForm;
