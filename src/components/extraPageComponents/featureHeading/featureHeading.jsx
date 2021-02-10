import React, { Fragment } from 'react';
import './featureHeading.scss';

const FeatureHeading = ({heading, fontSize}) => {
    return (
        <Fragment>
            <h6 className="feature-heading" style={{fontSize:`${fontSize}`}}>
                {heading}
            </h6>
        </Fragment>
    );
};

export default FeatureHeading;