import React from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import { useState, useEffect } from 'react';

const GoTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150) {
      setVisible(true);
    } else if (scrolled <= 150) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <div>
      {visible && (
        <FaArrowCircleUp
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            fontSize: '3rem',
            cursor: 'pointer',
            color: '#007bff', 
            backgroundColor: 'transparent',
            borderRadius: '50%',
            padding: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
          }}
        />
      )}
    </div>
  );
};

export default GoTop;