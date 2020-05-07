import React from 'react'
import './why.css'
import exp from '../why/img/exp.png'
import big from '../why/img/big.png'
import pig from '../why/img/pig.png'
import sup from '../why/img/sup.png'

function Why() {
    return (
        <div className="center-div">
        <h1 className="h1">Why Choose Us?</h1>
        <div className="why">
            <div className="why0">
                <div className="why1">
                <div className="bkg"><img src={pig} alt="" /></div>
                <div>
                    <h4>Affordables Services</h4>
                    <p>Lorem ipsum dolor sit arret, consectetur adipiscing elit. Egit <br/>
                        scelerisque cursbitur nunc nulla sem. Libero suspendisse.
                    </p>
                </div>
                </div>

                <div className="why1">
                <div className="bkg"><img src={sup} alt="" /></div>
                <div className="text">
                    <h4>Great Support</h4>
                    <p>Lorem ipsum dolor sit arret, consectetur adipiscing elit. Egit <br/>
                        scelerisque cursbitur nunc nulla sem. Libero suspendisse.
                    </p>
                </div>
                </div>

                <div className="why1">
                <div className="bkg"><img src={exp} alt="" /></div>
                <div>
                    <h4>Experienced Heads</h4>
                    <p>Lorem ipsum dolor sit arret, consectetur adipiscing elit. Egit <br/>
                        scelerisque cursbitur nunc nulla sem. Libero suspendisse.
                    </p>
                </div>
                </div>
            </div>

            <div className="why2">
            <img src={big} alt=""/>
            </div>
        </div>
        </div>
    )
}

export default Why;
