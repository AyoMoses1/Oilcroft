import React from 'react'
import styled from 'styled-components'


const Niche = () => {
    return(
        <Container>
           <NicheCaption className='container'>
                <span>Why Choose Us?</span>
                <h2>We Produce And Work For Social Development</h2>
                <p>Our people are our biggest asset but the only way to unlock their potential is to invest in the right business systems that encourage innovation. When you enable motivated people with the right tools, and the right ethical framework, the combination is powerful.</p>

                <ul>
                    <li>We pursue new and better ways of working that helps us lead the sector.</li>
                    <li>Integrity is central to our values and the way we conduct our business.</li>
                    <li>We work closely with third-party partners to focus on issues that are important to businesses and people.</li>
                </ul>
           </NicheCaption>
           <NicheBanner>
               
            </NicheBanner>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 1000px){
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`
const NicheCaption = styled.div`
    
    padding-top: 100px;

    margin-top: 50px;

    span{
        font-size: 16px;
        line-height: 26px;
    }
    h2{
        color: #1a191d;
        margin: 20px 0;
    }

    ul{
        margin: 20px 0;
    }
    li{
        font-size: 15px;
        line-height: 24px;
        color: #1a191d;
        list-style-type: none;
        margin-bottom: 5px;
    }

    @media only screen and (min-width: 1000px){
        margin-top: 0;
        width: 50%;
    }
`
const NicheBanner = styled.div`
    background:  url("/images/oilcroft/refinery.jpg") center;
    width: 100vw;
    height: 80vh;
    background-size: cover;
    position: relative;

    .niche__red{
        width: 100vw;
        height: 20%;
        background: rgb(205, 0, 1);
        position: absolute;
        bottom: 25%;
        display: flex;
        align-items: center;
        padding-left: 20px;
        
        div{
            display: flex;
            flex-direction: column;
        }

        @media only screen and (min-width: 1000px){
            width: 25%;
            right: 25%;
            bottom: 0;
            height: 30%;
        }

    }
    .niche__black{
        width: 100vw;
        height: 25%;
        background: rgb(31, 36, 48);
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        padding-left: 20px;

        div{
            display: flex;
            flex-direction: column;
        }
        @media only screen and (min-width: 1000px){
            width: 25%;
            right: 0;
            height: 30%;
        }
    }

    span:first-child{
        color: #f3f3f3;
        font-size: 35px;
        line-height: 42px;
        font-weight: 700;
        display: inline-block;
    }
    span:last-child{
        color: #f3f3f3;
        font-size: 15px;
        line-height: 24px;
        font-weight: 700;
        display: inline-block;
    }


    @media only screen and (min-width: 1000px){
        width: 50%;
    }
`

export default Niche