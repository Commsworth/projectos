import React from 'react'
import './div4.styles.scss'

const Div4 = (props) =>
    (
        <div className="div4">
        <button>a</button>
        <button>a</button>
        <button>a</button>
        <button>a</button>
        <button>a</button>
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