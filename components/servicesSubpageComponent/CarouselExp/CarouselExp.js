import React, { Component } from 'react'
import Card from '../../extraPageComponents/Card';
// import './carouselexp.scss';
import ArrowLink from '../../extraPageComponents/ArrowLink';
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
          <style jsx global>{`
            .carou-div {
              width: 70%;
              margin: auto;
           }
            .carou-div .card-flx {
              display: flex !important;
           }
            .carou-div .card-flx .card {
              justify-content: center;
              margin: 30px 10px 10px 30px;
              height: 370px !important;
              height: auto;
              justify-content: end !important;
           }
            .carou-div .card-flx .card h3 {
              font-size: 34px;
              line-height: 1;
              color: black;
           }
            .carou-div .card-flx .card p {
              color: black;
              font-size: 100%;
              line-height: 1.5;
              margin: 0;
           }
            .carou-div .card-flx .card .link {
              font-weight: bold;
              font-size: 24px;
              line-height: 0px;
              font-family: "Nunito";
              margin: 0;
              margin-top: 10px !important;
           }
            .carou-div .card-flx img {
              height: auto;
           }
           
            .slick-slide img {
              border: 5px solid #fff;
              display: block;
              margin: auto;
           }
            @media screen and (max-width: 800px) {
              .carou-div {
                width: 100%;
             }
              .carou-div .card-flx {
                width: 90% !important;
                flex-wrap: wrap;
                margin: 0 auto;
             }
              .carou-div .card-flx .card {
                margin: 12px 0px 0px 0px !important;
             }
           }
            
          `} </style>
          </div>
        );
    }
}

export default CarouselExp

        
      
