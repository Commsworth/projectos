import Link from 'next/link'
import React, { Component } from 'react'
import { FaBars } from 'react-icons/fa'
import './navbar.scss';


export class Nav extends Component {
  constructor(props) {
    super(props)
    this.path = "/"
    this.state = {
      class: "",
      fixed: "",
      page: "Solutions",
      nav: "",
      dropdown: false,
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
  handleDropdown = (e) => {
    if(e.target.alt!=="Logo"){
      this.setState({dropdown:false})
    }
  }
  logoDropdown = () => {
    if(this.state.dropdown===true){
      this.setState({dropdown:false})
    }
    else{
      this.setState({dropdown:true})
    }
  }
  handleScroll = () => {
    window.pageYOffset >= 1 ? this.setState({ nav: "nav-scroll" }) : this.setState({ nav: "" })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('click', this.handleDropdown);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('click', this.handleDropdown);
    
    window.scrollY>50? this.handleScroll: null;
    console.log(window.scrollY)
  }



  render() {
    return (
      <div className={`nav-div ${this.state.nav}`}>

        <div className="nav">
          <ul className="nav-sm">
            <li className={`padding ${this.state.dropdown===true?'down':''}  dp`} > <img onClick={this.logoDropdown} src={this.path+"logo.svg"} alt="Logo" />
              <div id="myDropdown" class="dropdown-content">
                <ul>
                  <li><Link href="/">Academy</Link></li>
                  <li><Link href="#about">Store</Link></li>
                  <li ><Link href="#contact">ProjectOS</Link></li>
                  <li ><Link href="commsworth/contact">MealStock</Link></li>
                  <li ><Link href="#contact">Liveizy</Link></li>
                </ul>
              </div>
              <FaBars onClick={this.dropDown} className="dropdown-button" />
            </li>
            <div className="padding divide-line"><img src="pngs/navbardivide.png"/></div>
            <li className=" page padding nav-line"><Link href="/"><a>{this.state.page}</a></Link><img className="nav-line" src="pngs/navbarline.png"/></li>
          </ul>


          <ul className="nav-lg" id="myNav">
            <li className="option padding nav-line " onClick={() => this.setState({ class: "active" })}> <Link href={this.path+"services"} className={this.state.class}>
              <a>Services</a>
            </Link>
            <img className="nav-line" src="pngs/navbarline.png"/>
            </li>
            <li className="option1 padding nav-line" onClick={() => this.setState({ class: "active1" })}> <Link href={this.path+"portfolio"} className={this.state.class}>
              <a>Portfolio</a>
            </Link>
            <img className="nav-line" src="pngs/navbarline.png"/>
            </li>
            <li className="option2 padding nav-line" onClick={() => this.setState({ class: "active2" })}> <Link href="#" className={this.state.class}>
              <a> Blog</a>
            </Link>
            <img className="nav-line" src="pngs/navbarline.png"/>
            </li>
            <div className="padding divide-line"><img src="pngs/navbardivide.png"/></div>
            <li> <Link href="/contacts" className="option">
              <a className="butt padding"> Contact</a>
            </Link>
            </li>
          </ul>

        </div>
      </div>
    )
  }
}

export default Nav
