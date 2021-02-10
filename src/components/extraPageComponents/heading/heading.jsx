import React, { Fragment } from 'react';
import './heading.scss';

const Heading = ({heading, subheading, color,fontSize}) => {
    return (
        <Fragment>
            <h1 className="top-heading" style={{color:color?`${color}`:'', fontSize:fontSize?`${fontSize}`:''}}>{heading}</h1>
            {subheading && <p className="top-subheading">{subheading}</p>}
        </Fragment>
    );
};

export default Heading;