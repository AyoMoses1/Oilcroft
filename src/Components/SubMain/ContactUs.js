import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com'

function ContactUs() {


    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_pt9fcuc', 'ContactForm', e.target, '38JDjIdM-_Cl0RfdS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });

        e.target.reset();
    }


  return (
      <Container>
        <FormNugget className='container form-nugget'>
            <div className='formNugget__header'>
                <h2>FAQ Of Customer</h2>
                <p>If you have any questions please ask us and we will answer you as quickly as possible <b>Make a question now!</b></p>
                <div className='caption-hr-two'>
                    <span></span>
                </div>
            </div>
            <div className='faq'>
                <div className="faq__header">
                    What is the history of Oilcroft
                </div>
                <div className="faq__caption">
                At Oilcroft, the health and safety of our employees, customers, suppliers and the communities where we do business is our highest priority
                </div>
                <div className="faqs">
                    <div>Explore with us</div>
                    <div>Credible international sustainability standards</div>
                    <div>Powering progress with quality service</div>
                    <div>Vast expertise delivering real solutions</div>
                </div>
            </div>
        </FormNugget>
          <form className='container contact-form' onSubmit={sendEmail}>
              <div className="form__header">
                  <h2>Get In Touch</h2>
                  <p>Fill all information details to consult with us to get sevices from us.</p>
                  <div className='caption-hr-two'>
                    <span></span>
                </div>
                </div>
                <div className="input-field">
                    <input type="text" id="name" name="name" placeholder="YOUR NAME*"/>
                </div>
                <div className="input-field">
                    <input type="email" id="email" name="email" placeholder="EMAIL*"/>
                </div>           
                <div className="input-field">
                    <input type="text" id="inquiry" placeholder="YOUR INQUIRY ABOUT" name="inquiry"/>
                </div>
                <div className="input-field">
                    <textarea name="message" placeholder="YOUR MESSAGE*"/>
                </div>
                <div className="form__btn">
                    <button className='red-btn'>SEND INQUIRY</button>
                </div>
          </form>
      </Container>
  );
}

const Container = styled.div`

    background: rgb(237, 237, 237);
    padding-top: 50px !important;
    padding-bottom: 50px !important;
    display: flex;
    flex-direction: column;



    @media(min-width: 768px){
        flex-direction: row;

        div.form-nugget, .contact-form{
            width: 50%;
            padding-top: 100px;
            padding-bottom: 100px;
        }
    }   


    div.caption-hr-two{
        margin-top: 20px;
    }


    form{
        background: white;
        display: flex;
        flex-direction: column;
        
        padding-top: 50px !important;
        padding-bottom: 50px !important;
        width: 100%;
    }

    div.form__header{
        margin-bottom: 50px;

        p{
            font-size: 17px;
            line-height: 26px;
        }
    }
    p{
        margin-top: 20px;
    }
    
    div.input-field, div.form__btn{
        width: 100%;
    }
    input, textarea{
        width: 100%;
        padding: 12px;
        margin-bottom: 20px;
        border: 1px solid rgb(222, 222, 222);
        font-size: 12px;

    }

    input::placeholder, textarea::placeholder{
        color: #666666;
    }

    .red-btn{
        display: block;
    }
`

const FormNugget = styled.div`
    background: #808080;
    width: 100%;
    color: #fff;
    padding-top: 50px !important;
    padding-bottom: 50px !important;

    h2{
       color: #fff; 
    }
    
    div.formNugget__header{
        margin-bottom: 50px;

        p{
            font-size: 17px;
            line-height: 26px;
        }
    }

    div.faq{
        background: #fff;
        color: #666666;
    }

    div.faq__header{
        background: rgb(205, 0, 1);
        padding: 10px 20px;
        font-size: 17px;
        font-weight: 26px;
        color: #fff;
    }

    div.faq__caption{
        font-size: 15px;
        font-weight: 24px;
        padding:  20px;
    }

    div.faqs div{
        border-top: 1px solid rgb(222, 222, 222);
        padding: 10px 20px;
        color: #1a191d;
        font-size: 17px;
        line-height: 26px;
        font-weight: bold;
    }

    
`
export default ContactUs;
