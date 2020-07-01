import React, { Component } from 'react'
import Card from '../extra/card/card.component';
import './carouselexp.scss';
import ArrowLink from '../extra/arrow';
import {blueSemiCircle} from '../../static/assets/svgs'

const options = [
    {
         img: "/static/subexplore/img1.svg",
        title: "Ultra-Responsive Apps",
        content: "We deploy blazing fast, low-code web and mobile apps and websites powered by robust business logic engines tailored to address key business challenges. Our mobile-first approach ensures a responsive user experience as today’s consumers are driven by convenient yet immersive digital interactions.",
        index: 0,
    },
    {
         img: "/static/assets/png/featuredImage.png",
        title: "NextGen App Performance Monitoring (APM) delivered through Dynatrace",
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
                <React.Fragment>
                    <div className="explore-cau">
                <div className="carousel-div">
               
                <div className="carousel-grid">
                    <Card title="" content={<img />} background={this.state.img} />
                    <Card title={this.state.title} subTitle={blueSemiCircle} content={this.state.content} link={<ArrowLink text="Work with us"/>} />
                </div>
             
            </div>
            
            <div className='carousel-opt'>
        
            <svg onClick={this.setOptionLeft} className={this.state.index?' ':'svg'} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
            </svg>
                    <svg onClick={this.setOptionRight} className={this.state.index ? 'svg' : ' '} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
            </svg>
            </div>
            </div>
            </React.Fragment>

        );
    }
}