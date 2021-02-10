import React from 'react';
import './licensingBlockRow.scss';
import tick from './images/tick.svg';
import plus from './images/plus.svg';
import x from './images/x.svg';

const LicensingBlockRow = ({text, option1, option2, background}) => {
    return (
        <div className="licensing-block-row" style={{background:background?background:''}}>
            <img src={plus} alt="plus" className="plus"/>
            <p>{text}</p>
            <img src={option1==="tick"?tick:x} alt="feature" className="option1"/>
            <img src={option2==="tick"?tick:x} alt="feature" className="option2"/>
        </div>
    );
};

export default LicensingBlockRow;