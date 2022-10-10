import React from 'react';
import styled from 'styled-components';
import Banner from '../SubMain/Banner';
import ContactUs from '../SubMain/ContactUs';
import Footer from '../SubMain/Footer';
import Header from '../SubMain/Header';
import Testimonial from '../SubMain/Testimonial';
import NavBar from '../SubMain/Navbar'

import 'pure-react-carousel/dist/react-carousel.es.css';
import AboutSub from '../SubMain/AboutSub'
import {useEffect, useRef} from 'react'


function About() {

  const aboutMain = useRef()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])


  return (
      <>
        <Header/>
        <NavBar/>
        <Banner title="About Us" caption="See our commitment to safety and sustainability" color="red" bgImage={true}/>
        <Container className='container'>
        
          <AboutSub/>
        
      </Container>
        <ContactUs/>
        <Testimonial/>
        <Footer/>
      </>
  )
}



const Container = styled.div`
    
    margin: 100px 0;

    div.main__about{
      display: flex;
      justify-content: space-between;
  }
 
  @media(max-width: 929px){
      div.main__about{
          margin-top: 50px;
          flex-direction: column;
          margin-bottom: 50px;    
      }
  }
  @media(max-width: 1200px){
      margin: 50px 0;   
  }
`




const AboutDivider = styled.div`

    position: relative;
    div.backGroundDivider {
      width: 100%;
      height: 70vh;
    }
    div.backgroundOne{
      background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)), url("/images/slider1.png") no-repeat;
      background-size: cover;
    }
    div.backgroundTwo{
      background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url("/images/slider2.jfif") no-repeat;
      background-size: cover; 
    }
    div.backgroundThree{
      background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url("/images/slider3.png") no-repeat;
      background-size: cover;
      
    }

    .carousel-btn{
      height: 50px;
      color: #fff;
      width: 100px;
      font-weight: 700;
      position: absolute;
      top: 50%;
    }

    .next{
      right: 0;
    }

`

export default About;
