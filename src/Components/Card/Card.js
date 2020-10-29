import React from 'react';
import {CardBody} from './Card.styles'

const Card = (props) =>{
    return(
        
        <CardBody type = {props.type}>
            <div className="logo">
            <img src={props.icon} alt ="" height="30px" width="30px"/>
            </div>
            <div className="data-section">
                <div className="data">{props.data}</div>
                <div className="name">{props.name}</div>
            </div>          
        </CardBody>
    )
}

export default Card;

