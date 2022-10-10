import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Navbar() {

   

    return (
        <nav>
            <Container className='container'>
                <NavLinks>
                    <Link to ="/" className="nav__link">Home</Link>
                    <Link to ="/about" className="nav__link">About</Link>
                    <Link to ="/services" className="nav__link">Services</Link>
                    {/* <Link to ="/gallery">Gallery</Link> */}
                    <Link to ="/blog" className="nav__link">Blog</Link>
                </NavLinks>
                <div className='nav-contact'>
                    <NavContact className='red-btn' href='/contact'>Contact Us</NavContact>
                </div>
            </Container>
        </nav>
    );

}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-top: 1px solid rgb(238, 238, 238);
    a{
        display: inline-block;
        font-weight: 700;
        color: #1a191d;
    }
    .nav-contact{
        display: flex;
        width: 30%;
        justify-content: end;
        border-left: 1px solid rgb(238, 238, 238);
    }

    @media(max-width: 768px){
        display: none;
    }
`

const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;

    a{
        position: relative;

        &:before{
            display: block;
            background: rgb(205, 0, 1);
            content: "";
            position: absolute;
            bottom: -6px;
            height: 2px;
            right: 0;
            left: 0;
            border-radius: 0px 0px 4px 4px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }

    a:hover{
        &:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }


    
`

const NavContact = styled.a`
    display: inline-block;
    width: 80%;
    color: white !important;

    &:hover{
        color: red !important;
    }
`



export default Navbar;
