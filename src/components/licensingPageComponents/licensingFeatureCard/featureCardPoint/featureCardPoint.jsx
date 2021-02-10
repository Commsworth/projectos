import React from 'react';
import './featureCardPoint.scss';
import tick from '../../licensingBlockRow/images/tick.svg';
const FeatureCardPoint = ({text}) => {
    return (
        <section className="feature-card-point">
            <img src={tick} alt=""/>
            <p>{text}</p>
        </section>
    );
};

export default FeatureCardPoint;