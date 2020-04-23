import React,{Component} from 'react';
import './carouselDiv.styles.scss';
import Card from '../../extraPageComponents/card/card.component';
import RoundButton from '../roundButton/roundButton.component';
import R from './img/right.png'
import L from './img/left.png'
import Bluecircle from '../../../asset/svg/titlecircle.svg'

const LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies turpis ridiculus et id mauris tincidunt facilisi duis. Fermentum amet vestibulum elit ac vel eget. Lobortis maecenas sit faucibus congue volutpat aenean sit. Donec in."

class CarouselDiv extends Component{
    constructor(props) {
        super(props);

        this.state={
            
        }
    }
    render(){
        return (
            <div>
        <div className="carousel-div">
  
            <div className="carousel-img-div">
                <button className="cr-btn"><img src={L} alt="" /></button>
        <div  className="img">
            <div className="banner">Commsworth partners Microsoft</div>
            <div className="" style={{ backgroundImage: "url(" + this.props.background + ")", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no</div>-repeat" }} className="img"></div>
            </div>
        <button className="cr-btn1"><img src={R} alt="" /></button>
            </div>
       
        {/* <Card title="Commsworth partners" subTitle="Microsoft" content={LoremIpsum} link="Read More →" className="card" /> */}
        <div className="carousel-text-div">
        <h5>
            NextGen App Performance Monitoring <br/>(APM) delivered through Dynatrace
        </h5>
        <h><img src={Bluecircle} alt="" srcset=""/></h>
        <p>
            {LoremIpsum}
        </p>
        <a href="#">
            Read More →
        </a>
    </div>
    </div>
    </div>
    )
        }
}

export default CarouselDiv;