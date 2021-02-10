import React from 'react';
import './aboutScreenCard.scss';

const AboutScreenCard = ({ title, content }) => {
    return (
        <article className="about-screen-card">
            <h5>{title}</h5>
            <p>{content}</p>
        </article>
    );
};
export default AboutScreenCard;