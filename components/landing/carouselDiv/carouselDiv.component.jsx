import React, { Component } from 'react'
import Card from '../../extra/card/card.component';
// import './carouselDiv.styles.scss';
import ArrowLink from '../../extra/arrow';

const options = [
    {
        img: "/pngs/featuredImage.png",
        title: "NextGen App Performance Monitoring (APM) delivered through Dynatrace",
        content: "Commsworth Partners with Dynatrace to provide an AI-Powered, All-in-one platform to monitor, optimize and scale your applications autonomously with Zero-touch configuration across all stacks on any cloud.",
        index: 0,
    },
    {
        img: "/pngs/featuredImage2.png",
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
                        <Card background={this.state.img} />
                        <Card title={this.state.title} subTitle={this.props.blueSemiCircle} content={this.state.content} link={<ArrowLink text="Read More" />} />
                    </div>
                    <button id="right-button" onClick={this.setOptionRight}>{this.props.rightArrow}</button>
                </div>
                <div className='carousel-opt'>


                    <svg className={`${this.state.index ? ' ' : 'svg'} svg-margin`} onClick={() => { this.setState(options[0]) }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                    </svg>
                    <svg className={`${this.state.index ? 'svg' : ''} svg-margin`} onClick={() => { this.setState(options[1]) }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            }
            .svg-margin{
                margin: 5px;
                cursor: pointer;
            }
            .carousel-div {
            display: flex;
            justify-content: center  ;
            // cursor: pointer;
            align-items: center;
            margin: 0vh 5vw;
            width: 90vw;
            }

            .carousel-grid {
            //display: grid;
            //grid-template-columns: 1fr 1fr !important;
            //gap: 65px;
            display: flex;
            justify-content: center;
            //flex-wrap: wrap;
            width: 70vw;
            margin: 0 auto;
            }
            .carousel-grid :global(.card:first-of-type) {
                width: 591px;
                height: 387px;
                margin: 0px 1vw;
            }
            .carousel-grid :global(.card) {
                margin: 0px 1vw;
                height: 500px;
                width: 452px;
                //padding: 20px;
                justify-content: center;
            }
            .carousel-grid :global(.card .title) {
                width: 428px;
                font-weight: bold;
                font-size: 24px;
                line-height: 150%;
            }
            .carousel-grid :global(.card p) {
                width: 452px;
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
            position: sticky;
            }

            #right-button {
            position: sticky;
            background: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            height: 31px;
            width: 18px;
            padding: 0;
        }
@media screen and (max-width: 990px) {

        .carousel-grid{
            display: flex;
            flex-direction: column;
        }
        .svg-margin{
            //display: none !important;
        }
}
@media screen and (max-width: 570px) {

        .carousel-grid{
            display: flex;
            flex-direction: column;
        }
        .carousel-grid :global(.card p),.carousel-grid :global(.card .title),.carousel-grid :global(.card .link),.carousel-grid :global(.card:first-of-type),.carousel-grid :global(.card .sub-title),.carousel-grid :global(.card){
            width: 100%;
            min-width:220px;
            margin: 0px auto;
            height: fit-content;
        }
        .carousel-grid :global(.card:first-of-type){
            height:200px !important;
        }
            #right-button {
                display:none;
            }
            #left-button {
                display:none;
            }
}

                `}

                </style>
            </React.Fragment>

        );
    }
}