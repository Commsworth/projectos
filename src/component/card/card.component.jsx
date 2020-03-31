import React from 'react';
import './card.styles.scss';

const Card = (props) => (
    <div className="card" className="card" style={{backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + props.background + ")",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
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
            <p>
                {props.link}
            </p>
        </a>
    </div>
)

export default Card;