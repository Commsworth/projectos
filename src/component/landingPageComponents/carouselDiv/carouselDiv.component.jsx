import React,{Component} from 'react';
import './carouselDiv.styles.scss';
import Card from '../../extraPageComponents/card/card.component';
import RoundButton from '../roundButton/roundButton.component';

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
            <RoundButton display ="←"/>
        <div style={{backgroundImage: "url(" + this.props.background + ")",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}} className="img">
        </div>
            <RoundButton display ="→"/>
            </div>
        {/* <Card title="Commsworth partners" subTitle="Microsoft" content={LoremIpsum} link="Read More →" className="card" /> */}
        <div>
        <h3>
        Commsworth partners
        </h3>
        <h3>
        Microsoft
        </h3>
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