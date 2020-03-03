import React from 'react';
import './button.styles.scss';

const Button =(props)=>(
    <div className="button-div">
        <button className={`${props.color}`}>
            {props.text}
        </button>
    </div>
)

export default Button;