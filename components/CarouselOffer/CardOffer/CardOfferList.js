import React from 'react'
import CardOffer from './CardOffer'

var imageOffset= 0 
var imageOffset1 = imageOffset



const right = (event) => {
    imageOffset += 50
        if(imageOffset >= 2450) {
        document.getElementById("scroll").style.right = 2450 + "px";
        console.log(imageOffset)
        }
        else{
            document.getElementById("scroll").style.right = imageOffset + "px";

        }
        }

const left = (event) => {
 
  imageOffset -= 50
    if(imageOffset <= 0){
  document.getElementById("scroll").style.right = 0 + "px";
  console.log(imageOffset)
  return imageOffset=0
    }else{
        document.getElementById("scroll").style.right = imageOffset + "px";
  console.log(imageOffset)
    }
  } 

function CardOfferList({events}) {
    return(
        <div>
    <div id="scroll" style={{display: "flex", position: "relative",right: 0,}}>
    {
    events.map((user,i) =>{
    return (
         
           <CardOffer
        id={events[i].id} 
        about={events[i].about} 
        link={events[i].link} 
        img={events[i].img}
        key= {i} />
    
    )
})
        }
        </div>
    </div>
)
    }
export default CardOfferList
