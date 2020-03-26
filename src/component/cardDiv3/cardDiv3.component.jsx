import React from 'react';
import './cardDiv3.styles.scss';

const CardDiv3 = (props) => (
    <div className="card-div-3">
        <h6>
            {props.smallTitle}
        </h6>
        <h3>
            {props.bigTitle}
        </h3>
        <h3 className="bold-title">
            {props.boldTitle}
        </h3>
        <div>
            {props.cardDiv}
        </div>
    </div>
)

export default CardDiv3;