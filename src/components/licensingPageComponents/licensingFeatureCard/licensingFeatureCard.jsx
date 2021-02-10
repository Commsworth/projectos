import React from 'react';
import Button from '../../extraPageComponents/Button/button';
import FeatureCardPoint from './featureCardPoint/featureCardPoint';
import './licensingFeatureCard.scss';

const LicensingFeatureCard = ({title, points}) => {
    return (
       <div className="licensing-feature-card">
           <h3>{title}</h3>
           {points.map(each=>{
               return <FeatureCardPoint text={each}/>
           })}
           <Button text="Contact Us"/>
           <a href> Learn more</a>
       </div> 
    );
};

export default LicensingFeatureCard;