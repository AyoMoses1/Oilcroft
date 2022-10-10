import React from 'react'
import styled from 'styled-components'
import Header from '../SubMain/Header'
import Footer from '../SubMain/Footer'

import NavBar from '../SubMain/Navbar'

import ContactUs from '../SubMain/ContactUs'
import {useEffect} from 'react'




function Contact() {

    useEffect(()=>{
        window.scrollTo(0,0)
      },[])



    return (
        <>
            <Header />
            <NavBar/>
            <Banner>
                <div className="banner__container">
                    <div className="banner__content">
                        
                        <h1>Contact Us</h1>
                        <p>We are always available to hear from you</p>
                    </div>
                    <div className="banner__background"></div>
                </div>
            </Banner>
            <ContactUs/>
            
            <Map>
                
            <iframe title="Google Map API" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.8395144196406!2d7.032855414263316!3d4.797588442146894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cc423501bd7d%3A0x4944d98bbc6ce5a0!2sHouse%205%2C%20211%20Trans-Amadi%20Gdn%2C%20Rainbow%20Town%20500101%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1646085810564!5m2!1sen!2sng" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
            </Map>
            <Footer />
        </>
    )
}

const Main = styled.main`

    div.container{
        padding: 50px 20px;

        @media(min-width:1000px){
            padding: 100px;
        }
    }

    div.main__flex{
        display: flex;
        flex-direction: column;

        h2.form__title{
            font-size: 25px;
            margin-bottom: 20px;
        }

        
        aside{
          margin-top: 20px;
          margin-bottom: 20px;
        }

        @media(min-width: 990px){
            flex-direction: row;
            justify-content: space-between;

            div.form__responsive{
                display: flex;
                justify-content: space-between;
                div{
                    width: 48%;
                }
            }

            aside{
                width: 35%;
            }

            .form__container{
                width: 60%;
            }
        }
    }


    div.main__caption{
        text-align: center;
        
        margin: 50px 0;

        h2{
          font-size: 25px;
          line-height: 35px;
        }

        @media(min-width: 990px){
            width: 50%;
            margin: 0 auto;

            h2{
                line-height: 50.4px !important;
            }
        }

        span{
            color: rgb(231, 60, 62);
            line-height: 24px;
        }
        h2{
            line-height: 35px;
        }
    }

    aside{
        
        .contact__flex{
            display: flex;
            margin-bottom: 20px;
            span{
                display: inline-block;

                font-size: 30px;
                color: rgb(231, 60, 62);
            }
            .contact__caption{
                margin-left: 20px;
                

                ul{
                    list-style: none;
                    padding-left: 0;
                    
                    li{
                      margin-top: 5px;
                    }
                }
            }
        }

        .contact__mail{
            color: rgb(17, 17, 17);
        }
      h3{
        font-size: 20px;
      }
    }
`

const ContactForm = styled.div`
    
    div.form__btn a{
        background: rgb(231, 60, 62);
        padding: 10px 40px;
        color: white;
        display: inline-block;
        margin-right: 20px;
        border-radius: 5px;
        cursor: pointer;

        @media(max-width: 768px){
            padding: 10px 15px;
        }
    }
    
    div.input-field{
        margin-bottom: 20px;

        input, textarea{
            width: 100%;
        }
        label{
            color: rgb(96, 96, 96);
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
        }
        input{
            height: 50px;
            border: 1px solid rgb(207, 207, 207);
            font-size: 16px;
            color: rgb(17, 17, 17);
            padding: 0 10px;
        }
        textarea{
            height: 200px;
            border: 1px solid rgb(207, 207, 207);
            font-size: 16px;
            color: rgb(17, 17, 17);
            padding: 10px;
        }
        input:focus, textarea:focus{
            outline: none;
        }
    }

`

const Map = styled.div`
    iframe{
        width: 100vw;
        object-fit: contain;
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

        p{
            color: rgb(255, 255, 255);
        }
    }

    .banner__background{
        background: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url("/images/oilcroft/others/asset.jpg");
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

export default Contact
