import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Banner(props) {

  return (
      <Container>
          <Wrapper className='hero-caption'>
              <h1>{props.title}</h1>
              <p>{props.caption}</p>
          </Wrapper>
      </Container>
  );

}

const Container = styled.div`
    background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url("/images/workerwield.jpg") center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    color: white;
    position: relative;
    // background: ${props => props.bgImage ? 'red':'green'};

    @media(max-width: 600px){
        background-size: cover;
        align-items: center;
    }

`

const Wrapper = styled.div`
    height: 30%;
    padding: 20px 50px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    .hero-caption{
        width: 60%;
        font-weight: 700;
        p{
            font-size: 17px;
            line-height: 26px;
        }
    }

    @media(max-width: 600px){
        padding: 50px 20px;

        .hero-caption{
            width: 100%;
            font-size: 11px;
            line-height: 16px;
        }
    }
    h1{
        color: #fff;
    }
    @media(max-width: 768px){
        text-align: center;
        max-width: 90vw;

        
    }
        

`

export default Banner;
