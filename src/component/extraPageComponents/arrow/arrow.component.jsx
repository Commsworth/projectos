import React from 'react';
import './arrow.styles.scss';

const Arrow = (props) => (
    <div className="arrow-div">
        <div>
        <h3>{props.text}</h3>
        </div>
    <div className={`arrow ${props.className}`}>
        <div className="line"></div>
        <div className="point"></div>
    </div>
    </div>
)

export default Arrow;