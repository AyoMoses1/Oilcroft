import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function BlogPost(props) {

  return (
     
          <Blog className='blog__post'>
            <div className='post__image'>
                <img src={props.image} alt=""/>
            </div>
            <div className="post__details">
                <h3>{props.title}</h3>
                <hr/>
                <p>{props.description}{props.id}</p>
                <Link to = {`/blog`}>Read More</Link>
            </div>
          </Blog>
      
  );

}

const Blog = styled.div`
    padding-bottom: 20px;
    border: 1px solid rgb(237, 237, 237);
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    
    :hover{
        box-shadow: rgba(0, 0, 0, 0.15) 5.4px 5.4px 3.2px;
    }

    div.post__image{
        height: 50%;
    }

    div.post__details{
        margin: 20px 0;
        padding: 0 20px;
        height: 50%;
       
        p{
            margin-bottom: 20px;
        }
        a{
            color: #fff;
            font-size: 14px;
            line-height: 22px;
            font-weight: 600;
            display: inline-block;
            padding: 5px 20px;
            background: rgb(205, 0, 1); 
            transition: all 0.5s;        
        }

        a:hover{
            color: rgb(205, 0 , 1);
            background: #fff;
            border: 1px solid rgb(205, 0, 1);
            border-radius: 0 10px 0 10px;
            
        }
    }

    img{
        width: 100%;
        height: 100%;
    }

    h3{
        font-weight: 600;
        cursor: pointer;
        line-height: 26px;
        margin: 10px 0;
        color: rgb(26, 25, 29);
        
    }
    h3:hover{
        color: #cd0001;
        transition: 0.5s;
       
    }

    @media(max-width:768px){
        margin-bottom: 20px;
        padding-bottom: 50px;
    }
`
export default BlogPost;
