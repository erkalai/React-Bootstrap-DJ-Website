import React from 'react'
import Image from 'react-bootstrap/Image';

const AboutUs = () => {
  return (
    <section id='about_us' className='aboutus mb-5 mt-3 p-2'>
      <div className="container">
        <div class="text">
          <h1>About Us</h1>
          <h5>Our Journey to Celebrating Moments Through Sound, Light, and Flawless Planning</h5>
          <p className="text-justify mt-2">At <strong>Muthamizh Sound Wave</strong>, we specialize in delivering exceptional audio, event management, and lighting services for engagements, weddings, birthday parties, school events, and more. From the soft melodies of a wedding and lively tunes at a birthday to clear speeches at a school event, we ensure every moment is captured with perfect sound, lighting, and seamless coordination. Our dedicated team is committed to making your event unforgettable with a tailored experience that brings your vision to life.
          </p>
          <a href="#about_us" className='btn readbtn'>Read More</a>
        </div>
        <div className=''>
          <Image  src={require('../assets/img/djwhite.jpg')} fluid  alt="Description" class="image"/>
        </div>
        </div>
    </section>
  )
}

export default AboutUs