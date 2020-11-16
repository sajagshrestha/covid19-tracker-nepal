import React from 'react';
import {DistrictCardWrapper} from './Card.styles';

const DistrictCard = (props) =>{
    return(
        <DistrictCardWrapper type={props.type} justify={props.justify}>
            <div className="district-name">{props.name}</div>
            <div className='data'>{props.data}</div>
            <div className="new-">New cases</div>
        </DistrictCardWrapper>
    )
}

export default DistrictCard;