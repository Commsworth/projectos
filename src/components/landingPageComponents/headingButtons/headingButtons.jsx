import React from 'react';
import Button from '../../extraPageComponents/Button/button';
import './headingButtons.scss';

const HeadingButtons = () => {
    return (
        <section className="heading-buttons">
        <Button width="171.74px" height="46.21px" fontSize="12px" text="Request Demo" />
        <Button width="171.74px" height="46.21px" fontSize="12px" text="Learn More" secondary /> 
        </section>
    );
};

export default HeadingButtons;