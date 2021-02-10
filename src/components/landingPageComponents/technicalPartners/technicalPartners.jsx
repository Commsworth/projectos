import React from 'react';
import FeatureHeading from '../../extraPageComponents/featureHeading/featureHeading';
import './technicalPartners.scss'
import beniratio from './images/beniratio.svg';
import microsoft from './images/microsoft.svg';
import fortinet from './images/fortinet.svg';
import docker from './images/docker.svg';

const TechnicalPartners = () => {
    return (
        <section className="technical-partners">
            <FeatureHeading fontSize="18px" heading="Technical Partners" />
            <section className="technical-partners-img">
                <img src={microsoft} alt="" height="50px" />
                <img src={fortinet} alt="" height="50px" />
                <img src={docker} alt="" height="50px" />
                <img src={beniratio} alt="" height="50px" />
            </section>
            <section className="technical-partners-switch">
                <button className=""></button>
                <button className="active"></button>
            </section>
        </section>
    );
};

export default TechnicalPartners;