import React from 'react';
import arrow from '../../../asset/img/arrow.png';
import './arrow.styles.scss';

const Arrow = (props) => (
    <div className="arrow-div">
        <div>
        <p>{props.text}</p>
        </div>
    <div className={`arrow`}>
        <img src={arrow} alt="arrow"/>
    </div>
    </div>
)

export default Arrow;