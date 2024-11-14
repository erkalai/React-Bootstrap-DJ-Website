import React, { useState } from 'react';
import '../assets/css/style.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle  submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    // Basic form validation
    if (!name || !email || !phone || !message) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate sending data 
    console.log('Form submitted:', formData);

    // Show success message
    alert('Thank you for your message. We will get back to you soon!');
    setIsSubmitted(true);

    // Reset the form after submission
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id='contactus' className='contactUs'>
    <div id="contact-section">
      <h1>Contact Us</h1>

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.4493818317624!2d79.64144327369375!3d10.629832361883322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5545245457383b%3A0x91b67e2e58454965!2sMUTHAMIZH%20AUDIOS!5e1!3m2!1sen!2sin!4v1731568140832!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div id="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:muthamizhaudios@gmail.com">muthamizhaudios@gmail.com</a></p>
        <p>Email: <a href="mailto:tamizh3500@gmail.com">tamizh3500@gmail.com</a></p>
        <p>Mobile: <a href="tel:+918098353500">+91 80983 53500</a></p>
        <p>Mobile: <a href="tel:+918098887469">+91 80988 87469</a></p>
      </div>
    </div>
    </section>
  );
};

export default ContactForm;
