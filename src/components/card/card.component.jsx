import React from 'react';
import './card.styles.scss';

const Card = (props) => (
    <article>
    <div className={`card-container ${props.className}`} >
        {props.display}
    </div>
    </article>
)

export default Card;