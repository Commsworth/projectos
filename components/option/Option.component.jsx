
import'./opttion.styles.scss'


import React, { Component } from 'react'




var imageOffset= 0 
var imageOffset1 = imageOffset

export class Option extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    right = (event) => {
    imageOffset += 50
   let end = document.getElementById("scroll").scrollWidth - 900
//    console.log(end)
        if(imageOffset >= end) {
        document.getElementById("scroll").style.right = end + "px";
        console.log(end)
        document.getElementById("right").setAttribute("class", "explore-svg");
        // document.getElementById("left").setAttribute("class", "explore-svg2");
    }
    else{
        document.getElementById("scroll").style.right = imageOffset + "px";
        document.getElementById("right").setAttribute("class", "explore-svg2");
        document.getElementById("left").setAttribute("class", "explore-svg2");
        console.log(end)

        }
        }

 left = (event) => {
 let end = document.getElementById("scroll").scrollWidth - 900
  imageOffset -= 50
    if(imageOffset <= 0){
  document.getElementById("scroll").style.right = 0 + "px";
 document.getElementById("left").setAttribute("class", "explore-svg");
//  document.getElementById("right").setAttribute("class", "explore-svg2");
  console.log(imageOffset)
  return imageOffset=0
}
else if (imageOffset >= end){
    document.getElementById("scroll").style.right = end+ "px";
    return imageOffset=end
    }
    else{
        document.getElementById("scroll").style.right = imageOffset + "px";
        document.getElementById("left").setAttribute("class", "explore-svg2");
        document.getElementById("right").setAttribute("class", "explore-svg2");
  console.log(imageOffset)
    }
  } 



    render() {
        return (
                  <div>
            <div className="circle-opt">
    <div className="offer-circle"><svg onClick={this.left} width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="left" d="M0.69763 7.29289C0.307106 7.68342 0.307106 8.31658 0.69763 8.70711L7.06159 15.0711C7.45212 15.4616 8.08528 15.4616 8.4758 15.0711C8.86633 14.6805 8.86633 14.0474 8.4758 13.6569L2.81895 8L8.47581 2.34314C8.86633 1.95262 8.86633 1.31946 8.47581 0.928931C8.08528 0.538407 7.45212 0.538407 7.06159 0.928931L0.69763 7.29289ZM18.5952 7L1.40474 7L1.40474 9L18.5952 9L18.5952 7Z" fill="#D3D3D3"/>
</svg>
</div>

    <div className="offer-circle"><svg onClick={this.right} width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="right" d="M18.3024 8.70711C18.6929 8.31658 18.6929 7.68342 18.3024 7.29289L11.9384 0.928932C11.5479 0.538408 10.9147 0.538408 10.5242 0.928932C10.1337 1.31946 10.1337 1.95262 10.5242 2.34315L16.181 8L10.5242 13.6569C10.1337 14.0474 10.1337 14.6805 10.5242 15.0711C10.9147 15.4616 11.5479 15.4616 11.9384 15.0711L18.3024 8.70711ZM0.404785 9L17.5953 9V7L0.404785 7L0.404785 9Z" fill="#0E82F8"/>
</svg>
</div>
</div>
        </div>
        )
    }
}

export default Option