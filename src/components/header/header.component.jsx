import React from 'react'
import { Link } from 'react-router-dom';
import { Tick, GetDemo } from '../svgs/commsworth'
import './header.styles.scss'



class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            dropdown: false,
        }
    }

    render(){
        return(
    <div>
        <div className="header">
            <Link to="/projectos/" className="option1">
                <p><Tick /></p>
            </Link>
            <Link to="#" className="option">
                <p>ProjectOS</p>
            </Link>
            <div className="options">
                <Link to="/projectos/about" className="option">
                    About
            </Link >
                <Link to="/projectos/licensing" className="option">
                    Licensing
            </Link >
                <Link to="/projectos/faq" className="option1">
                    FAQ
            </Link >
                <Link to="/projectos/contact" className="option">
                    Contact
            </Link>
                <Link to="/projectos/login" className="option">
                    Login
            </Link>
                <Link to="/projectos/contact" className="option">
                    <button className="demo">Get Demo</button>
                </Link>
                    <button className="dropdown" onClick={()=>!this.state.dropdown?this.setState({dropdown:true}):this.setState({dropdown:false})}>{!this.state.dropdown?<span>☰</span>:<span>X</span>}</button>
            </div>
        </div>

        {this.state.dropdown && <div className="header2">
            <div className="header2--flex">
                <Link to="/projectos/about" className="option">
                    About
                </Link >
                <Link to="/projectos/licensing" className="option">
                    Licensing
                </Link >
                <Link to="/projectos/faq" className="option">
                    FAQ
                </Link >
                <Link to="/projectos/contact" className="option">
                    Contact
                </Link>
                <Link to="/projectos/contact" className="option">
                    <button className="demo">Get Demo</button>
                </Link>
            </div>
        </div>}
    </div>
        )
    }
}


export default Header;