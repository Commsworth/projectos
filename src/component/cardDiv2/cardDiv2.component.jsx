import React from 'react';
import './cardDiv2.styles.scss';

const CardDiv2 = (props) =>(
    <div className={`card-div-2-${props.style}`}>
        {props.one}
        {props.two}
        {props.three}
        {props.four}
        {props.five}
        {props.six}
    </div>
)

export default CardDiv2;