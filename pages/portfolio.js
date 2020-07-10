import React, { Component } from 'react';
import Card from '../components/extra/card/card.component';
//import { oneScreen, blueSemiCircle } from '../static/assets/svgs';
import '../scss/portfolio.styles.scss';
import ImageCard from '../components/extra/imageCard/imageCard.component';
import ArrowLink from '../components/extra/arrow';
import Socials from '../components/extra/socials/socials.component';
// import imageCard from '../components/extra/imageCard/imageCard.component';

export default class ContactPage extends Component {
    render() {
        return (
            
            <div className=" container">
                <div className="contact-card-main" id="contact-heading">
                    <Card title="We build"
                        subIcon="digital products"
                        content="We are focused on developing data-oriented applications tailored to solve a vast array of business requirements."
                        link="" />
                    <ImageCard image="pngs/SIWP.png" />
                </div>
                <div className="contact-card-div">
                    <Card title="SIWP"
                        subIcon="/static/svg/semi-circle.svg"
                        content="We implement network security solutions designed to dynamically adapt to the evolving IT Infrastructure in order to defend its rapidly changing attack surface. Primary focus is given to the edge of the network as every packet must be certified as non-malicious before entry to the network. "
                        link={<ArrowLink text="Visit Web App"/>}/>
                    <ImageCard image="pngs/SIWP.png" />

                </div>

                <div className="contact-card-div reverse">

                    <Card title="ProjectOS"
                        subIcon="/static/svg/semi-circle.svg"
                        content="We implement network security solutions designed to dynamically adapt to the evolving IT Infrastructure in order to defend its rapidly changing attack surface. Primary focus is given to the edge of the network as every packet must be certified as non-malicious before entry to the network. "
                        link={<ArrowLink text="Visit Web App"/>} />
                    <ImageCard image="pngs/SIWP.png" />
                </div>

                <div className="contact-card-div">
                    <Card title="MealStock"
                        subIcon="/static/svg/semi-circle.svg"
                        content="We implement network security solutions designed to dynamically adapt to the evolving IT Infrastructure in order to defend its rapidly changing attack surface. Primary focus is given to the edge of the network as every packet must be certified as non-malicious before entry to the network. "
                        link={<ArrowLink text="Visit Web App"/>} />
                    <ImageCard image="pngs/SIWP.png" />
                </div>
                    <Socials/>
            </div>
        );
    }
}