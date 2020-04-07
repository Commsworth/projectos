import React from 'react'
import './div4.styles.scss'
import pf1 from '../../../asset/img/pf/Ellipse 16.png'
import pf2 from '../../../asset/img/pf/Ellipse 17.png'
import pf3 from '../../../asset/img/pf/Ellipse 18.png'
import pf4 from '../../../asset/img/pf/Ellipse 19.png'
import pf5 from '../../../asset/img/pf/Ellipse 20.png'



const Div4 = (props) =>
    (
        <div className="div4">
        <img src={pf1} alt="" className="pf1"/>
        <img src={pf2} alt="" className="pf2"/>
        <img src={pf3} alt="" className="pf3"/>
        <img src={pf4} alt="" className="pf4"/>
        <img src={pf4} alt="" className="pf5"/>
        <div className="center">
            <h3>{props.Logo}</h3>
           <h3> {props.about}</h3>
           <p>{props.mission}</p>
           <h5>{props.name}</h5>
           <p>{props.position}</p>
        </div>

        </div>
    )

export default Div4;