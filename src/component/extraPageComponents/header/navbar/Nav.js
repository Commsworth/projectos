import React, { Component } from 'react'
import Logo from '../../../../asset/svg/logo.svg';
import { FaBars } from 'react-icons/fa'
import './NavBar.scss';
import { Link } from 'react-router-dom';

export class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            class: "",
            fixed: "",
        }
    }
    dropDown = () => {
        var x = document.getElementById("myNav");
        if (x.className === "nav-lg") {
          x.className += " block";
        } else {
          x.className = "nav-lg";
        }
      }

    render() {
        return (
          <div className={`nav-div ${this.props.nav}`}>

          <div className="nav">
        <ul className="nav-sm">
          <li className="padding dp" > <a href="/commsworth/"><img src={Logo} alt="Logo" /></a>
            <button className="dropdown-button" onClick={this.dropDown}><FaBars onClick={this.dropDown} /></button>
          </li>
        </ul>


        <ul className="nav-lg" id="myNav">
          <li className="option padding " onClick={() =>this.setState({class: "active"})}> <Link to="/commsworth/services" className={this.state.class}>
            Services
          </Link>
          </li>
          <li className="option1 padding"  onClick={() =>this.setState({class: "active1"})}> <Link to="/commsworth/portfolio" className={this.state.class}>
            Portfolio
          </Link>
          </li>
          <li className="option2 padding" onClick={() =>this.setState({class: "active2"})}> <Link to="#" className={this.state.class}>
            Blog
          </Link>
          </li>
          <div className="divide"></div>
          <li className="butt padding"> <Link to="/commsworth/contact" className="option">
            Contact
          </Link>
          </li>
        </ul>

      </div>
          </div>
        )
    }
}

export default Nav
