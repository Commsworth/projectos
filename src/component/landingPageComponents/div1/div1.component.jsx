import React from "react";
import './div1.styles.scss';

const Div1 = (props) => (
    <div className="div1">
        <div className="div1--first">
            {props.large}
        </div>
        <div className="div1--second">
            {props.medium}
        </div>
        <div className="div1--second--small">
            {props.small1}
            {props.small2}
        </div>
    </div>
)

export default Div1;
