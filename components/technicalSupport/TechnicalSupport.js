import React, { Component } from 'react'
import "./technicalsupport.scss"

class TechnicalSupport extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             display: true
        }
    }
    
    render() {
        return (
            <div className="center">
                
                <ul className="head-flx">
                    <li onClick={() => this.setState({ display: true })}><a className={this.state.display ? "active" : null}>Technical Partners</a></li>
                    <li onClick={() => this.setState({ display: false })}><a className={this.state.display ? null : "active"}>Business Partners</a></li>
                </ul>
                { 
                this.state.display?
                <div className="tech-prt">
                <div className="head-flx">
                <img src="/static/partners/dell.svg" alt=""/>
                <div className="bor"></div>
                <img src="/static/partners/hp.svg" alt="" />
                <div className="bor"></div>
                <img src="/static/partners/dynatrace.svg" alt="" />
                <div className="bor"></div>
                <img src="/static/partners/lenovo.svg" alt="" />
                <div className="bor"></div>
                <img src="/static/partners/fortinet.svg" alt="" />
                </div>
                    <div className="divide2"></div>
                <div className="head-flx">
                <img src="/static/partners/oracle.svg" alt=""/>
                <div className="bor"></div>
                <img src="/static/partners/symantec.svg" alt="" />
                <div className="bor"></div>
                <img src="/static/partners/veeam.svg" alt="" />
                <div className="bor"></div>
                <img src="/static/partners/microsoft.svg" alt="" />
                <div className="bor"></div>
                <img src="/static/partners/vmware.svg" alt="" />
                </div>
                </div>
                : <div>nothing here</div>
    }
            </div>
        )
    }
}
export default TechnicalSupport
