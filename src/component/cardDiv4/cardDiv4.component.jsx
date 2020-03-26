import React from 'react';
import './cardDiv4.styles.scss';

const CardDiv4 =(props)=>(
    <div className="card-div-4">
        <h3>
            {props.title}
        </h3>
        <p>
            {props.content}
        </p>
        <p>
            {props.end1}
        </p>
        <small>
            {props.end2}
        </small>
    </div>
)

export default CardDiv4;