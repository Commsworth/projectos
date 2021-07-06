import React from "react";
import './div1.styles.scss';
import Bluecircle from '../../../asset/svg/titlecircle.svg'

const Div1 = (props) => (
    <div className="div1">
        <div className="large"> 
        {props.large}
        </div>
        <div className="div1--second">
            <div className="core">
                <h3>Core Values</h3>
                <img src={Bluecircle} alt="" srcset=""/>
                <p>Our core values define our personality and guides our relationship with staff, clients<br/>
                   and partners. These includes;</p>
                   <div className="list">
                       <ul>
                           <li>Customer Driven.</li>
                           <li>Value Centric</li>
                           <li>Detail Oriented</li>
                           <li>Quality of service</li>
                       </ul>
                       <ul>
                           <li>Customer Driven.</li>
                           <li>Value Centric</li>
                           <li>Detail Oriented</li>
                           <li>Quality of service</li>
                       </ul>
                   </div>
            </div>
            <div className="div1--second--small">
                {props.small1}
                {props.small2}
            </div>
        </div>
    </div>
)

export default Div1;
