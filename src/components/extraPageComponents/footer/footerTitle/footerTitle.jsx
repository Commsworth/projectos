import React from 'react';
import './footerTitle.scss';

const FooterTitle = ({text}) => {
    return (
        <div className="footer-title">
            <h3>{text}</h3>
        </div>
    );
};
export default FooterTitle;