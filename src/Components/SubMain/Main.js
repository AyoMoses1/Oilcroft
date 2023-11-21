import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import YoutubeEmbed from './YoutubeEmbed';
import Card from '../Utilities/Card';
import Niche from '../SubMain/Niche';
import Solutions from './Solutions';
import Partners from './Partners';
import Testimonial from './Testimonial';
import Projects from './Projects';
import ContactUs from './ContactUs';
import BlogSub from './BlogSub';
import AboutSub from './AboutSub';




function Main() {

  return (
      <>
        <Container className='container'>
            <AboutSub/>
        </Container>
      <Services className="container">
        <div className="youtube__embed__container">
            <YoutubeEmbed embedId="BeHxGJYNyy0" /> 
        </div>
      </Services>   
      <Niche/>
      <Solutions/>
      <Partners/>
      {/* <Testimonial/> */}
      <MainDivider>
          <div className="container">
              <p>Outline Your World</p>
              <h2>IN A WHOLE NEW WAY</h2>
               <Link to="/contact" className='red-btn'>GET STARTED TODAY</Link>
          </div>
          <div className="banner__background"></div> 
      </MainDivider>
      <Projects/>
      <ContactUs/>
      <BlogSub/>
    </>
  );

}

const Container = styled.div`
    margin: 100px 0 200px 0;

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




const Services = styled.div`
    position: relative;
    background: rgb(243, 243, 243);

    @media(max-width:1200px){
        background: inherit;
    }
    
    div.youtube__embed__container{
        padding: 0 50px;
        position: relative;
        top: -100px;


        @media(max-width:1200px){
            top: 0;
        }

        @media(max-width:600px){
            padding: 0;
        }
    }


    div.header-caption{
        padding: 50px 0;

        h2{
            margin-bottom: 20px;
        }

        p{
            margin-bottom: 20px;
        }
    }
    div.services__cards{
        padding-bottom: 50px;

        display: flex;
        flex-direction: column;

        @media only screen and (min-width: 600px){
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;

            >div{
                width: 48%;
                margin-bottom: 20px;
            }

            h3{
                font-size: 17px;
                line-height: 26px;
            }
        }
        @media only screen and (min-width: 1000px){
            flex-direction: row;
            flex-wrap: wrap;

            >div{
                width: 30%;
            }
        }
    }




    @media(min-width: 600px){
        
    }

    
`

const MainDivider = styled.div`
    z-index: 1;
    position: relative;
    background: black;
    overflow: hidden;
    height: 50vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2{
        margin: 20px 0 40px 0;
        color: #fff;
    }
    p{
      font-size: 28px;
      line-height: 34px;  
    }

   .banner__background{
        //     linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(45,3,3,1) 44%, rgba(0,212,255,1) 100%),
        background:url("/images/oilcroft/others/maindivider.jpg");
        background-size: cover;
        background-position-x: center;
        background-attachment: fixed;
        position: absolute;
        opacity: 0.3;
        top: 0;
        height: 100%;
        width: 100vw;
        z-index: -1;
   }
        
    
`

export default Main;
