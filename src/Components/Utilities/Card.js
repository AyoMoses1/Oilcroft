import React from 'react';
import { Link } from 'react-router-dom';


function Card(props) {

    return(
        <div className='card'>
            <span><i class={props.icon}></i></span>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <Link to ="/services" className='card-btn'>READ MORE </Link>
        </div>
    )

}



export default Card;
