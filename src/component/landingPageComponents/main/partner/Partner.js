import React, { Fragment} from 'react';
import Microsoft from '../../../asset/svg/microsoft.svg';
import Fortinet from '../../../asset/img/Fortinet.png';
import Docker from '../../../asset/img/docker.png';
import BeniRatio from '../../../asset/img/beniratio.png';
import './Partner.css';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


const Partner = () =>{

    

    return(
        <Fragment>
       <div className="space-50"></div>
       <div className="container">
       <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
       <div className="row">
                <div className="col s12 m12 center">
                    <h5 className="blue-text">Technical Partners</h5>
                </div>
            </div>
           </ScrollAnimation>
           <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={100}>
            <div className="row">
                <div className="col s12 m12">
                    <div className="icon-wrapper">
                        <div className="icon-item">
                            <img src={Microsoft} className=""  alt="" />
                        </div>
                        <div className="icon-item">
                            <img src={Fortinet} className="" alt="" />
                        </div>
                        <div className="icon-item">
                            <img src={Docker} className="" alt="" />
                        </div>
                        <div className="icon-item">
                            <img src={BeniRatio} className="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </ScrollAnimation>
            </div>
            
        </Fragment>
    )
}

export default Partner;