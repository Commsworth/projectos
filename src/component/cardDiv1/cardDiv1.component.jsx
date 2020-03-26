import React from 'react';
import './cardDiv1.styles.scss';

const CardDiv1 = (props) =>(
    <div className="card-div">
    <div className="div1">
        {props.one}
    </div>
    <div className="div2">
    <div className="card-div-medium">
    {props.two}
    </div>
    <div className="card-div-small">
    {props.three}
    {props.four}
    </div>
    </div>
    </div>
)

export default CardDiv1;