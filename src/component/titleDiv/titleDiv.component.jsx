import React from 'react';
import BlueLine from '../../asset/svg/titleLine.svg'
import './titleDiv.styles.scss';

const TitleDiv = (props) => (
    <div className="title-div">
        <h3><img src={BlueLine} alt="Blue line"/> {props.title}</h3>
        <p>{props.subTitle}</p>
    </div>
)

export default TitleDiv;

