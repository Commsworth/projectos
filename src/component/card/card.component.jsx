import React from 'react';
import './card.styles.scss';

const Card = (props) =>(
    <div className="card">
        <h3>
            {props.title}
        </h3>
        <h3>
            {props.subTitle}
        </h3>
        <p>
            {props.content}
        </p>
        <a href="#">
            {props.link}
        </a>
    </div>
)

export default Card;