import React, { Component } from 'react'
import Link from 'next/link'
import './dropdown.style.scss'
import { FaCaretDown } from 'react-icons/fa'

export class Dropdown extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            toggle: true
        }
    }
       dropDown= (event) => {
      document.getElementById("myDropdown").classList.toggle("show");
      this.setState({
          toggle: !this.state.toggle
      })
        }
    render() {
        return (
                    <div className="dropdown">
                    <div onClick={this.dropDown} className="dropbtn">{this.props.active} <FaCaretDown /> </div>
                    <div id="myDropdown" className={this.state.toggle?"dropdown-content":"show"}>
                        <Post className='a' sublink='/devops'  text='Devops and Analytics'/>
                        <Post  className='a' sublink='/support'  text='Support'/>
                        <Post  className='a' sublink='/business-continuity'  text='Business Continuity'/>
                        <Post  className='a' sublink='/cybersecurity'  text='Cybersecurity'/>
                        <Post  className='a' sublink='/product-digital'  text='Product and Design'/>
                        <Post  className='a' sublink='/business-automation'  text='Business Automation'/>
                        <Post  className='a' sublink='/infrastructure'  text='Infrastructure'/>
                    </div>

                    <style jsx>{`
                        .dropbtn { 
                        display: flex;
                        justify-content: space-between;
                        align-items: center;                      
                        border: 2px solid #208FFF !important;
                        color: #208FFF;
                        padding: 10px;
                        font-size: 16px;
                        border: none;
                        cursor: pointer;
                        border-radius: 5px;
                        width: 200px;
                        }

                        .dropbtn:hover, .dropbtn:focus {
                        background-color: #2980B9;
                        }

                        .dropdown {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        }

                        .dropdown-content {
                        display: none;
                        position: absolute;
                        background-color: #f1f1f1;
                        min-width: 160px;
                        overflow: auto;
                        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                        z-index: 1;
                        }

                        .dropdown-content a {
                        color: black;
                        padding: 12px 16px;
                        text-decoration: none;
                        display: block !important;

                        }

                        .show a:hover {background-color: #ddd;}

                        .show {
                           display: flex;
                           flex-direction: column;
                           position: absolute;
                            width: 200px;
                            border: 1px solid #208FFF !important;
                            border-radius: 5px;
                            z-index: 11;
                         top: 42px;
                         background-color: #111517 ;

                        }
                
                        .show a{
                            display: block;
                            padding: 5px 20px;
                        }
                        `}</style>
                    </div>
        )
    }
}

export default Dropdown

function Post(props) {
    return (
    <>
        <Link href={`/devops?sublink=${props.sublink}`}>                   
                           <a> {props.text} </a>                  
                </Link>
                <style jsx>{`
                   a :hover {
                       background-color: #ddd;
                   }
                   a{
                       padding: 5px 10px;
                       color: white
                   }
                    `}</style>
                </>)
                }