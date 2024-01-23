import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"


function Partners() {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
            }
          }
        ]
      };
 

  return (
      <Container className='container'>
          <SlickCarousel {...settings}>
          <div className="image__container">
                <img src="/images/logos/seplat.jpg" alt=""/>
            </div>
            <div className="image__container">
                <img src="/images/logos/ncpc.jpg" alt=""/>
            </div>
            <div className="image__container">
                <img src="/images/logos/shell.jpg" alt=""/>
            </div>
            <div className="image__container">
                <img src="/images/new/matrix.jpg" alt=""/>
            </div>
            <div className="image__container">
                <img src="/images/logos/exxon.jpg" alt=""/>
            </div>
            <div className="image__container">
              <img src="/images/logos/green.jpg" alt=""/>
            </div>
            <div className="image__container">
              <img src="/images/logos/lng.jpg" alt=""/>
            </div>
            <div className="image__container">
              <img src="/images/logos/chevron.jpg" alt=""/>
            </div>
            <div className="image__container">
              <img src="/images/new/voyage.jpg" alt=""/>
            </div>
            <div className="image__container">
              <img src="/images/logos/total.jpg" alt=""/>
            </div>
            <div className="image__container">
              <img src="/images/logos/aos.jpg" alt=""/>
            </div>
            <div className="image__container">
              <img src="/images/logos/blaqskye.jpg" alt=""/>
            </div>
            <div className="image__container">
              <img src="/images/logos/transpacia.jpg" alt=""/>
            </div>
            <div className="image__container">
              <img src="/images/logos/nestoil.jpg" alt=""/>
            </div>
            <div className="image__container">
              <img src="/images/new/weatherford.jpg" alt=""/>
            </div>
            <div className="image__container">
              <img src="/images/new/geoplex.jpg" alt=""/>
            </div>
            <div className="image__container">
              <img src="/images/new/sahara-group.jpg" alt=""/>
            </div>
          </SlickCarousel>
      </Container>
  );

}


const Container = styled.div`
   

    div.image__container{
        // border: 1px solid rgb(216, 216, 216);
        padding: 10px 50px;
        margin-right: 100px;
        
       
    }

    img{
        display: inline-block;
        width: 100px;
        height: 100px;
    }

`

const SlickCarousel = styled(Slider)`
    div{
        text-align: center;
    }
   
`
    


export default Partners;
