import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = (props) => {
    return(
        <Container>
            <Content className="container">
                <div className="footer__caption">
                    <img src="/images/oilcroft/logo.png" alt=""/>
                    <p>We use modern technology to execute projects and adhere to  government policies, standards and regulations</p>
                </div>
                <div className="footer__contact">
                    <h3>Contact Company</h3>
                    <div>
                        <span className="dark-grey"><i class="fa fa-mobile" aria-hidden="true"></i></span>
                        <span className="offset-right">(+234) 080-2424-3181</span>
                    </div>
                    <div>
                        <span className="dark-grey"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <a href="mailto:oilcroft@gmail.com" className="offset-right">info@oilcroft.com</a>
                    </div>
                    <div>
                        <span className="dark-grey"><i class="fa fa-home" aria-hidden="true"></i></span>
                        <span className="offset-right">House 5 Road 211 Trans Amadi Gardens</span>
                    </div>
                </div>
                <div className="footer__links">
                    <h3>Quick Links</h3>
                    <div className='links'>
                        <div className="flex">
                            <span className="header__bullet"></span><Link to ="/">Who Are We</Link>
                        </div>
                        <div className="flex">
                            <span className="header__bullet"></span><Link to ="/">Our History</Link>
                        </div>
                        <div className="flex">
                            <span className="header__bullet"></span><Link to ="/">Leadership</Link>
                        </div>
                        <div className="flex">
                            <span className="header__bullet"></span><a href ="/profile.pdf">Download Brochure</a>
                        </div>
                        <div className="flex">
                            <span className="header__bullet"></span><Link to ="/">News and events</Link>
                        </div>
                        <div className="flex">
                            <span className="header__bullet"></span><Link to ="/">Use application</Link>
                        </div>
                    </div>
                </div>
            </Content>

            <Copyright className="container">
                <div className="content">
                    <div> &copy; 2022 Developed by Transpacia</div>
                    <div>
                        <Link to = "/">Sitemap</Link>
                        <span className="header__bullet"></span>
                        <Link to = "/">Terms of Service</Link>
                        <span className="header__bullet"></span>
                        <Link to = "/">Privacy Policy</Link>
                    </div>
                </div>
            </Copyright>
        </Container>
    )
}

const Container = styled.div`
    background: rgb(26, 25, 29);
    color: #fff;
    padding-top: 50px;

    h2,h3{
        color: #fff;
    }

    h3{
        margin-bottom: 20px;
    }
    
    
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 50px;

    img{
        width: 50%;
    }

    h3{
        font-size: 20px;
        line-height: 24px;
    }
    @media only screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;

        >div{
            width: 30%;
        }
        
    }

    div.footer__caption{
       
        p{
           margin: 20px 0; 
        }
    }

    div.footer__contact{
        margin-bottom: 50px;

        .flex{
            display: flex;
            align-items: center;
        }

        .dark-grey{
            color: #767577 !important;
            font-size: 25px;
            line-height: 25px;
            
           
        }

    }
    div.footer__links{

        a{
            color: #ededed;
            font-size: 15px;
            line-height: 24px;
            font-weight: 400;
            display: inline-block;
            margin-bottom: 10px;
            margin-left: 10px;
        }
    }

    div.footer__contact span, div.footer__contact a{
        color: #ededed;
        font-size: 15px;
        line-height: 24px;
        font-weight: 400;
        display: inline-block;
        margin-bottom: 10px; 
        
    }
    .offset-right{
        margin-left: 19px;
        font-size: 15px;
        line-height: 24px;
    }

`

const Copyright = styled.div`
    background: rgb(17, 16, 19);


    .content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 40px 0;
        height: 20vh;
        @media only screen and (min-width: 600px){
            flex-direction: row;
            justify-content: space-between;
            
        }

        a{
            color: #ededed;
            font-size: 15px;
            line-height: 24px;
            display: inline-block;
            margin-right: 10px;
        }

        span{
            background: #ededed;
            border-radius: 50%;
        }
    }
    
    
`

export default Footer