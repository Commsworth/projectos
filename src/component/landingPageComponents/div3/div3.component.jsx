import React from 'react';
import './div3.styles.scss';

const Div3 = (props) => (
    <div className="div3">
        <div className="div3-title">
        <h6 className="title">{props.smallTitle}</h6>
        <h3 className="title">{props.normalTitle}</h3>
        <h3 className="bold-title title">{props.boldTitle}</h3>
        </div>
        <div className="div3-flex">
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