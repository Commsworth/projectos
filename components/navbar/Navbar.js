import Link from 'next/link'
import React, { Component } from 'react'
import { FaBars } from 'react-icons/fa'
import './navbar.scss';


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
          <div className="nav-div">

          <div className="nav">
        <ul className="nav-sm">
          <li className="padding dp" > <Link href="/"><img src="/static/logo.svg" alt="Logo" /></Link>
                  <FaBars onClick={this.dropDown} className="dropdown-button"/>
          </li>
        </ul>


        <ul className="nav-lg" id="myNav">
          <li className="option padding " onClick={() =>this.setState({class: "active"})}> <Link href="/devops" className={this.state.class}>
            <a>Services</a>
          </Link>
          </li>
          <li className="option1 padding"  onClick={() =>this.setState({class: "active1"})}> <Link href="/portfolio" className={this.state.class}>
           <a>Portfolio</a>
          </Link>
          </li>
          <li className="option2 padding" onClick={() =>this.setState({class: "active2"})}> <Link href="#" className={this.state.class}>
           <a> Blog</a>
          </Link>
          </li>
          <div className="divide"></div>
          <li className="butt padding"> <Link href="#" className="option">
           <a> Contact</a>
          </Link>
          </li>
        </ul>

      </div>
          </div>
        )
    }
}

export default Nav
