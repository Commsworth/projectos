import React from 'react'
import './div4.styles.scss'

const Div4 = (props) =>
    (
        <div className="div4">

        <div className="center">
            <h3>{props.Logo}</h3>
           <h3> {props.about}</h3>
           <h5>{props.name}</h5>
           <p>{props.position}</p>
        </div>

        </div>
    )

export default Div4;