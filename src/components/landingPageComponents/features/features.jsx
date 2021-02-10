import React from 'react';
import FeatureHeading from '../../extraPageComponents/featureHeading/featureHeading';
import Heading from '../../extraPageComponents/heading/heading';
import FeatureDescription from './featureDescription/featureDescription';
import './features.scss'
import SelectMenu from './selectMenu/selectMenu';

const Features = () => {
    return (
        <section className="features">
            <FeatureHeading heading="Features" fontSize="18px"/>
            <Heading heading="Solutions on Offer" color="#1B1B1B"/>
            <SelectMenu/>
            <FeatureDescription/>
        </section>
    );
};

export default Features;