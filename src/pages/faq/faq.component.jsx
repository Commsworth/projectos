import React from 'react';
import './faq.styles.scss';
import FAQDropdown from '../../components/faq-components/faq-dropdown/faq-dropdown.component';


class FAQ extends React.Component{
    constructor(){
        super();

    }

    render(){
        return(
            <div className="faq">
                <h1>Questions? Look here.</h1>
                <small><p>Can't find answers? Call us on <a href="#">(234) 818 0321 046</a> or <a href="#">info@commsworth.com</a></p></small>
                <div className="faq-flex"> 
                    <div className="sidebar">
                        <ul>
                            <li><h5>Table of Contents</h5></li>
                            <li><a href="#">General</a></li>
                            <li><a href="#">Licensing</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Company</a></li>
                        </ul>
                    </div>
                <div>
                    <FAQDropdown title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."/>
                    <FAQDropdown title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."/>
                    <FAQDropdown title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."/>
                    <FAQDropdown title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."/>
                </div>
                </div>
            </div>
        )
    }
}

export default FAQ;