import React from 'react'
import './contact.css'
import Nav from '../../component/extraPageComponents/header/navbar/NavBar'
import Footer from '../../component/extraPageComponents/footer/Footer'
import devop1 from '../contact/img/devop1.png'
import devop2 from '../contact/img/devop2.png'
import devop3 from '../contact/img/devop3.png'
import dpn from '../contact/img/dpn.png'
import cyber from '../contact/img/cyber.png'
import cloud from '../contact/img/cloud.png'
import appdev from '../contact/img/appdev.png'
import analytics from '../../asset/svg/analytics.svg';


class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="explore">
                {/* <Nav /> */}
                <div className="tp">
                    <div className="tp1">
                        <h1>
                            {this.props.title1}
                        </h1>
                        <p>
                            {this.props.content1}
                        </p>
                        {/* <h1>DevOps & Analytics</h1>
                    <p>We are focused on developing data-oriented <br/>
                        applications tailored to solve a vast array of business <br/>
                        requiremenents while giving intuitive insights for <br/>
                        informed business decision making 
                    </p> */}
                    </div>
                    <div className="tp2">
                        <img src={this.props.image1} alt="" />
                    </div>
                </div>
                <div className="dpn"><img src={dpn} alt="" /></div>

                <div className="crda">
                    <div className="crd1">
                        <h1>
                            {this.props.title2}
                        </h1>
                        <p>
                            {this.props.content2}
                        </p>

                        {/* <h1>Cyber Security</h1>
                    <p>We implement network security solutions designed to <br/>
                       dynamically adapt to the evolving IT infrasture in<br/>
                       order to defend its rapidly changing attack surface.<br/>
                        Primary focus is given to the edge of the network as every<br/>
                        packet must be certified as non-malicious before entry to the network 
                    </p> */}
                        <a href=""><p>Work with us →</p></a>
                    </div>
                    <div className="crd2">
                        <img src={this.props.image2} alt="" />
                    </div>
                </div>

                <div className="crdb">
                    <div className="crd2">
                        <img src={this.props.image3} alt="" />
                    </div>
                    <div className="crd1">

                        <h1>
                            {this.props.title3}
                        </h1>
                        <p>
                            {this.props.content3}
                        </p>
                        {/* <h1>Cyber Security</h1>
                    <p>We implement network security solutions designed to <br/>
                       dynamically adapt to the evolving IT infrasture in<br/>
                       order to defend its rapidly changing attack surface.<br/>
                        Primary focus is given to the edge of the network as every<br/>
                        packet must be certified as non-malicious before entry to the network 
                    </p> */}
                        <a href=""><p>Work with us →</p></a>
                    </div>

                </div>

                <div className="crda">
                    <div className="crd1">
                        <h1>
                            {this.props.title4}
                        </h1>
                        <p>
                            {this.props.content4}
                        </p>
                        {/* <h1>App Development</h1>
                    <p>We implement network security solutions designed to <br />
                       dynamically adapt to the evolving IT infrasture in<br />
                       order to defend its rapidly changing attack surface.<br />
                        Primary focus is given to the edge of the network as every<br />
                        packet must be certified as non-malicious before entry to the network
                    </p> */}
                        <a href=""><p>Work with us →</p></a>
                    </div>
                    <div className="crd2">
                        <img src={this.props.image4} alt="" />
                    </div>
                </div>

                {/* <Footer/> */}
            </div>
        )
    }
}

export default Contact;
