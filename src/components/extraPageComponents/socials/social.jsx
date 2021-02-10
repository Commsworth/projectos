import React from 'react';
import './social.scss';
import SocialButton from './socialButton/socialButton';
import facebook from './images/facebook.svg';
import twitter from './images/twitter.svg';
import linkedin from './images/linkedin.svg';

const Social = () => {
    return (
        <div className="social">
            <section className="social-left">
                <p>Follow us on:</p>
                <SocialButton image={facebook}/>
                <SocialButton image={twitter}/>
                <SocialButton image={linkedin}/>
            </section>
            <section className="social-right">
                <p>Share on:</p>
                <SocialButton image={facebook}/>
                <SocialButton image={twitter}/>
                <SocialButton image={linkedin}/>
            </section>
        </div>        
    );
};

export default Social;