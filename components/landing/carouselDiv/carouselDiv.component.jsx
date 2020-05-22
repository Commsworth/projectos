import React, { Component } from 'react'
import Card from '../../extra/card/card.component';
import './carouselDiv.styles.scss';
import ArrowLink from '../../extra/arrow';

const options = [
    {
        img: "/static/assets/png/featuredImage.png",
        title: "NextGen App Performance Monitoring (APM) delivered through Dynatrace",
        content: "Commsworth Partners with Dynatrace to provide an AI-Powered, All-in-one platform to monitor, optimize and scale your applications autonomously with Zero-touch configuration across all stacks on any cloud.",
        index: 0,
    },
    {
        img: "/static/assets/png/featuredImage.png",
        title: "Yes",
        content: "Commsworth Partners with Dynatrace to provide an AI-Powered, All-in-one platform to monitor, optimize and scale your applications autonomously with Zero-touch configuration across all stacks on any cloud.",
        index: 1,
    }
]

export default class CarouselDiv extends Component {

    constructor(props) {
        super(props);

        this.state = {
            img: "",
            title: "",
            content: "",
            index: 0,
        }
    }


    componentDidMount() {
        this.setState(options[0])
    }

    setOptionRight=()=>{
        if(options[this.state.index + 1]){
            this.setState(options[this.state.index + 1])
        }
        else{
            this.setState(options[0])
        }
    }
    setOptionLeft=()=>{
        if(options[this.state.index - 1]){
            this.setState(options[this.state.index - 1])
        }
        else{
            this.setState(options[options.length-1])
        }
    }




    render() {
        return (
            <div className="carousel-div">
                <button id="left-button" onClick={this.setOptionLeft}>{this.props.leftArrow}</button>
                <div className="carousel-grid">
                    <Card title="" content={<img />} background={this.state.img} />
                    <Card title={this.state.title} subTitle={this.props.blueSemiCircle} content={this.state.content} link={<ArrowLink text="Read More"/>} />
                </div>
                <button id="right-button" onClick={this.setOptionRight}>{this.props.rightArrow}</button>
            </div>
        );
    }
}