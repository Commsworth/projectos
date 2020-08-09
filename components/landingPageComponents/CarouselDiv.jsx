import React, { Component } from 'react'
import Card from '../extraPageComponents/Card';
// import './carouselDiv.styles.scss';
import ArrowLink from '../extraPageComponents/ArrowLink';

const options = [
    {
        img: "/landingPageImages/pngs/featuredImage.png",
        title: "NextGen App Performance Monitoring (APM) delivered through Dynatrace",
        content: "Commsworth Partners with Dynatrace to provide an AI-Powered, All-in-one platform to monitor, optimize and scale your applications autonomously with Zero-touch configuration across all stacks on any cloud.",
        index: 0,
        link: "/services"
    },
    {
        img: "/pngs/featuredImage2.png",
        title: "Yes",
        content: "Commsworth Partners with Dynatrace to provide an AI-Powered, All-in-one platform to monitor, optimize and scale your applications autonomously with Zero-touch configuration across all stacks on any cloud.",
        index: 1,
        link: "/ctap"
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
            link: ""
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
                <div className="carousel-div-main">
                    <div className="carousel-div">
                        <button id="left-button" onClick={this.setOptionLeft}><img src="/landingPageImages/svgs/arrows/left-arrow.svg" alt="" /></button>
                        <div className="carousel-grid">
                            <Card background={this.state.img} content={
                                <div className="carousel-grid-image">
                                    <button id="inner-left-button" onClick={this.setOptionLeft}><img src="/landingPageImages/svgs/arrows/left-arrow.svg" alt="" /> </button>
                                    <button id="inner-right-button" onClick={this.setOptionRight}><img src="/landingPageImages/svgs/arrows/right-arrow.svg" alt="" /></button>
                                </div>
                            } />
                            <Card title={this.state.title} subIcon="/landingPageImages/pngs/icons/bluesemicircle.png" content={this.state.content} href="/services" link={<ArrowLink href={this.state.link} text="Read More" />} />
                        </div>
                        <button id="right-button" onClick={this.setOptionRight}><img src="/landingPageImages/svgs/arrows/right-arrow.svg" alt="" /></button>
                    </div>
                    <div className='carousel-opt'>


                        <svg className={`${this.state.index ? ' ' : 'svg'} svg-margin`} onClick={() => { this.setState(options[0]) }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                        </svg>
                        <svg className={`${this.state.index ? 'svg' : ''} svg-margin`} onClick={() => { this.setState(options[1]) }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                        </svg>
                    </div>
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
            .carousel-div-main {
            margin: 10px auto 81px;
            }
            .carousel-div {
            display: flex;
            justify-content: center  ;
            // cursor: pointer;
            align-items: center;
            width: 90vw;
            margin: 5vh auto;
            }

            .carousel-grid {
            display: flex;
            justify-content: center;
            //flex-wrap: wrap;
            width: 70vw;
            margin: 0 auto;
            }
            .carousel-grid-image{
                display:flex;
                align-items: center;
                justify-content: space-between;
            }
            .carousel-grid :global(.card) {
                margin: 0px 1vw;
                height: 400px;
                max-width: 600px;
                //padding: 20px;
                justify-content: center;
            }
            .carousel-grid :global(.card .content2:nth-of-type(2)) {
                display: none;
            }
            .carousel-grid :global(.card .title) {
                width: 428px;
                height: 72px;
                font-family: Nunito;
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 150%;
                /* or 36px */

            }
            .carousel-grid :global(.card p) {
                width: 452px;
                height: 121px;
                font-family: Muli;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 197.5%;
                /* or 32px */

                letter-spacing: 0.01em;
            }
            .carousel-grid :global(.card .link) {
                font-weight: bold;
                font-size: 24px;
                line-height: 109%;
                margin: 0;
                margin-top: 34px !important;
            }
            #left-button,#right-button{
            background: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            height: 31px;
            width: 18px;
            padding: 0;
            position: sticky;
            }

@media screen and (min-width: 991px) {
            #inner-right-button, #inner-left-button{
                display:none;
            }
            .carousel-grid :global(.card:first-of-type) {
                min-width: 452px;
                //min-height: 387px;
                margin: 0px 1vw;
            }

}
@media screen and (max-width: 990px) {
        .carousel-grid{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 90vw;    
            margin: auto;
        }
        .svg-margin{
            //display: none !important;
        }
            #left-button,#right-button{
                display: none;
            }
            #inner-right-button, #inner-left-button{
                background:  black;
                height: 62px;
                width: 36px;
                backdrop-filter: blur(15px);
                padding: 0;
                margin: 0 10px;
                outline: none;
                border: none;
            }
            .carousel-grid :global(.card p) {
                font-size: 14px !important;
                width: 100%;
            }
            .carousel-grid :global(.card) {
                height: auto !important;
                min-height: 200px !important;
            }
            .carousel-grid :global(.card h3) {
                font-size: 18px !important;
            }
}
@media screen and (max-width: 570px) {

        .carousel-grid{
            display: flex;
            flex-direction: column;
            width: 90vw;    
            margin: auto;
        }
        .carousel-grid :global(.card p),.carousel-grid :global(.card .title),.carousel-grid :global(.card .link),.carousel-grid :global(.card:first-of-type),.carousel-grid :global(.card .sub-title),.carousel-grid :global(.card){
            width: 100%;
            min-width:220px !important;
            margin: 0px auto;
            height: fit-content;
        }
        .carousel-grid :global(.card:first-of-type){
            height:200px !important;
        }
            #inner-right-button, #inner-left-button{
                background:  black;
                height: 31px;
                width: 18px;
                backdrop-filter: blur(15px);
                padding: 0;
                margin: 0 10px;
                outline: none;
                border: none;
            }
}

                `}

                </style>
            </React.Fragment>

        );
    }
}