import React, { Component } from 'react'
import CarouselDiv from '../landing/carouselDiv/carouselDiv.component'
import { blueSemiCircle, drawingArrow } from '../../static/assets/svgs';
import './explore.scss'
import CarouselExp from '../CarouselExp/CarouselExp'
import CardOfferList from '../CarouselOffer/CardOffer/CardOfferList'
import Scroll from '../CarouselOffer/Scroll'
import {events} from '../CarouselOffer/events'
import ArrowLink from '../extra/arrow';
import Card from '../extra/card/card.component'
import Option from '../option/Option.component'
import DevopsOffer from '../subpage-offer/devops-offer/DevopsOffer.component';

var imageOffset= 0 
var imageOffset1 = imageOffset

class Explore extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             web: true,
             devops: false,
             analytics: false,
             pm: false,
             offer: true,
             res: false
        }
    }

     handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        })
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
             pm: false,
            })
    }
    onDisplayDevops = event => {
        this.setState({
            web: false,
             devops: true,
             analytics: false,
             pm: false,
        })
    }
    onDisplayAnalytics = event => {
        this.setState({
            web: false,
             devops:false,
             analytics: true,
             pm: false,
        })
    }
    onDisplayAi = event => {
        this.setState({
            web: false,
             devops: false,
             analytics: false,
             pm: false,
        })
    }
    onDisplayPm = event => {
        this.setState({
            web: false,
             devops: false,
             analytics: false,
             pm: true,
        })
    }

 

    render() {
        return (
            <div className="exp">
                <ul className="exp-head">
                    <li onClick={this.onDisplayWeb} className={this.state.web? "exp-head-style" : null}>Web | Mobile Apps</li>
                    <li onClick={this.onDisplayDevops} className={this.state.devops? "exp-head-style" : null}>DevOps</li>
                    <li onClick={this.onDisplayAnalytics} className={this.state.analytics? "exp-head-style" : null}>Analytics</li>
                    <li onClick={this.onDisplayPm} className={this.state.pm? "exp-head-style" : null}>Project Management</li>
                </ul>

            <div  className="exp-head-opt">
                 <select id="opt" name="opt" value={this.state.scope} value={this.state.opt}  onChange={this.handleChange}>
                    <option value={this.onDisplayWeb} className={this.state.web? "exp-head-style" : null}>Web | Mobile Apps</option>
                    <option value={this.onDisplayDevops} className={this.state.devops? "exp-head-style" : null}>DevOps</option>
                    <option value={this.onDisplayAnalytics} className={this.state.analytics? "exp-head-style" : null}>Analytics</option>
                    <option value={this.onDisplayAi} className={this.state.ai? "exp-head-style" : null}>Artificial Intellicence</option>
                    <option value={this.onDisplayPm} className={this.state.pm? "exp-head-style" : null}>Project Management</option>
                </select>
                </div>

                {this.state.web?                
                 <CarouselExp />
                : null
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
                        <DevopsOffer />
     : null }

    {this.state.res?<div>Resources</div>:null}
    </div>    
        )
    }
}

export default Explore