import React from 'react'
import './top.scss'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import arrow from '../img/arrow.svg'
// import { render } from 'node-sass'

class Top extends React.Component{

    constructor(){
        super();

        this.state={
            current: "first",
        }
    }

    hover=(word)=>{
        this.setState({current:word})
    }

    render() {    
    
    return (
        <div className="home">
        <div className='text'>
        <h3>SIWP.ng</h3> 
        <div className="bor"></div>  
        <p>lorem ipsum dolor isit amet, consectetur<br/>
            adipiscing elit. Ulticies turpis ridiculus et id <br/>
            mauris tincidut facilisi duis. Fermentum amet</p> 
            <a href="">Visit website →</a>   
        </div>

        <div className="show">
        <img src={arrow} alt="" className="simg0"/>
        <div className="simg1">
        <img src={img5} alt="" onMouseOver={()=>this.hover("first")} className={`${this.state.current}`}/>
        </div>
        <div className="simg2">
        <img src={img5} alt="" onMouseOver={()=>this.hover("second")} className={`${this.state.current}`}/>
        </div>
        <div className="simg3">
        <img src={img5} alt="" onMouseOver={()=>this.hover("third")} className={`${this.state.current}`}/>
        </div>
        <div className="simg4">
        <img src={img5} alt="" onMouseOver={()=>this.hover("fourth")} className={`${this.state.current}`}/>
        </div>
        <div className="simg5">
        <img src={img5} alt="" onMouseOver={()=>this.hover("fifth")} className={`${this.state.current}`}/>
        </div>
        </div>
       
        </div>

    )
}
}

export default Top;
