import React from "react";
import styled from "styled-components";
import Footer from "../SubMain/Footer";
import Header from "../SubMain/Header";
import { useParams } from "react-router-dom";
import servicesData from "../../serviceData";
import { useEffect, useRef } from "react";
import Navbar from "../SubMain/Navbar";

function ServiceDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const serviceElement = servicesData.filter((data) => data.id === id);

  return (
    <>
      <Header />
      <Navbar />
      <Banner>
        <div className="banner__container">
          <div className="banner__content">
            <h1>Our Services</h1>
            <p>
              To meet the growing worldwide demand for oil whil epreparing for
              the future{" "}
            </p>
          </div>
          <div className="banner__background"></div>
        </div>
      </Banner>
      <Container>
        <Stories>
          <BlogPost>
            <div className="blog__image">
              <img src={serviceElement[0].image} alt="Blog" />
              <div className="blog__caption">
                <Date>
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  July 05, 2021
                </Date>
                <Author>
                  <i class="fa fa-user" aria-hidden="true"></i>
                  Admin
                </Author>
              </div>
            </div>
            <div className="blog__content">
              <Title>{serviceElement[0].title}</Title>
              <Description>{serviceElement[0].content}</Description>
            </div>
          </BlogPost>
        </Stories>
        {/* Categories Section (aside section) */}

        <aside>
          <Categories>
            <h3>Our Projects</h3>
            <ul>
              <li>Oil field solutions</li>
              <li>Asset Integrity and Maintenance</li>
              <li>Scafolding services</li>
              <li>Procurement and equipment leasing</li>
              <li>Scafolding services</li>
              <li>Procurement Services</li>
            </ul>
          </Categories>
        </aside>
      </Container>

      <Footer />
    </>
  );
}

const Container = styled.div`
  padding: 50px 10px;
  background: rgb(251, 251, 251);

  @media (min-width: 992px) {
    display: flex;
    padding: 50px;
    justify-content: space-between;
  }

  aside {
    @media (min-width: 992px) {
      width: 30%;
    }
  }
`;
const Stories = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(255, 255, 255);
  padding-bottom: 50px;

  @media (min-width: 992px) {
    width: 65%;
    background: inherit;
  }
`;

const BlogPost = styled.div`
  div.blog__image img {
    width: 100%;
  }
  margin-bottom: 50px;
`;
const Title = styled.div`
  font-size: 28px;
  line-height: 26.4px;
  font-weight: 800;
  margin: 20px 0;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 28.8px;
  color: rgb(96, 96, 96);
  margin-bottom: 20px;
  white-space: pre-line;
`;

const Author = styled.span`
  i {
    color: rgb(231, 60, 62);
    margin-right: 10px;
  }

  font-size: 13px;
  font-weight: 500;
  color: rgb(96, 96, 96);
  margin-right: 20px;
`;

const Date = styled(Author)``;

const Banner = styled.div`
  text-align: center;

  h1 {
    color: #fff;
  }
  .banner__container {
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    z-index: 1;
    position: relative;
    background: black;
    overflow: hidden;
    @media (max-width: 768px) {
      padding-top: 80px;
      padding-bottom: 50px;
    }

    p {
      color: rgb(255, 255, 255);
    }
  }

  .banner__background {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url("/images/oilcroft/refinery.jpg");
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

  .banner__content {
    color: rgb(255, 255, 255);
    max-width: 100%;
    padding: 10% 20px;
    p {
      color: rgb(255, 255, 255);
    }
  }
`;

const Categories = styled.div`
  background: rgb(255, 255, 255);
  padding: 20px;
  margin-top: 50px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (min-width: 990px) {
    margin-top: 0;
  }

  h3 {
    border-bottom: 1px solid rgb(231, 60, 62);
    padding-bottom: 10px;
    font-weight: 400;
  }

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      padding: 10px 0;
      border-bottom: 1px solid rgb(231, 231, 231);
      cursor: pointer;
      transition: 0.5s ease;

      :hover {
        color: rgb(231, 60, 62);
        font-size: 17px;
      }
    }

    li:last-child {
      border-bottom: none;
    }
  }
`;

export default ServiceDetails;
