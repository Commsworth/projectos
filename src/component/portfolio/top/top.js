import React from 'react'
import './top.css'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import arrow from '../img/arrow.svg'

function Top() {
    
    
    return (
        <div className="home">
        <div className='text'>
        <h3>SIWP.ng</h3> 
        <div className="bor"></div>  
        <p>lorem ipsum dolor isit amet, consectetur<br/>
            adipiscing elit. Ulticies turpis ridiculus et id <br/>
            mauris tincidut facilisi duis. Fermentum amet</p> 
            <a href="">Visit website -></a>   
        </div>

        <div className="show">
        <img src={arrow} alt="" className="simg0"/>
        <img src={img5} alt="" id="hover" className="simg1"/>
        <img src={img1} alt="" id="hover" className="simg2"/>
        <img src={img3} alt="" id="hover" className="simg3"/>
        <img src={img4} alt="" id="hover" className="simg4"/>
        </div>
       
        </div>

    )
}

export default Top
