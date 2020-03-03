import React from 'react';
import './label-content.styles.scss'

const LabelContent = (props) => (
    <div className="label-content">
        <small className="label">{props.label}</small>
        <p>{props.content}</p>
    </div>
)

export default LabelContent;