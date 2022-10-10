import React, {useState} from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    return (
            <Container>
                <Logo>
                    <img src="/images/oilcroft/logoblack.png" alt="Oilcroft Logo"/>
                </Logo>
                <Contact>
                    <div className='contact-col'>
                        <span className='red'><i class="fa fa-mobile" aria-hidden="true"></i></span>
                        <div className='contact-div'>
                            <span className='light'>Call Us 24/7</span>
                            <br/>
                            <span className='bold'>(+234) 080-2424-3181 </span>
                        </div>
                    </div>
                    <div className='contact-col'>
                        <span className='red'><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <div className='contact-div'>
                            <span className='light'>Send Us Mail</span>
                            <br/>
                            <span className='bold'>info@oilcroft.com</span>
                        </div>
                    </div>
                    <div className='contact-col'>
                        <span className='red'><i class="fa fa-home" aria-hidden="true"></i></span>
                        <div className='contact-div'>
                            <span className='light'>Our Location</span>
                            <br/>
                            <span className='bold'>House 5 Road 211 Trans Amadi Gardens, Peter Odili Road, Port Harcourt, Rivers State, Nigeria</span>
                        </div>
                    </div>
                </Contact>
                <MenuToggler onClick={() => setBurgerStatus(true)} show={burgerStatus}>
                    <span></span>
                    <span></span>
                    <span></span>
                </MenuToggler>
                <CustomCloseBtn onClick={() => setBurgerStatus(false)} show={burgerStatus}>
                    <span><i class="fa fa-times" aria-hidden="true"></i></span>
                </CustomCloseBtn>

                <BurgerNav show={burgerStatus}>
                    <Link to = '/'>Home</Link>
                    <Link to = '/about'>About</Link>
                    <Link to = '/services'>Services</Link>
                   
                    <Link to = '/blog'>Blog</Link>
                    
                    <Link to ='/contact'>Contact</Link> 

                    <NavContact className='red-btn'>Get a Quote</NavContact>
                </BurgerNav>
            </Container>
    );

}

const Container = styled.div`
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    border-bottom: 1px solid rgb(238, 238, 238);

    @media(max-width:768px){
        height: 10vh;
        position: fixed;
        width: 100vw;
        z-index: 4;
        background: #fff;
       
    }
   
`

const Logo = styled.div`
    width: 20%;
    
    img{
        width: 80%;
        object-fit: contain;
        height: 40px;
    }
`

const Contact = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    position: relative;

    div.contact-col{
        display: flex;
        align-items: center;
        padding: 0 10px;
        border-right: 1px solid rgb(238, 238, 238);

        span.red{
            font-size: 20px;
        }
        span.light{
            font-size: 15px;
        }
        span.bold{
            font-size: 13px;
        }
        div.contact-div{
            padding-left: 10px;  
        }
    }

    @media(max-width: 800px){
        display: none;
    }

    

`

const MenuToggler = styled.div`
    display: ${props => props.show ? 'none':'flex'};
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    right: 20px;

    @media(min-width: 800px){
        display: none;
    }


    span{
        display: inline-block;
        width: 40px;
        height: 4px;
        background: black;
        margin-bottom: 5px;
        border-radius: 5px;

        @media(max-width: 800px){
            width: 20px;
            height: 2px;
        }
    }

`
const CustomCloseBtn =styled.div`
    span{
        font-size: 25px;
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 15px;
        display:  ${props => props.show ? 'inline-block':'none'};
              
    }
`

const BurgerNav = styled.nav`
    position: fixed;
    top: 10vh;
    bottom: 0;
    left: -300px;
    height: 90vh;
    width: 300px;
    background: white;
    z-index: 3;
    transform: ${props => props.show ? 'translateX(300px)':'translateX(0)'};
    transition: transform 0.5s ease-in-out;
    padding-top: 10vh;
    a{
        display: block;
        color: #000;
        
        font-family: "roboto", sans-serif;
        font-size: 15px;
        font-weight: 400;
        padding: 10px 20px;
        border-bottom: 1px solid rgb(235, 235, 235);
    }
    a:last-child{
        border: none;
    }
`
const NavContact = styled.div`
    width: 80%;
    margin-top: 20px;
    margin-left: 25px;
`
export default Header;
