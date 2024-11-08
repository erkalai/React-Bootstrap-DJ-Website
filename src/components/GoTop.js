import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
// import Button from 'bootstrap';

const GoTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled>300){
            setVisible(true);
        }else if(scrolled<=300){
            setVisible(false);
        }
    };
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    };
    window.addEventListener("scroll", toggleVisible);

  return (
    <div className='btn'>
        <FaArrowCircleUp onClick={scrollToTop} style={{display : visible ? "inline" : "none"}}
        />
    </div>
  )
}

export default GoTop