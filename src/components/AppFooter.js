import React from 'react'
import '../assets/css/style.css';
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Image from 'react-bootstrap/Image';

const AppFooter = () => {
  return (
   <>

    <footer className=' bg-secondary  text-white '>
        <div className=' bg-black  p-1'>
            <div className='  text-center me-5'> Get connected with us on social networks
                <div className='iconHover'>
                <a className=' text-end ms-3' href="https://www.instagram.com/muthamizhaudios?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw=="><i className='insta btn bi bi-instagram  text-white text-end'></i></a>
                <a className='  ms-3' href="https://www.facebook.com/profile.php?id=100069840241495&mibextid=rS40aB7S9Ucbxw6v"><i className='fb btn bi bi-facebook text-white text-end'></i></a>
                <a className='  ms-3' href="https://www.youtube.com/@muthamizhaudios"><i className='utube btn bi bi-youtube  text-white text-end '></i></a>
                <a className='ms-3' href="https://wa.me/918098887469"><i className='wtsapp btn bi bi-whatsapp  text-white text-end'></i></a>
                <a className='ms-3' href="https://wa.me/918098353500"><i className='wtsapp  btn bi bi-whatsapp  text-white text-end'></i></a>
                </div>
            </div>
        </div>
        <div className='mt-2'>
    <Row className='m-5 mt-4'>
        <Col sm={3} className='mb-3'>
            <Image className='footerlogo d-block' src={require('../assets/img/Logo.png')} fluid />
            <div className='fw-bold'>Muthamizh Sound Wave</div>
            <div className='fw-bold'>Contact Us</div>
            <div>+91 80983 53500</div>
            <div>+91 80988 87469</div>
        </Col>
        <Col  sm={3} className='mb-3'>
            <div className='fw-bold'>Kachanam</div>
            <div>Thiruthuraipoondi Tk,</div>
            <div>Thiruvarur Dt,</div>
            <div>Tamilnadu -610 201</div>
        </Col>
        <Col sm={3} className='mb-3'>
            <div className='fw-bold'>Ammanur</div>
            <div>Near Elementary School, Ammanur,</div>
            <div>Thiruthuraipoondi Tk,</div>
            <div>Thiruvarur Dt,</div>
            <div>Tamilnadu -610 201</div>
        </Col>
        <Col sm={3} className='mb-1'>
            <h5>Quick Links</h5>
            <ul className='list-unstyled'>
                <li><a href='#home' className='text-white'>Home</a></li>
                <li><a href='#services' className='text-white'>Services</a></li>
                <li><a href='#gallery' className='text-white'>Gallery</a></li>
                <li><a href='#about_us' className='text-white'>About Us</a></li>
                <li><a href='#contactus' className='text-white'>Contact Us</a></li>
            </ul>
        </Col>
    </Row>
</div>
<p className='text-center pb-4'>&copy; {new Date().getFullYear()} Muthamizh Audios. All rights reserved.</p>
    </footer>
   </>
  )
}

export default AppFooter