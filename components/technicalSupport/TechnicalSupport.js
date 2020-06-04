import React, { Component } from 'react'
import "./technicalsupport.scss"

class TechnicalSupport extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             display: true,
             more: false
        }
    }

    handleClick=()=>{
        if(this.state.more){
            this.setState({more: false})
        }else{
            this.setState({more: true})
        }
    }
    
    render() {
        return (
            <div className="center">
                
                <div className="head-flx">
                    <div className="link" onClick={() => this.setState({ display: true })}><a className={this.state.display ? "active" : null}>Technical Partners</a></div>
                    <div className="link" onClick={() => this.setState({ display: false })}><a className={this.state.display ? null : "active"}>Business Partners</a></div>
                </div>
                { 
                this.state.display?
                <div className="tech-prt">
                <div className="head-flx-icons">
                                <img src="/partners/dell.svg" alt=""/>
                                <img src="/partners/hp.svg" alt="" />
                                <img src="/partners/dynatrace.svg" alt="" />
                                <img src="/partners/lenovo.svg" alt="" />
                                <img src="/partners/fortinet.svg" alt="" />
                </div>
                <div className="more-div">
                <button onClick={this.handleClick} className={`button ${this.state.more?'off':'more'}`}>+</button>
                <div className={`head-flx-icons ${this.state.more?'more':'off'}`}>
                                <img src="/partners/oracle.svg" alt=""/>
                                <img src="/partners/symantec.svg" alt="" />
                                <img src="/partners/veeam.svg" alt="" />
                                <img src="/partners/microsoft.svg" alt="" />
                                <img src="/partners/vmware.svg" alt="" />
                                </div>

                </div>
                </div>
                : <div>nothing here</div>
    }

            </div>
        )
    }
}
export default TechnicalSupport
