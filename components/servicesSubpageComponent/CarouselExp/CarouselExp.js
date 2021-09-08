import React, { Component } from 'react'
import Card from '../../extraPageComponents/Card';
import ArrowLink from '../../extraPageComponents/ArrowLink';

  

const CarouselExp = ({title, image, content, link}) => {

   return (
     <>
          <div className="card-flx">
          <Card  
          background={image} 
          />

          <Card 
          title={title}
          subIcon='/static/svg/semi-circle.svg' 
          content={content}
          link={<ArrowLink text={link}/>}
          /> 
          </div>          
          <style jsx global>{`
            .carou-div {
              width: 70%;
              margin: auto;
           }
            .card-flx {
              display: flex !important;
           }
           .card-flx .card {
              justify-content: center;
              margin: 30px 10px 10px 30px;
              height: 370px !important;
              height: auto;
              justify-content: start !important;
              align-items: start
           }
           .card-flx .card h3 {
              font-size: 34px;
              line-height: 1;
              color: black;
           }
          .card-flx .card p {
              color: black;
              font-size: 100%;
              line-height: 1.5;
              margin: 0;
           }
            .card-flx .card .link {
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
               .card-flx {
                width: 90% !important;
                flex-wrap: wrap;
                margin: 0 auto;
             }
               .card-flx .card {
                margin: 12px 0px 0px 0px !important;
             }
           }
            
          `} </style>
          </>
        );
    }


export default CarouselExp

        
      
