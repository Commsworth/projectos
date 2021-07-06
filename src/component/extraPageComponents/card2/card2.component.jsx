import React from 'react';
import './card2.styles.scss';

const Card2 = (props) =>(
    <div className="card" style={{backgroundImage: "url(" + props.background + ")",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}    >
        <h3>
            {props.title}
        </h3>
        <p>
            {props.content}
        </p>
        <a href="#">
            {props.link}
        </a>
    </div>
)

export default Card2;