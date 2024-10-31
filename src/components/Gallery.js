import React from 'react'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
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
    <>
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
      </>
  )
}

export default Gallery


// https://www.youtube.com/watch?v=B_IYFFbKkfY