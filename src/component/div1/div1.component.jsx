import React from "react";
import './div1.styles.scss';

const Div1 = (props) => (
    <div className="div1">
        <div>
        {props.large}
        </div>
        <div className="div1--second">
            {props.medium}
            <div className="div1--second--small">
                {props.small1}
                {props.small2}
            </div>
        </div>
    </div>
)

export default Div1;
