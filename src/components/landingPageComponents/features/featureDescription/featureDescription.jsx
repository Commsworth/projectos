import React from 'react';
import Screen from '../../screen/screen';
import FeatureDescriptionBlock from './featureDescriptionBlock/featureDescriptionBlock';
import FeatureDescriptionTitle from './featureDescriptionTitle/featureDescriptionTitle';
import svg1 from './images/svg1.svg';
import svg2 from './images/svg2.svg';
import svg3 from './images/svg3.svg';
import './featureDescription.scss';

const FeatureDescription = () => {
    return (
        <div className="feature-description">
            <section>
            <FeatureDescriptionTitle title={`We handle budget tracking`}/>
            <FeatureDescriptionBlock title="Unified Project Tracking" description="The project management system unifies every aspect required to execute projects into one single glass pane." image={svg1}/>
            <FeatureDescriptionBlock title="Seamless Navigation" description="The intuitive navigation allows for easy sorting, filtering and search for projects." image={svg2}/>
            <FeatureDescriptionBlock title="Detail View" description="Collectively view all granular details about projects in real time from multiple data sources" image={svg3}/>
            </section>
            <section className="feature-description-screen">
                <Screen/>
            </section>
        </div>
    );
};

export default FeatureDescription;