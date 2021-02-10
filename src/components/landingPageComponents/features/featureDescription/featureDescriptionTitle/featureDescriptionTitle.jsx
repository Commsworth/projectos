import React from 'react';
import './featureDescriptionTitle.scss';
import featureLine from '../images/featureLine.svg'

const FeatureDescriptionTitle = ({title}) => {
    return (
        <section className="feature-description-title">
            <h1>{title}</h1>
            <img src={featureLine} alt=""/>
        </section>
    );
};

export default FeatureDescriptionTitle;