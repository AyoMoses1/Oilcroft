import React from 'react'
import styled from 'styled-components'
import BlogPost from './BlogPost'


function BlogSub() {
  return (
    <Container>
        <BlogCaption>
            <div className='blog__flex'>
                <h2>What's Going On In Our Blog?</h2>
                <p>Contact our office for a free quote!</p>
                <div className='caption-hr'>
                    <span></span>
                </div>
            </div>
        </BlogCaption>
        <div className='blog__row container'>
            <BlogPost image = "images/oilcroft/oilcroft2.jpg" title="Assorted of milling tools" description="OilCroft energy is equipped with an assorted inventory of oilfield tools" id={1}/>
            <BlogPost image = "images/oilcroft/others/1.jpg" title="Life extension and integrity management" description="To proactively identify threats, design a mitigation plan" id={2}/>
            <BlogPost image = "/images/oilcroft/octg1.jfif" title="OCTG- Oil Country Tubular Goods" description="Our array of oil field tool rental is not limited to OCTG" id={3}/>
        </div>
    </Container>
  )
}

const Container = styled.div`
    margin-bottom: 50px;

    .blog__row{
        display: flex;
        flex-direction: column;

        @media only screen and (min-width: 600px){
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;

            >div{
                width: 48%;
                margin-bottom: 20px;
            }

            h3{
                font-size: 17px;
                line-height: 26px;
            }
        }
        @media only screen and (min-width: 1000px){
            flex-direction: row;
            flex-wrap: wrap;

            >div{
                width: 30%;
            }
        }
    }
`

const BlogCaption = styled.div`

    display: flex;
    justify-content: center;
    padding: 50px 0;

    .blog__flex{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        max-width: 80%;

        p{
            margin: 20px 0;
            font-size: 17px;
            line-height: 26px;
        }
    }
   
`
export default BlogSub