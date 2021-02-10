import React from 'react';
import './aboutCard.scss';

const AboutCard = ({image,title,content}) => {
    return (
        <article className="about-card">
            <img src={image} alt="image"/>
            <h5>{title}</h5>
            <p>{content}</p>
        </article>
    );
};

export default AboutCard;