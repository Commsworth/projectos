import React from 'react'
import './contact.css'
import Nav from '../../component/header/navbar/NavBar'
import Footer from '../../component/footer/Footer'
import devop1 from '../contact/img/devop1.png'
import devop2 from '../contact/img/devop2.png'
import devop3 from '../contact/img/devop3.png'
import dpn from '../contact/img/dpn.png'
import cyber from '../contact/img/cyber.png'
import cloud from '../contact/img/cloud.png'
import appdev from '../contact/img/appdev.png'


function Contact() {
    return (
        <div>
            {/* <Nav /> */}
            <div className="tp">
                <div className="tp1">
                    <h1>DevOps & Analytics</h1>
                    <p>We are focused on developing data-oriented <br/>
                        applications tailored to solve a vast array of business <br/>
                        requiremenents while giving intuitive insights for <br/>
                        informed business decision making 
                    </p>
                </div>
                <div className="tp2">
                    <img src={devop1} className="devop1" alt="" />
                    <img src={devop2} className="devop2" alt="" />
                    <img src={devop3} className="devop3" alt="" />
                </div>
            </div>
            <div className="dpn"><img src={dpn} alt=""/></div>
            
            <div className="crd">
                <div className="crd1">
                    <h1>Cyber Security</h1>
                    <p>We implement network security solutions designed to <br/>
                       dynamically adapt to the evolving IT infrasture in<br/>
                       order to defend its rapidly changing attack surface.<br/>
                        Primary focus is given to the edge of the network as every<br/>
                        packet must be certified as non-malicious before entry to the network 
                    </p>
                    <a href=""><p>Work with us →</p></a>
                    </div>
                    <div className="crd2">
                        <img src={cyber} alt="" />
                    </div>
            </div>

            <div className="crd">
            <div className="crd2">
                        <img src={cloud} alt="" />
                    </div>
                <div className="crd1">
                    <h1>Cyber Security</h1>
                    <p>We implement network security solutions designed to <br/>
                       dynamically adapt to the evolving IT infrasture in<br/>
                       order to defend its rapidly changing attack surface.<br/>
                        Primary focus is given to the edge of the network as every<br/>
                        packet must be certified as non-malicious before entry to the network 
                    </p>
                    <a href=""><p>Work with us →</p></a>
                    </div>
                    
            </div>

            <div className="crd">
                <div className="crd1">
                    <h1>App Development</h1>
                    <p>We implement network security solutions designed to <br/>
                       dynamically adapt to the evolving IT infrasture in<br/>
                       order to defend its rapidly changing attack surface.<br/>
                        Primary focus is given to the edge of the network as every<br/>
                        packet must be certified as non-malicious before entry to the network 
                    </p>
                    <a href=""><p>Work with us →</p></a>
                    </div>
                    <div className="crd2">
                        <img src={appdev} alt="" />
                    </div>
            </div>

            {/* <Footer/> */}
        </div>
    )
}

export default Contact;
