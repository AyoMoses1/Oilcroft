import React from 'react';
import Header from '../SubMain/Header'
import Navbar from '../SubMain/Navbar'
import BlogPost from '../SubMain/BlogPost';
import styled from 'styled-components';
import Footer from '../SubMain/Footer';
import Testimonial from '../SubMain/Testimonial';
import Projects from '../SubMain/Projects';
import servicesData from '../../serviceData';
import {useEffect} from 'react'

function Services() {

    useEffect(()=>{
        window.scrollTo(0,0)
      },[])

    const serviceElements = servicesData.map(data => {
        return <BlogPost title = {data.title}  description = {data.content.slice(0,100)} image = {data.image} key = {data.id} id ={data.id}/>
    })

    return (
      <>
        <Header/>
        <Navbar/>
        <   Banner>
                <div className="banner__container">
                    <div className="banner__content">
                        <h1>Our Services</h1>
                        <p>We pride ourselves in delivering the best services to our prospects</p>
                    </div>
                    <div className="banner__background"></div>
                </div>
            </Banner>
        <Container className='container'>
          {serviceElements}
        </Container>
        <Projects/>
        <Testimonial/>
        <Footer/>
      </>
  );
}


const Container = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 600px){
        flex-direction: row;
        
        flex-wrap: wrap;
        

        >div{
            width: 48%;
            margin-bottom: 20px;
            margin-left: 20px;
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
`
const Banner = styled.div`
    text-align: center;
    
    h1{
        color: #fff;
       
    }
    .banner__container{
        padding-top: 50px;
        color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        z-index: 1;
        position: relative;
        background: black;
        overflow: hidden;

        @media(max-width: 768px){
            padding-top: 80px;
            padding-bottom: 50px;
        }

        p{
            color: rgb(255, 255, 255);
        }
    }

    .banner__background{
        background: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url("/images/oilcroft/refinery.jpg");
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
    
    .banner__content{
        color: rgb(255, 255, 255);
        max-width: 100%;
        padding: 10% 20px;
        p{
            color: rgb(255, 255, 255);
        }
    }
    
`


export default Services;
