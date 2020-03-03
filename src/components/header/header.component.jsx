import React from 'react'
import { Link } from 'react-router-dom';
import {Tick,GetDemo} from '../svgs/commsworth'
import './header.styles.scss'



const Header = () => (
    <div className="header">
        <Link to="/" className="option1">
            <p><Tick /></p>
        </Link>
        <Link to="#" className="option">
            <p>ProjectOS</p>
        </Link>
        <div className="options">
            <Link to="/about" className="option">
                About
            </Link >
            <Link to="/licensing" className="option">
                Licensing
            </Link >
            <Link to="/faq" className="option1">
                FAQ
            </Link >
            <Link to="/contact" className="option">
                Contact
            </Link>
            <Link to="/contact" className="option">
                <button className="demo">Get Demo</button>
            </Link>
        </div>
    </div>
)


export default Header;