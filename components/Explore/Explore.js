import React, { Component } from 'react'
import CarouselDiv from '../landing/carouselDiv/carouselDiv.component'
import { blueSemiCircle, drawingArrow } from '../../static/assets/svgs';
import './explore.scss'
import CarouselExp from '../CarouselExp/CarouselExp'
import CardOfferList from '../CarouselOffer/Card-offer/CardOfferList'
import Scroll from '../CarouselOffer/Scroll'
import {events} from '../CarouselOffer/events'
import ArrowLink from '../extra/arrow';
import Card from '../extra/card/card.component'

var imageOffset= 0 
var imageOffset1 = imageOffset

class Explore extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             web: true,
             devops: false,
             analytics: false,
             ai: false,
             pm: false,
             offer: true,
             res: false
        }
    }
    onDisplayOffer = event =>{
         this.setState({
             offer: true,
             res: false
            })
    }
    onDisplayRes = event =>  {
         this.setState({
             offer: false,
             res: true
            })
    }

    onDisplayWeb = event => {
        this.setState({
            web: true, 
            devops: false,
             analytics: false,
             ai: false,
             pm: false,
            })
    }
    onDisplayDevops = event => {
        this.setState({
            web: false,
             devops: true,
             analytics: false,
             ai: false,
             pm: false,
        })
    }
    onDisplayAnalytics = event => {
        this.setState({
            web: false,
             devops:false,
             analytics: true,
             ai: false,
             pm: false,
        })
    }
    onDisplayAi = event => {
        this.setState({
            web: false,
             devops: false,
             analytics: false,
             ai: true,
             pm: false,
        })
    }
    onDisplayPm = event => {
        this.setState({
            web: false,
             devops: false,
             analytics: false,
             ai: false,
             pm: true,
        })
    }

right = (event) => {
    imageOffset += 50
        if(imageOffset >= 2450) {
        document.getElementById("scroll").style.right = 2450 + "px";
        console.log(imageOffset)
        }
        else{
            document.getElementById("scroll").style.right = imageOffset + "px";

        }
        }

 left = (event) => {
 
  imageOffset -= 50
    if(imageOffset <= 0){
  document.getElementById("scroll").style.right = 0 + "px";
  console.log(imageOffset)
  return imageOffset=0
    }else{
        document.getElementById("scroll").style.right = imageOffset + "px";
  console.log(imageOffset)
    }
  } 

    render() {
        return (
            <div className="exp">
                <ul className="exp-head">
                    <li onClick={this.onDisplayWeb} className={this.state.web? "exp-head-style" : null}>Web | Mobile Apps</li>
                    <li onClick={this.onDisplayDevops} className={this.state.devops? "exp-head-style" : null}>DevOps</li>
                    <li onClick={this.onDisplayAnalytics} className={this.state.analytics? "exp-head-style" : null}>Analytics</li>
                    <li onClick={this.onDisplayAi} className={this.state.ai? "exp-head-style" : null}>Artificial Intellicence</li>
                    <li onClick={this.onDisplayPm} className={this.state.pm? "exp-head-style" : null}>Project Management</li>
                </ul>
                {this.state.web?
                <div>
                 <CarouselExp />
                </div> : null
                 }               

                {this.state.devops?
                <div>
                devops
                </div> : null
                 }

                {this.state.analytics?
                <div>
                     Analytics
                </div> : null
                 }

                {this.state.ai?
                <div>
                     Artificial Intellicence
                </div> : null
                 }

                {this.state.pm?
                <div>
                    Project Management
                </div> : null
                 }
                     <ul className="offer-options">
                         <li onClick={this.onDisplayOffer} className={this.state.offer? "offer-options-style" : null}>Offers</li>
                         <li onClick={this.onDisplayRes} className={this.state.res? "offer-options-style" : null}>Resources</li>
                     </ul>

                     {this.state.offer?
                     <div>
                 <div className="offer-grid">
                <Card title={"Game changing offers"} subTitle={blueSemiCircle} content={"Here are a few more reasons why you should choose use"}/>
                 
                <Scroll>                   
                <CardOfferList events={events} />
                  </Scroll>
                
                  </div>
                <div style={{display: "flex", justifyContent: "center", zIndex: 1000}}>
        <svg onClick={this.left} width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<circle cx="49" cy="39" r="19" transform="rotate(-180 49 39)" fill="white"/>
<path d="M39.6976 38.2929C39.3071 38.6834 39.3071 39.3166 39.6976 39.7071L46.0616 46.0711C46.4521 46.4616 47.0853 46.4616 47.4758 46.0711C47.8663 45.6805 47.8663 45.0474 47.4758 44.6569L41.819 39L47.4758 33.3431C47.8663 32.9526 47.8663 32.3195 47.4758 31.9289C47.0853 31.5384 46.4521 31.5384 46.0616 31.9289L39.6976 38.2929ZM57.5952 38L40.4047 38L40.4047 40L57.5952 40L57.5952 38Z" fill="#D3D3D3"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="10"/>
<feGaussianBlur stdDeviation="15"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

<svg onClick={this.right} id="right" width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<circle cx="49" cy="39" r="19" fill="white"/>
<path d="M58.3024 39.7071C58.6929 39.3166 58.6929 38.6834 58.3024 38.2929L51.9384 31.9289C51.5479 31.5384 50.9147 31.5384 50.5242 31.9289C50.1337 32.3195 50.1337 32.9526 50.5242 33.3431L56.181 39L50.5242 44.6569C50.1337 45.0474 50.1337 45.6805 50.5242 46.0711C50.9147 46.4616 51.5479 46.4616 51.9384 46.0711L58.3024 39.7071ZM40.4048 40H57.5953V38H40.4048V40Z" fill="#D3D3D3"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="10"/>
<feGaussianBlur stdDeviation="15"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
    </div>
    </div> : null }

    {this.state.res?<div>Resources</div>:null}
            </div>
        )
    }
}

export default Explore