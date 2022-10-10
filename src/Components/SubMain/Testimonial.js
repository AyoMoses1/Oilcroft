import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"


function Testimonial() {

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
        <Container className='container'>
            <div className="testimonial__caption">
                <div className="caption__arrow">
                    <span></span><hr/>
                </div>
                <h5>WHAT OUR CLIENTS ARE SAYING</h5>
                <div className="caption__arrow">
                    <hr/><span></span>
                </div>
            </div>
            <div className="testimonial__content">
                <RedBlock>
                    <div>
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    
                </RedBlock>
                <SlickCarousel {...settings}>
                    <Card>
                        <BioData>
                            <div className='card__image'>
                                <img src="/images/oilcroft/ayo.jfif" alt=""/>
                            </div>
                            <div className='card__details'>
                                <h5>AYO MOSES</h5>
                                <p>Software Developer-Transpacia</p>
                            </div>
                            <div className='card__icon'>
                                
                            </div>
                        </BioData>
                        <Testimony>
                            <p className="italic">Oilcroft continues to provide outstanding service and excellent technical ability for various projects from smalll to large scope.</p>
                        </Testimony>
                    </Card>
                    <Card>
                        <BioData>
                            <div className='card__image'>
                                <img src="/images/oilcroft/wisdom.jpg" alt=""/>
                            </div>
                            <div className='card__details'>
                                <h5>Wisdom Adeyemi</h5>
                                <p>Creative Designer-Transpacia</p>
                            </div>
                            <div className='card__icon'>
                                
                            </div>
                        </BioData>
                        <Testimony>
                            <p className="italic">Service is always perfect and the staff is very friendly and accommodating. Always looking forward to keep doing business with Oilcroft</p>
                        </Testimony>
                    </Card>
                </SlickCarousel>
            </div>
        </Container>
    ) 
}



const Container = styled.div`
    margin: 50px 0;

    .testimonial__caption{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 50px;

        h5{
            letter-spacing: 0.1rem;

            @media(max-width: 600px){
                text-align: center;
            }
        }
    }

    div.testimonial__content{
        display: flex;
        flex-direction: column;

        @media only screen and (min-width: 1000px){
            flex-direction: row;
            justify-content: space-between;
        }
    }
    .caption__arrow{
        display: flex;
        align-items: center;

        hr{
            height: 20px;   
        }
    }
    span{
        width: 60px;
        height: 2px;
        display: inline-block;
        background: rgb(216, 216, 216);

        @media only screen and (min-width: 1000px){
            width: 200px;
        }

    }
`
const RedBlock = styled.div`
    background: rgb(205, 0, 1);
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #f3f3f3;

    h5{
        color: #fff;
    }
    div{
        font-size: 45px;
        font-weight: 700;
        line-height: 54px;
    }

    @media only screen and (min-width: 1000px){
        width: 20%;
        height: 20vh;

        div{
            font-size: 32px;
        }
    }
`

const Card = styled.div`

    @media(max-width: 600px){
        box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
        padding: 20px;
    }
    
`
const BioData = styled.div`
    display: flex;
    align-items: center;
    
    div.card__image{
        height: 50px;
    }
    img{
        border-radius: 50%;
        border: 1px solid  rgb(214, 214, 214);
        padding: 4px;
        margin-right: 20px;
        height: 100%;
    }

`

const Testimony = styled.div`
    p{
        font-size: 17px;
        line-height: 30px;
        color: #1a191d;
    }
`

const SlickCarousel = styled(Slider)`
    height: 100%;
    margin-top: 50px;
    @media only screen and (min-width: 1000px){
        width: 75%;
        margin: 0;
    }
`
export default Testimonial;
