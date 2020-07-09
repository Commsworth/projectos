import React, { Component } from 'react'
import Card from '../extra/card/card.component';
import './carouselexp.scss';
import ArrowLink from '../extra/arrow';
import {blueSemiCircle} from '../../static/assets/svgs'
import Slider from "react-slick"
import SlideWrapper from "./SlideWrapper";
  

class CarouselExp extends Component {

    constructor(props) {
        super(props);

        this.state = {
          
        }
    }


         render() {
            const settingsNoModules = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          dotsClass: "button__bar",
          arrows: false
        };

   return (
       <div className="carou-div">
            <SlideWrapper>
        <Slider {...settingsNoModules}>
          <div className="card-flx">
              {this.props.cardImg1}
              {this.props.cardContent1}
          </div>
          <div className="card-flx">
            {this.props.cardImg2}
              {this.props.cardContent2}
          </div>
          <div className="card-flx">
           {this.props.cardImg3}
              {this.props.cardContent3}
          </div>
          <div className="card-flx">
            {this.props.cardImg4}
              {this.props.cardContent4}

          </div>
          </Slider>
          </SlideWrapper>
          </div>
        );
    }
}

export default CarouselExp

        
      