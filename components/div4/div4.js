import React, { Component } from 'react'
import './div4.scss'


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
                    <img src="/static/img-div4/7up.svg" alt="" srcset=""/>
                    <div className="bor3"></div>
                    <img src="/static/img-div4/mo.svg" alt="" srcset=""/>
                    <div className="bor3"></div>
                    <img src="/static/img-div4/wa.svg" alt="" srcset=""/>
                    <div className="bor3"></div>
                    <img src="/static/img-div4/ap.svg" alt="" srcset=""/>
                </div>
                <br/>
                <div className="divide2"></div>
                <div className="brand">
                    <img src="/static/img-div4/waec.svg" alt="" srcset=""/>
                    <div className="bor3"></div>
                    <img src="/static/img-div4/ns.svg" alt="" srcset=""/>
                    <div className="bor3"></div>
                    <img src="/static/img-div4/nm.svg" alt="" srcset=""/>
                    <div className="bor3"></div>
                    <img src="/static/img-div4/home.svg" alt="" srcset=""/>
                </div>
                <br/>
                </div>
                <br/>
            <div className="div4">         
         <div className="center2">
             <br/>
             <br/>
            <img src="/static/img-div4/comma.png" alt="" srcset=""/>
            <h3>What Our Clients Think <br/> About Us</h3>
            <p id="mission" style={{fontSize:"30px",lineHeight:"130%",marginBottom:"124px",marginTop:"31px"}}>"{this.state.words.mission}"</p>
            <h3 id="name" style={{fontSize:"24px",lineHeight:"178.5%",marginBottom:"0",marginTop:"46px"}}>{this.state.words.name}</h3>
            <p id="position" style={{fontSize:"16px",lineHeight:"178.5%"}}>-{this.state.words.position}, {this.state.words.company}</p>
         </div>
            <div className="img-flx">        
         <div  className="pf1" onMouseEnter={()=>this.hover({mission: "I like Commsworth",name:"Pesky", position:"Frontend Web Developer", company: "Commsworth", class: "circle1"})}><img src="/static/img-div4/pf/Ellipse 16.png" className={`${this.state.words.class}`} id="pf1"alt="" /></div>
         <div  className="pf2" onMouseEnter={()=>this.hover({mission: "I love Commsworth",name:"Pesky", position:"Frontend Web Developer", company: "Commsworth", class: "circle2"})}><img src="/static/img-div4/pf/Ellipse 17.png" className={`${this.state.words.class}`} id="pf2"alt=""/></div>
         <div  className="pf3" onMouseEnter={()=>this.hover({mission: "I want Commsworth",name:"Pesky", position:"Frontend Web Developer", company: "Commsworth", class: "circle3"})}><img src="/static/img-div4/pf/Ellipse 18.png" className={`${this.state.words.class}`} id="pf3"alt=""/></div>
         <div  className="pf4" onMouseEnter={()=>this.hover({mission: "I need Commsworth",name:"Pesky", position:"Frontend Web Developer", company: "Commsworth", class: "circle4"})}><img src="/static/img-div4/pf/Ellipse 19.png" className={`${this.state.words.class}`} id="pf4"alt=""/></div>
         <div  className="pf5" onMouseEnter={()=>this.hover({mission: "I admire Commsworth",name:"Pesky", position:"Frontend Web Developer", company: "Commsworth", class: "circle5"})}><img src="/static/img-div4/pf/Ellipse 19.png" className={`${this.state.words.class}`} id="pf5"alt=""/></div>
         </div>
         </div> 
         </div>
    )
}
}

export default Div4;
