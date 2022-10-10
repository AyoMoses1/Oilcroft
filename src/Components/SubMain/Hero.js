import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Fade from 'react-reveal'



import HeroSlider, {
    Slide,
    ButtonsNav,
    Nav,
    OverlayContainer
  } from "hero-slider";


function Hero() {
    const hallstatt = "/images/threehero.jpg";
    const hvitserkur = "/images/onehero.jpg";
    const jacksonville = "/images/oilcroft/homepage3.jpg";

    const styledWrapper = {        
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        zIndex: '1',
    }
  return (
        <Container>
            <HeroSlider
                orientation="horizontal"
                initialSlide={1}
                settings={{
                    slidingDuration: 1000,
                    slidingDelay: 50,
                    shouldAutoplay: true,
                    shouldDisplayButtons: false,
                    autoplayDuration: 3000,
                    height: "85vh"
                }}
                >

                <Slide
                    navDescription="Hallstatt - Austria"
                    background={{
                    backgroundImage: hallstatt,
                    backgroundAnimation: "vertical",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100vw 100%',
                    backgroundPosition: 'bottom center',
                    }}
                />
                <Slide
                    navDescription="Hallstatt - Austria"
                    background={{
                    backgroundImage: hvitserkur,
                    backgroundAnimation: "vertical",
                    backgroundSize: '100vw 100%',
                    backgroundRepeat: 'no-repeat',
                    
                    backgroundPosition: 'center'

                    }}
                />
                <Slide
                    navDescription="Hallstatt - Austria"
                    background={{
                    backgroundImage: jacksonville,
                    backgroundAnimation: "vertical",
                    backgroundSize: '100vw 100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    }}
                />

                <OverlayContainer>
                    <Wrapper>
                        <Fade top>
                            <h1>Continous improvement and cost reduction</h1>
                        </Fade>
                        <HeroBtn>
                            <Link to="/about" className='hero-btn-one red-btn'>Learn More</Link>
                            <Link to="/services" className='hero-btn-two white-btn'>Our Services</Link>
                        </HeroBtn>
                    </Wrapper>
                </OverlayContainer> 
                
            </HeroSlider>
        </Container>
  );

}



const Container= styled.div`
    text-align: center;
    border-bottom: 5px solid rgb(205, 0, 1);
`


const Wrapper = styled.div`
    
    position: relative;
    z-index: 1;
    text-align: center;
    width: 60%;
    padding: 200px 20px;
    height: 100%;



    .hero-caption{
        font-weight: 700;
        p{
            font-size: 17px;
            line-height: 26px;    
        }
    }

    h1{
        color: #fff;
        margin-bottom: 20px;
        
    }

    @media(max-width: 1000px){
        width: 100%;
        h1{
            font-size: 20px;
        }
        .hero-caption{
            width: 100%;
            font-size: 11px;
            line-height: 16px;
        }
        a{
            font-size: 12px;
            padding: 5px 10px;
        }
    }

    @media(min-width: 600px){
        padding: 100px 50px;
        text-align: start;
       
    }
`
const HeroBtn = styled.div`
    margin-top: 20px;
    a{
        display: inline-block;
        width: 200px;
    }
    
    .hero-btn-one{
        margin-right: 20px;
    }

    @media(max-width: 600px){
       display: flex;
       flex-direction: column;
       align-items: center;
       margin-top: 20px;

       .hero-btn-one{
           margin: 0 0 20px 0;
       }
    }

    @media(max-width: 1200px){
        margin-top: 20px;
    }
    
`

export default Hero;
