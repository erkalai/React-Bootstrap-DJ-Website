import React from 'react';
import '../assets/css/style.css'; // Custom CSS file for styling
import Image from 'react-bootstrap/Image'; // You can still use react-bootstrap's Image component for responsiveness

function Story() {
  return (
    <div className="story-container">
      <div className="story-content">
        <div className="story-left">
          <h2 className="story-title">OUR STORY</h2>
          <h3 className="story-subtitle">Our Journey to Celebrating Love Through Sound</h3>
        </div>

        <div className="story-center">
          <div className="exclamation">!</div>
          <p className="story-description">
            We bring your celebrations to life with our top-notch event management services for weddings, engagements,
            birthday parties, and more. We specialize in creating unique and memorable experiences, from elegant decor
            and seamless sound to captivating lighting and entertainment. Whether it's a wedding celebration, a joyful
            engagement, or a fun-filled birthday party, our team ensures every detail is perfect, bringing your vision to
            life and making each occasion unforgettable for you and your guests.
          </p>
        </div>

        <div className="story-right">
          <Image className="story-img" src={require('../assets/img/serviceLighting.jpg')} fluid />
        </div>
      </div>
    </div>
  );
}

export default Story;
