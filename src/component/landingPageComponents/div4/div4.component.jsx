import React from 'react'
import './div4.styles.scss'
import pf1 from '../../../asset/img/pf/Ellipse 16.png'
import pf2 from '../../../asset/img/pf/Ellipse 17.png'
import pf3 from '../../../asset/img/pf/Ellipse 18.png'
import pf4 from '../../../asset/img/pf/Ellipse 19.png'
import pf5 from '../../../asset/img/pf/Ellipse 20.png'



function div4(props) {
    function hover(){
            
        document.getElementById("mission").innerHTML = "'i am pesky'"
        document.getElementById("name").innerHTML = "pesky" 
        document.getElementById("position").innerHTML = "CEO"
    }
    function hover1(){
            
        document.getElementById("mission").innerHTML = "'i am Nirvaclaus'"
        document.getElementById("name").innerHTML = "Nicholas" 
        document.getElementById("position").innerHTML = "MD"
    }
    function hover2(){
            
        document.getElementById("mission").innerHTML = "'I am Bakare'"
        document.getElementById("name").innerHTML = "Tayo" 
        document.getElementById("position").innerHTML = "DevOps"
    }
    function hover3(){
            
        document.getElementById("mission").innerHTML = "'i am Abiodun'"
        document.getElementById("name").innerHTML = "Micheal" 
        document.getElementById("position").innerHTML = "Frontend DevOps"
    }
    function hover4(){
            
        document.getElementById("mission").innerHTML = "'i am pesky'"
        document.getElementById("name").innerHTML = "pesky" 
        document.getElementById("position").innerHTML = "CEO"
    }


    return (
            <div className="div4">
         ""
         <div  className="pf1" onMouseEnter={hover}><img src={pf1} id="pf1"alt="" /></div>
         <div  className="pf2" onMouseEnter={hover1}><img src={pf2} id="pf2"alt=""/></div>
        
        
         
         <div className="center">
             <h3>{props.Logo}</h3>
            <h3> {props.about}</h3>
            <p id="mission">{props.mission}</p>
            <h5 id="name">{props.name}</h5>
            <p id="position">{props.position}</p>
         </div>
 
         <div  className="pf3" onMouseEnter={hover2}><img src={pf3} id="pf3"alt=""/></div>
         <div  className="pf4" onMouseEnter={hover3}><img src={pf4} id="pf4"alt=""/></div>
         <div  className="pf5" onMouseEnter={hover4}><img src={pf4} id="pf5"alt=""/></div>
         </div> 
    )
}

export default div4;
