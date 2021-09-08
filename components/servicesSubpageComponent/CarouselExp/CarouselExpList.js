import React, { Component } from 'react'
import Slider from "react-slick"
import SlideWrapper from "./SlideWrapper";
import CarouselExp from './CarouselExp'
import {
  Client,
  PRISMIC_heading,
  PRISMIC_link_text,
  PRISMIC_image,
  PRISMIC_text,
} from "../../../prismic-configuration";
  

const CarouselExpList = ({items})  =>{
  // console.log(items)


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
        {
    items.map((item,i) =>{
    return (     
           <CarouselExp
        id={i} 
        title={PRISMIC_heading(item)}
        image={PRISMIC_image(item)}
        content= {PRISMIC_text(item)}
        link={PRISMIC_link_text(item)}
        // about={events[i].about} 
        // link={events[i].link} 
        // img={events[i].img}
        // href={events[i].href}
        key={i} 
        />
      
    )
})
        }

          </Slider>
          </SlideWrapper>
          <style jsx global>{`
            .carou-div {
              width: 70%;
              margin: auto;
           }
        /*    .carou-div .card-flx {
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

           */
           .button__bar {
    display: inline-block;
    vertical-align: middle;
    margin: auto;
    padding: 0;
    background: rgba(255,255,255,0.3);
    border-radius: 40px;
    width: 100%;
    text-align: center;
}
.button__bar li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 3px;
    padding: 0;
}
.button__bar li.slick-active button {
    background-color: #208FFF;
}
.button__bar li button {
    border: none;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 15px;
    width: 15px;
    border-radius: 7.5px;
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


export default CarouselExpList

        
      
