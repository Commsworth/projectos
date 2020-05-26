import Link from 'next/link'
import React, { Component } from 'react'
import { FaBars } from 'react-icons/fa'
import './navbar.scss';


export class Nav extends Component {
  constructor(props) {
    super(props)
    this.path = "/commsworth/"
    this.state = {
      class: "",
      fixed: "",
      page: "Solutions",
      nav: "",
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
  handleScroll = () => {
    window.pageYOffset >= 1 ? this.setState({ nav: "nav-scroll" }) : this.setState({ nav: "" })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.scrollY>50? this.handleScroll: null;
    console.log(window.scrollY)
  }



  render() {
    return (
      <div className={`nav-div ${this.state.nav}`}>

        <div className="nav">
          <ul className="nav-sm">
<<<<<<< HEAD
            <li className="padding dp" > <Link href="/"><img src={this.path+"/image/logo.svg"} alt="Logo" /></Link>
              <div id="myDropdown" class="dropdown-content">
=======
            <li className="padding dp" > <Link href="/"><img src="/static/logo.svg" alt="Logo" /></Link>
              <div id="myDropdown" className="dropdown-content">
>>>>>>> 7d9549a4eddd87b359f8b441a4f366fc42e3b6e3
                <ul>
                  <li><Link href="/">Academy</Link></li>
                  <li><Link href="#about">Store</Link></li>
                  <li ><Link href="#contact">ProjectOS</Link></li>
                  <li ><Link href="commsworth/contact">MealStock</Link></li>
                  <li ><Link href="#contact">Liveizy</Link></li>
                  <li ><Link href="#contact">Solutions</Link></li>
                </ul>
              </div>
              <FaBars onClick={this.dropDown} className="dropdown-button" />
            </li>
            <div className="divide"></div>
            <li className="padding page">{this.state.page}</li>
          </ul>


          <ul className="nav-lg" id="myNav">
            <li className="option padding " onClick={() => this.setState({ class: "active" })}> <Link href={this.path+"services"} className={this.state.class}>
              <a>Services</a>
            </Link>
            </li>
            <li className="option1 padding" onClick={() => this.setState({ class: "active1" })}> <Link href={this.path+"portfolio"} className={this.state.class}>
              <a>Portfolio</a>
            </Link>
            </li>
            <li className="option2 padding" onClick={() => this.setState({ class: "active2" })}> <Link href="#" className={this.state.class}>
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
