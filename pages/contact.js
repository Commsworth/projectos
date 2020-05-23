import React, { Component } from 'react';
import Card from '../components/extra/card/card.component';
import { oneScreen, blueSemiCircle } from '../static/assets/svgs';

export default class ContactPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="contact-card-main" id="contact-heading">
                    <Card title="We build"
                        subTitle="digital products"
                        content="We are focused on developing data-oriented applications tailored to solve a vast array of business requirements."
                        link="" />
                    <Card
                        title={<img src='/static/assets/png/SIWP.png' />}
                        link="" />
                </div>

                <div className="contact-card-div">
                    <Card title="SIWP"
                        subTitle={blueSemiCircle}
                        content="We implement network security solutions designed to dynamically adapt to the evolving IT Infrastructure in order to defend its rapidly changing attack surface. Primary focus is given to the edge of the network as every packet must be certified as non-malicious before entry to the network. "
                        link="" />
                    <Card
                        subTitle=""
                        title={<img src='/static/assets/png/SIWP.png' />}
                        link="" />
                </div>

                <div className="contact-card-div">
                    <Card
                        subTitle=""
                        title={<img src='/static/assets/png/SIWP.png' />}
                        link="" />
                    <Card title="ProjectOS"
                        subTitle={blueSemiCircle}
                        content="We implement network security solutions designed to dynamically adapt to the evolving IT Infrastructure in order to defend its rapidly changing attack surface. Primary focus is given to the edge of the network as every packet must be certified as non-malicious before entry to the network. "
                        link="" />
                </div>

                <div className="contact-card-div">
                    <Card title="MealStock"
                        subTitle={blueSemiCircle}
                        content="We implement network security solutions designed to dynamically adapt to the evolving IT Infrastructure in order to defend its rapidly changing attack surface. Primary focus is given to the edge of the network as every packet must be certified as non-malicious before entry to the network. "
                        link="" />
                    <Card
                        subTitle=""
                        title={<img src='/static/assets/png/SIWP.png' />}
                        link="" />
                </div>

                <style jsx>{`
                    .contact-card-div{
                    display: flex;
                    flex-wrap: wrap;                        
                    color: black !important;
                    background: #ffffff;
                    width: 80vw;
                    padding-left: 20vw;                        
                    }
                    .contact-card-main{
                    display: flex;
                    flex-wrap: wrap;
                    width: 80vw;
                    margin-left: 20vw;
                    }
                    .contact-card-main :global(.card){
                    width: 40%;
                    min-width: 400px;
                    justify-content: center;
                    height: 450px;                        
                    }
                    .contact-card-div :global(.card){
                        width: 40%;
                    min-width: 400px;
                    color: #000000 !important;
                    justify-content: center;
                    height: 450px;                        
                    }
                    .contact-card-div :global(.card img){
                        min-width: 600px;
                        box-shadow: 0px 0px 5px 0px;
                    }
                    .contact-card-main :global(.card img){
                        min-width: 600px;
                        box-shadow: 0px 0px 1px 0px;
                    }
                    .container{
                    color: black !important
                    }
                    #contact-heading{
                        padding-top: 200px;
                    }
                    `}
                </style>
            </div>
        );
    }
}