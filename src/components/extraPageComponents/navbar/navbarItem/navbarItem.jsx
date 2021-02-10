import React from 'react';
import { Link } from 'react-router-dom';
import './navbarItem.scss';

const NavbarItem = ({text,navbarSecondary}) => {
    return (
        <div className="navbar-item">
            {text?<Link className="navbar-item-link" to={`${text.toLowerCase()}`}>{text}</Link>:<div className={`${!navbarSecondary?'border-left':'border-left-secondary'}`}></div>}
        </div>
    );
};

export default NavbarItem;