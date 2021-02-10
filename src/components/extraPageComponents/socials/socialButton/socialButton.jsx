import React from 'react';
import './socialButton.scss';

const SocialButton = ({image}) => {
    return (
        <div className="social-button">
            <a href>
                <img src={image} alt=""/>
            </a>
        </div>
    );
};

export default SocialButton;