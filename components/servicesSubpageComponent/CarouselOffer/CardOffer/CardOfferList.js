import CardOffer from './CardOffer'
import React, { Component } from 'react'
import SlideWrapper from "./SlideWrapper";
import Slider from "react-slick"
import { PRISMIC_link, PRISMIC_link_text, PRISMIC_heading, PRISMIC_text, PRISMIC_image, PRISMIC_icon } from '../../../../prismic-configuration';


export class CardOfferList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        activeSlide: 0,
        activeSlide2: 0
    }
    
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

   next() {
    this.slider.slickNext();
    console.log(this.state.activeSlide, this.state.activeSlide2)
   if(this.state.activeSlide === 6 ){      
             document.getElementById("next").setAttribute("class", "explore-svg2");
          }  
          else if(this.state.activeSlide >= 0 ){
         document.getElementById("previous").setAttribute("class", "explore-svg");
         }  
  }
  previous() {
    this.slider.slickPrev();
    if(this.state.activeSlide === 1 ){
         document.getElementById("previous").setAttribute("class", "explore-svg2");
         }  
    else if (this.state.activeSlide >= 0 ){
      
             document.getElementById("next").setAttribute("class", "explore-svg");
          }  
  }


  render() {
    const settingsNoModules = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      beforeChange: (current, next) => this.setState({ activeSlide2: next + current / 2}),
      afterChange: current => this.setState({ activeSlide: current }),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
        };  

    const {events, offers} = this.props
    // console.log(offers)
    return (
    <React.Fragment>

       <div className='card-offer-div'>
            <SlideWrapper>
        <Slider ref={c => (this.slider = c)} {...settingsNoModules}>
    {
    offers.map((item,i) =>{
    return (
     
           <CardOffer
        // id={events[i].id} 
        title={PRISMIC_heading(item)}
        about={PRISMIC_text(item)} 
        link={PRISMIC_link(item)} 
        img={PRISMIC_icon(item)}
        href={PRISMIC_link_text(item)}
        key={i} />
      
    )
})
        }
     </Slider>
        </SlideWrapper>
            <div className="circle-opt">
    <div className="offer-circle" ><svg onClick={this.previous} width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id='previous' d="M0.69763 7.29289C0.307106 7.68342 0.307106 8.31658 0.69763 8.70711L7.06159 15.0711C7.45212 15.4616 8.08528 15.4616 8.4758 15.0711C8.86633 14.6805 8.86633 14.0474 8.4758 13.6569L2.81895 8L8.47581 2.34314C8.86633 1.95262 8.86633 1.31946 8.47581 0.928931C8.08528 0.538407 7.45212 0.538407 7.06159 0.928931L0.69763 7.29289ZM18.5952 7L1.40474 7L1.40474 9L18.5952 9L18.5952 7Z" fill="#D3D3D3"/>
</svg>
</div>

    <div className="offer-circle"><svg onClick={this.next} width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id ='next' d="M18.3024 8.70711C18.6929 8.31658 18.6929 7.68342 18.3024 7.29289L11.9384 0.928932C11.5479 0.538408 10.9147 0.538408 10.5242 0.928932C10.1337 1.31946 10.1337 1.95262 10.5242 2.34315L16.181 8L10.5242 13.6569C10.1337 14.0474 10.1337 14.6805 10.5242 15.0711C10.9147 15.4616 11.5479 15.4616 11.9384 15.0711L18.3024 8.70711ZM0.404785 9L17.5953 9V7L0.404785 7L0.404785 9Z" fill="#0E82F8"/>
</svg>
</div>
</div>
          </div>
          <style jsx global>
                {`
                .card-offer {
                    -webkit-box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.05);
                            box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.05);
                    width: 300px;
                    margin: auto;
                  }
                  
                  .card-offer img {
                    width: 295px;
                    margin: auto;
                    height: 100%;
                  }
                  
                  .card-offer h3 {
                    margin: 8px 18px;
                    font-size: 20px;
                  }
                  
                  .card-offer p {
                    margin: 8px 18px;
                    font-size: 16px;
                    line-height: 1.5;
                  }
                  
                  .card-offer a {
                    margin-top: 20px;
                    margin-left: 184px;
                  }
                  
                  .button__bar {
                    display: inline-block;
                    vertical-align: middle;
                    margin: auto;
                    padding: 0;
                    background: rgba(255, 255, 255, 0.3);
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
                  
                  .button__bar li button {
                    border: none;
                    color: transparent;
                    cursor: pointer;
                    display: block;
                    height: 15px;
                    width: 15px;
                    border-radius: 7.5px;
                  }
                  
                  .button__bar li.slick-active button {
                    background-color: #208FFF;
                  }
                  
                  .button__bar li button:hover,
                  .button__bar li button:focus {
                    background: #208FFF;
                    outline: 0;
                  }
                  
                  .slick-slide img {
                    border: 5px solid #fff;
                    display: block;
                    margin: auto;
                  }
                `}
            </style>
          </React.Fragment>
    )
  }
}

export default CardOfferList

