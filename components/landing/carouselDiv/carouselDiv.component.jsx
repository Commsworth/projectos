import React, { Component } from 'react'
import Card from '../../extra/card/card.component';
// import './carouselDiv.styles.scss';
import ArrowLink from '../../extra/arrow';

const options = [
    {
        img: "/static/assets/png/featuredImage.png",
        title: "NextGen App Performance Monitoring (APM) delivered through Dynatrace",
        content: "Commsworth Partners with Dynatrace to provide an AI-Powered, All-in-one platform to monitor, optimize and scale your applications autonomously with Zero-touch configuration across all stacks on any cloud.",
        index: 0,
    },
    {
        img: "/static/assets/png/featuredImage2.png",
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

    setOptionRight = () => {
        if (options[this.state.index + 1]) {
            this.setState(options[this.state.index + 1])
        }
        else {
            this.setState(options[0])
        }
    }
    setOptionLeft = () => {
        if (options[this.state.index - 1]) {
            this.setState(options[this.state.index - 1])
        }
        else {
            this.setState(options[options.length - 1])
        }
    }




    render() {
        return (
            <React.Fragment>
                <div className="carousel-div">
                    <button id="left-button" onClick={this.setOptionLeft}>{this.props.leftArrow}</button>
                    <div className="carousel-grid">
                        <Card title="" content={<img />} background={this.state.img} />
                        <Card title={this.state.title} subTitle={this.props.blueSemiCircle} content={this.state.content} link={<ArrowLink text="Read More" />} />
                    </div>
                    <button id="right-button" onClick={this.setOptionRight}>{this.props.rightArrow}</button>
                </div>
                <div className='carousel-opt'>


                    <svg className={this.state.index ? ' ' : 'svg'} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                    </svg>
                    <svg className={this.state.index ? 'svg' : ' '} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                    </svg>
                </div>
                <style jsx>{`
            .carousel-opt{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px 0px 10px 0px;
            }
            .svg{
                fill: #208FFF;
                margin: 5px;
            }
            .carousel-div {
            display: flex;
            justify-content: center;
            // cursor: pointer;
            align-items: center;
            margin: 0vh 1vw;
            }

            .carousel-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
            gap: 9px;
            width: 80vw;
            margin: 0vh 9vw;
            }
            .carousel-grid :global(.card) {
            height: 500px;
            padding: 20px;
            justify-content: center;
            }
            .carousel-grid :global(.card p) {
                font-size: 16px;
                line-height: 197.5%;
                letter-spacing: 0.01em;
                margin: 0;
            }
            .carousel-grid :global(.card .link) {
                font-weight: bold;
                font-size: 24px;
                line-height: 109%;
                margin: 0;
                margin-top: 34px !important;
            }
            #left-button {
            background: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            height: 31px;
            width: 18px;
            padding: 0;
            }

            #right-button {
            background: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            height: 31px;
            width: 18px;
            padding: 0;
        }

                `}

                </style>
            </React.Fragment>

        );
    }
}