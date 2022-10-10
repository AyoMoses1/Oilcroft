import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { Link } from 'react-router-dom'

function AboutSub() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
            }
          }
        ]
      };  
  return (
    <>
        <div className='main__about'>
                <AboutOilcroft>
                    <h2>About Us</h2>
                    <p>Oilcroft Energy is a diverse energy solutions company Headquartered in Port Harcourt Nigeria, with offices also in Lagos and Milton Keynes, UK.</p>
                    <p>We are a leading provider of a range of services and technologies which includes but not limited to; Well Engineering Design and tool rentals, Asset Life Extension & Integrity Management, Advanced Water Treatment, Chemical Supply, High-end Procurement and Equipment Leasing, Minor Civil Construction, and Scaffolding Services.</p>
                    <p>Oilcroft prides itself in executing projects with uttermost professionalism, ensuring timely delivery without compromise on budget or quality of delivery.</p>
                    
                </AboutOilcroft>
                <MissionAndVisionStatement>
                    <SlickCarousel {...settings}>
    
                                <Mission>
                                    <h4> <span class="header__bullet"></span> OUR MISSION</h4>
                                    <p>To create value for our customers by providing exceptional service while using a professional approach.  We strive to deliver superior quality projects to our clients while meeting budget and schedule goals.</p>
                                </Mission>
                           
                            
                                <Vision>
                                    <h4> <span class="header__bullet"></span> OUR VISION</h4>
                                    <p>Our vision is to be widely recognized within the industry for our continuing commitment to customer service and client satisfaction.</p>
                                </Vision>
                    </SlickCarousel>            
                </MissionAndVisionStatement>
            </div>
    </>
  )
}


const AboutOilcroft = styled.div`

    width: 60%;
    .red-btn{
        display: inline-block;
        margin-top: 20px;
    }

    @media(max-width: 929px){
        width: 100%;
        h2{
            text-align: center;
            margin-bottom: 20px;
        }
        .red-btn{
            display: block;
        }
    }
`


const MissionAndVisionStatement = styled.div`
    width: 35%;
    

    @media(max-width: 929px){
        width: 100%;
        margin-top: 50px;
    }

`

const Mission = styled.div`

    background: rgb(246, 246, 246);
    padding: 20px;
    height: 200px;

    h4{
        color: #1a191d;
        margin-bottom: 20px;
    }
    p{
        color: #666666;
    }
   
`
const Vision = styled(Mission)``

const SlickCarousel = styled(Slider)`
    
`

export default AboutSub