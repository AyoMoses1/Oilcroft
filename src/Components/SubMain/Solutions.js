import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
function Solutions() {

    let settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
            }
          }
        ]
      };


    return (
        <Container>
            <div className="flex__container">
                <SolutionCaption className='container'>
                    <span>Technical Solutions</span>
                    <h2>Delivery</h2>
                    <p>We have a diverse team with in-depth exposure and experience in the oil and gas industry, driven by the desire to deliver on time cost effective and quality projects</p>
                </SolutionCaption>
                <div className="solutionContainer">
                    <div className='image__container'>
                        <img src="/images/oilcroft/servicetwo.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div className='nugget__container'>
                <Integrity>
                    <span> <i class="fas fa-tractor"></i></span>
                    <h4>Integrity</h4>
                    <p>Integrity isn’t a destination. It is a way of life. It is an internal guidance system that will never guide you astray! </p>
                </Integrity>
                <Environment>
                    <span><i class="fas fa-industry"></i></span>
                    <h4>Environment</h4>
                    <p>Safety is one of the highest priorities within Oilcroft. It is imperative that everyone follows the policies and guidelines.</p>  
                </Environment>
            </div>
        </Container>
    );

}

const Container= styled.div`
    @media(max-width: 1000px){
        display: none;
    }
    @media(max-width:768px){
        display: block;
    }
    div.flex__container{
        display: flex;

        @media(max-width: 768px){
            flex-direction: column;
        }
    }
    div.nugget__container{
        display: flex;

        @media(max-width: 768px){
            flex-direction: column;
        }
    }

    div.solutionContainer{

        width: 50%;

        img{
            width: 100%;
            height: 100%;
        }

        @media(max-width: 768px){
            width: 100%;
        }
        
    }
`

const SolutionCaption = styled.div`
    width: 50%;
    
    span{
        font-size: 16px;
        line-height: 26px;
    }
    h2{
        color: #1a191d;
        margin: 20px 0;
    }

    a{
        display: inline-block;
        margin: 50px 0;
        padding: 10px 20px;
    }

    @media(max-width: 768px){
        width: 100%;
    }
`

const Integrity = styled.div`
    background: #808080;
    padding: 100px 20px;
    width: 100%;
    height: 200px;
    h4{
        font-weight: 700;
        color: white;
        margin: 20px 0;
    }
    p{
        color: #f9f9f9;
    }
    span{
        font-size: 50px;
        color: white;
    }
    @media only screen and (min-width: 1000px){
        padding: 20px 50px;
        h4{
            margin: 10px 0;
        }

        div.solutionContainer{
            width: 50%;
        }
    }
    @media(max-width: 768px){
        padding: 20px;
        h4{
            margin: 10px 0;
        }
        span{
            font-size: 25px;
            color: white;
        }
    }
    
`

const Environment = styled(Integrity)`
    background: rgb(205, 0, 1);
`


const SlickCarousel = styled(Slider)`
    
`














export default Solutions;
