
import React from 'react'
import '../App.css'
import '../assets/css/style.css'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/esm/Image'
import AppNavBar from './AppNavBar'

const Banner = () => {
  return (
    <section id='' >
      <div className='carouselSize'>
             <Carousel>
                <Carousel.Item interval={500}>
                    <Image  className=' ' src={require('../assets/cor (1).jpg')} text="First slide" />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <Image className=' ' src={require('../assets/cor (2).jpg')} text="Second slide" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <Image className=' ' src={require('../assets/cor (3).jpg')} text="Third slide" />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p className='d-none d-sm-block'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              </div>
    </section>
  );
}
export default Banner;