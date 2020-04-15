import React from 'react';
import './div3.styles.scss';

const Div3 = (props) => (
    <div className="div3">
        <div>
        <div className="div3-title">
        <h6>{props.smallTitle}</h6>
        <h3>{props.normalTitle}</h3>
        <h3 className="bold-title">{props.boldTitle}</h3>
        </div>
        <div className="div3-grid">
            {props.one}
            {props.two}
            {props.three}
            {props.four}
        </div>
        </div>

    </div>
)

export default Div3;