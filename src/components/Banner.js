
import React from 'react'
import '../App.css'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/esm/Image'

const Banner = () => {
  return (
    <>
             <Carousel>
                <Carousel.Item interval={500}>
                    <Image  className='d-block  w-100 vh-100' src={require('../assets/cor (1).jpg')} text="First slide" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <Image className='d-block w-100 vh-100' src={require('../assets/cor (2).jpg')} text="Second slide" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <Image className='d-block w-100 vh-100' src={require('../assets/cor (3).jpg')} text="Third slide" />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p className='d-none d-sm-block'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
    </>
  );
}
export default Banner;