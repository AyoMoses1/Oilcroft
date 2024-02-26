import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Projects() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <Container className="container">
      <Caption>
        <h2>Our Latest Projects</h2>
        <p>
          All functions including supply chain, value chain, project scheduling,
          manufacturing, services and spares, technology, R&D, etc. are
          integrated to give a complete solutions package.
        </p>

        <div className="caption-hr">
          <span></span>
        </div>
      </Caption>
      <SlickCarousel {...settings}>
        <div>
          <img src="/images/oilcroft/others/oil-valve.jpg" alt="" />
        </div>
        <div>
          <img src="/images/oilcroft/img2.jpg" alt="" />
        </div>
        <div>
          <img src="/images/oilcroft/down.jpg" alt="" />
        </div>
        <div>
          <img src="/images/oilcroft/img4.jpg" alt="" />
        </div>
      </SlickCarousel>
      {/* <div className="project__btn">
            <Link to="/services" className="red-btn">VIEW ALL PROJECTS</Link>
          </div> */}
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 50px;
  .project__btn {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
  a {
    padding: 10px 20px;
  }
`;

const Caption = styled.div`
  margin: 50px 0;
  h2 {
    margin-bottom: 20px;
  }
  p {
    font-size: 17px;
    line-height: 26px;
  }

  .caption-hr {
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    text-align: center;

    .caption-hr {
      width: 100%;
    }
  }
`;
const SlickCarousel = styled(Slider)`
  img {
    width: 100%;
    padding-right: 20px;
    height: 250px;
  }
`;
export default Projects;
