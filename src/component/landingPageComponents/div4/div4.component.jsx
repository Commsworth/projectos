import React from 'react'
import './div4.styles.scss'
import pf1 from '../../../asset/img/pf/Ellipse 16.png'
import pf2 from '../../../asset/img/pf/Ellipse 17.png'
import pf3 from '../../../asset/img/pf/Ellipse 18.png'
import pf4 from '../../../asset/img/pf/Ellipse 19.png'
import pf5 from '../../../asset/img/pf/Ellipse 20.png'
import comma from '../../../asset/img/comma.png'

import up from './img/7up.svg'
import ap from './img/ap.svg'
import mo from './img/mo.svg'
import wa from './img/wa.svg'

import waec from './img/waec.svg'
import ns from './img/ns.svg'
import nm from './img/nm.svg'


class Div4 extends React.Component{

    constructor(props){
        super(props);

        this.state={
            words: {
                mission: "I like Commsworth",
                name:"Pesky", 
                position:"Frontend Web Developer", 
                company: "Commsworth",
                class: "circle1",
            }
        }
    }
    hover=(object)=>{
        this.setState({words:object})
    }

    render(){

        return (
            <div>
                <div className="cli">
                <h5>Trusted by top brands across various industries
                    <br/>just to name a few
                </h5>
                <div className="brand">
                    <img src={up} alt="" srcset=""/>
                    <div className="bor3"></div>
                    <img src={mo} alt="" srcset=""/>
                    <div className="bor3"></div>
                    <img src={wa} alt="" srcset=""/>
                    <div className="bor3"></div>
                    <img src={ap} alt="" srcset=""/>
                </div>
                <br/>
                <div className="brand">
                    <img src={waec} alt="" srcset=""/>
                    <div className="bor3"></div>
                    <img src={ns} alt="" srcset=""/>
                    <div className="bor3"></div>
                    <img src={nm} alt="" srcset=""/>
                </div>
                </div>
                <br/>
            <div className="div4">
         <div  className="pf1" onMouseEnter={()=>this.hover({mission: "I like Commsworth",name:"Pesky", position:"Frontend Web Developer", company: "Commsworth", class: "circle1"})}><img src={pf1} className={`${this.state.words.class}`} id="pf1"alt="" /></div>
         <div  className="pf2" onMouseEnter={()=>this.hover({mission: "I love Commsworth",name:"Pesky", position:"Frontend Web Developer", company: "Commsworth", class: "circle2"})}><img src={pf2} className={`${this.state.words.class}`} id="pf2"alt=""/></div>
        
        
         
         <div className="center">
             <br/>
             <br/>
            <img src={comma} alt="" srcset=""/>
            <h3>What Our Clients Think About Us</h3>
            <p id="mission">{this.state.words.mission}</p>
            <h5 id="name">{this.state.words.name}</h5>
            <p id="position">{this.state.words.position}</p>
            <p id="position">{this.state.words.company}</p>
         </div>
 
         <div  className="pf3" onMouseEnter={()=>this.hover({mission: "I want Commsworth",name:"Pesky", position:"Frontend Web Developer", company: "Commsworth", class: "circle3"})}><img src={pf3} className={`${this.state.words.class}`} id="pf3"alt=""/></div>
         <div  className="pf4" onMouseEnter={()=>this.hover({mission: "I need Commsworth",name:"Pesky", position:"Frontend Web Developer", company: "Commsworth", class: "circle4"})}><img src={pf4} className={`${this.state.words.class}`} id="pf4"alt=""/></div>
         <div  className="pf5" onMouseEnter={()=>this.hover({mission: "I admire Commsworth",name:"Pesky", position:"Frontend Web Developer", company: "Commsworth", class: "circle5"})}><img src={pf4} className={`${this.state.words.class}`} id="pf5"alt=""/></div>
         </div> 
         </div>
    )
}
}

export default Div4;
