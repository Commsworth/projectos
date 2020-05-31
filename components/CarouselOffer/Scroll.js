import './scroll.scss'
import React, { Component } from 'react'


class Scroll extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }


    render() {
        return (
            <div>
                <div className= "scroll" style={{overflowX: 'hidden'}}>
        {this.props.children}
        
    </div>
    
            </div>
        )
    }
}



export default Scroll
