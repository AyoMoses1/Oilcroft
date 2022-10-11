import React from 'react'
import styled from 'styled-components'
import Footer from '../SubMain/Footer'
import Header from '../SubMain/Header'
import Navbar from '../SubMain/Navbar'
import {useEffect} from 'react'


function Blog() {

    useEffect(()=>{
        window.scrollTo(0,0)
      },[])

    return (
        <>
            <Header/>
            <Navbar/>
            <Banner>
                <div className="banner__container">
                    <div className="banner__content">
                        
                        <h1>Our Blog</h1>
                        <p>We keep you updated in the latest trends of technologies</p>
                    </div>
                    <div className="banner__background"></div>
                </div>
            </Banner>
            <Container>
               <Stories>
                    <BlogPost>
                        <div className="blog__image">
                            <img src="/images/oilcroft/oilcroftwo.jpg" alt="Blog" />
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
                            <Title>Assortment of milling tools</Title>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. At vero eos et accusam et justo duo dolores et ea rebum.   
                            </Description>
                            <Button>Read More</Button>
                        </div>
                    </BlogPost>
                    <BlogPost>
                        <div className="blog__image">
                            <img src="/images/oilcroft/others/asset.jpg" alt="Blog" />
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
                            <Title>Life extension and integrity management</Title>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. At vero eos et accusam et justo duo dolores et ea rebum.   
                            </Description>
                            <Button>Read More</Button>
                        </div>
                    </BlogPost>
                    <BlogPost>
                        <div className="blog__image">
                            <img src="/images/oilcroft/others/one.jpg" alt="Blog" />
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
                            <Title>OCTG- Oil Country Tubular Goods</Title>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. At vero eos et accusam et justo duo dolores et ea rebum.   
                            </Description>
                            <Button>Read More</Button>
                        </div>
                    </BlogPost>
                    <BlogPost>
                        <div className="blog__image">
                            <img src="/images/oilcroft/others/oil-valve.jpg" alt="Blog" />
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
                            <Title>Need financial help to open again your business</Title>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. At vero eos et accusam et justo duo dolores et ea rebum.   
                            </Description>
                            <Button>Read More</Button>
                        </div>
                    </BlogPost>

                    <BlogNav>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </BlogNav>
                </Stories> 
                {/* Categories Section (aside section) */}
                
                <aside>
                    <Categories>
                        <h3>Categories</h3>
                        <ul>
                            <li>Oil and Gas</li>
                            <li>Team</li>
                            <li>Gallery</li>
                            <li>Civil Responsibilities</li>
                        </ul>
                    </Categories>
                    <RecentPosts>
                        <h3>Recent Posts</h3>
                        <div className="post">
                            <img src="/images/oilcroft/octg2.jfif" alt="" />
                            <div className="post__caption">
                                <h4>Customer experience</h4>
                                <span>06-07-2021</span>    
                            </div>   
                        </div>
                        <div className="post">
                            <img src="/images/oilcroft/refinery.jpg" alt="" />
                            <div className="post__caption">
                                <h4>The Responsible Worker </h4>
                                <span>07-07-2021</span>    
                            </div>   
                        </div>
                        <div className="post">
                            <img src="/images/oilcroft/others/maindivider.jpg" alt="" />
                            <div className="post__caption">
                                <h4>Safety at the workplace</h4>
                                <span>06-08-2021</span>    
                            </div>   
                        </div>
                    </RecentPosts>
                </aside>
            </Container>

            <Footer/>
        </>
    )
}


const Container = styled.div`
    padding: 50px 10px;
    background: rgb(251, 251, 251);

    @media(min-width: 992px){
        display: flex;
        padding: 50px;
        justify-content: space-between;
    }

    aside{
        @media(min-width: 992px){
            width: 30%;
        }
    }

`
const Stories = styled.div`
    display: flex;
    flex-direction: column;
    background: rgb(255, 255, 255);
    padding-bottom: 50px;

    @media(min-width: 992px){
        width: 65%;
        background: inherit;
    }

    
`

const BlogPost = styled.div`
    div.blog__image img{
        width: 100%;
    }
    margin-bottom: 50px;
`
const Title = styled.div`
    font-size: 22px;
    line-height: 26.4px;
    font-weight: 500; 
    margin: 20px 0;

    :hover{
        color: rgb(231, 60, 62);
        transition: ease 0.5s;
        cursor: pointer;
    }
`

const Description= styled.div`
    font-size: 15px;
    line-height: 27px;
    color: rgb(96, 96, 96);
    margin-bottom: 20px;
`

const Button = styled.a`
    font-size: 16px;
    font-weight: 400;
    background: rgb(205, 0, 1);
    color: rgb(255, 255, 255);
    padding: 15px 40px;
    border-radius: 3px;
    cursor: pointer;
    transition: ease 0.5s;

    :hover{
        background: black;
       
    }
`
const Author =  styled.span`
    i{
        color: rgb(205, 0, 1);
        margin-right: 10px;
    }
    
    font-size: 13px;
    font-weight: 500;
    color: rgb(96, 96, 96);
    margin-right: 20px;
`

const Date = styled(Author)``

const BlogNav = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;

    div{
        cursor: pointer;
        padding: 10px 20px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;
        font-size: 18px;
        font-weight: 700;
        transition: 0.5s ease;

        :hover{
            color: rgb(255, 255, 255);
            background: rgb(231, 60, 62);
        }
    }
`



const Categories = styled.div`
    background: rgb(255, 255, 255);
    padding: 20px;
    margin-top: 50px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media(min-width: 990px){
        margin-top: 0;
    }

    h3{
        border-bottom: 1px solid rgb(231, 60, 62);
        padding-bottom: 10px;
        font-weight: 400;
    }

    ul{
        list-style-type: none;
        padding-left: 0;
        
        li{
            padding: 10px 0;;
            border-bottom: 1px solid rgb(231, 231, 231);
            cursor: pointer;
            transition: 0.5s ease;

            :hover{
                color: rgb(231, 60, 62);
                font-size: 17px;
            }
        }
        
        li:last-child{
            border-bottom: none;
        }
    }
`

const RecentPosts = styled.div`
    background: rgb(255, 255, 255);
    padding: 20px;
    margin-top: 50px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    h3{
        border-bottom: 1px solid rgb(231, 60, 62);
        padding-bottom: 10px;
        margin-bottom: 20px;
    }
    .post{
        display: flex;
        margin-bottom: 20px;
        align-items: center;

        img{
            width: 20%;
            cursor: pointer;
        }
        
        .post__caption{


            margin-left: 20px;
            h4{
              line-height: 0;
              cursor: pointer;
              transition: 0.2s ease;
              margin-bottom: 10px;
            }
            h4:hover{
              color: rgb(231, 60, 62);
            }
            span{
              font-size: 14px;
            }
        }
        

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
        background: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url("/images/oilcroft/others/1.jpg");
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
export default Blog

