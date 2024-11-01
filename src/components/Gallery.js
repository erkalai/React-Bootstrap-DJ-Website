import React from 'react'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


 
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages = [
    {
        image : require('../assets/img3.jpg')
    },
    {
        image : require('../assets/img1.jpg')
    },
    {
        image : require('../assets/img2.jpg')
    },
  ];

const Gallery = () => {
  return (
    <section id='gallery'>
        <div className='title-holder text-center mt-3'>
        <h2>Gallery</h2>
        </div>
        <div className="slide-container">
            <Slide>
            {slideImages.map((slideImage, index)=> (
                <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.image})` }}>
                    {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                </div>
                </div>
            ))} 
            </Slide>
        </div>
      </section>
  )
}

export default Gallery


