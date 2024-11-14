import React, { useState } from 'react';
import '../assets/css/style.css';

// Array of services with title, description, and image
const services = [
  {
    title: 'Audio Services',
    description:
      'From the soft melodies of a wedding to lively tunes at a birthday party, our audio services ensure perfect sound.',
    image: require('../assets/img/sericeAudio.jpg'),  
    moreInfo: 'We use high-quality sound systems for crystal-clear audio at all events, ensuring every guest hears perfectly.',
  },
  {
    title: 'Event Management',
    description:
      'We handle every aspect of your event, from seamless coordination to ensuring that every detail is flawless.',
    image: require('../assets/img/serviceEvent.jpg'), 
    moreInfo: 'Our experienced event planners will guide you through the entire planning process to make your event stress-free.',
  },
  {
    title: 'Lighting Services',
    description:
      'Our lighting services add that magical touch to your event, creating the perfect atmosphere for any occasion.',
    image: require('../assets/img/lighting.jpg'), 
    moreInfo: 'We offer customized lighting solutions to match the theme and mood of your event, from ambient lighting to stage lights.',
  },
];

const Services = () => {
  // State to track which service has been "Read More" clicked
  const [expandedServiceIndex, setExpandedServiceIndex] = useState(null);

  // Handle the "Read More" button click
  const handleReadMoreClick = (index) => {
    setExpandedServiceIndex(index === expandedServiceIndex ? null : index); // expanded service
  };

  return (
    <section id='services'>
    <div className="services-container">
      <h2 className="services-heading">SERVICES</h2>
      <p className="services-description">
        - We Provide Services For -
      </p>

      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>

            {/* "Read More" button */}
            <button
              className="read-more-button"
              onClick={() => handleReadMoreClick(index)}
            >
              {expandedServiceIndex === index ? 'Show Less' : 'Read More'}
            </button>

            {/* Display extra details if service is expanded */}
            {expandedServiceIndex === index && (
              <p className="service-more-info">{service.moreInfo}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Services;

