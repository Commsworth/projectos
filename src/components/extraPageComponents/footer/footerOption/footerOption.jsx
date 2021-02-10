import React from 'react';
import './footerOption.scss';

const FooterOption = ({text, link}) => {
    return (
        <div className="footer-option">
            <p>{text}</p>
        </div>
    );
};

export default FooterOption;