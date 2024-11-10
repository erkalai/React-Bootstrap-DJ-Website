import React from 'react'

const MapEmbed = () => {
  return (
    <>
      <div style={{ width: '100%', height: '310px', marginBottom: '20px' }}>
        <h5 data-bs-theme='dark' className='text-center'>Kachanam</h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.684748780885!2d80.15722279370117!3d12.966374577720044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e1f5da86397%3A0x21092f216ee26e47!2sChennai%20International%20Airport!5e0!3m2!1sen!2sin!4v1730489328697!5m2!1sen!2sin"
          width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      <div style={{ width: '100%', height: '310px' }}>
        <h5 data-bs-theme='dark' className='text-center'>Ammanur</h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.684748780885!2d80.15722279370117!3d12.966374577720044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e1f5da86397%3A0x21092f216ee26e47!2sChennai%20International%20Airport!5e0!3m2!1sen!2sin!4v1730489328697!5m2!1sen!2sin"
          width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default MapEmbed;