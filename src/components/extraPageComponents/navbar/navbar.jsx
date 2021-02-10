import React from 'react';
import Button from '../Button/button';
import './navbar.scss';
import NavbarItem from './navbarItem/navbarItem';
import logo from './images/logo.svg';
import logo1 from './images/logo-secondary.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { rightDropdownAction, leftDropdownAction, resetDropdownAction } from '../../../redux/navbar/navbar.actions';

const Navbar = ({ navbarColours, rightDropdownDispatch, rightDropdown, leftDropdown, leftDropdownDispatch }) => {
    const toggleRightDropdown = () => {
        if (rightDropdown) {
            return rightDropdownDispatch(false)
        }
        return rightDropdownDispatch(true)
    }
    const toggleLeftDropdown = () => {
        if (leftDropdown) {
            return leftDropdownDispatch(false)
        }
        return leftDropdownDispatch(true)
    }
    return (
        <div className={`navbar ${navbarColours === "secondary" ? 'secondary' : ''}`}>
            <section className="navbar-left">
                <section className="navbar-left-dropdown">
                    <img src={navbarColours !== "secondary" ? logo : logo1} alt="" onClick={toggleLeftDropdown} />
                    {leftDropdown &&
                        <section className="navbar-left-dropdown-menu">
                            <Link className="navbar-left-link" to="/">ProjectOS</Link>
                            <Link className="navbar-left-link" to="/">ProjectOS</Link>
                            <Link className="navbar-left-link" to="/">ProjectOS</Link>
                            <Link className="navbar-left-link" to="/">ProjectOS</Link>
                            <Link className="navbar-left-link" to="/">ProjectOS</Link>
                        </section>
                    }
                </section>
                <NavbarItem navbarSecondary={navbarColours === "secondary"} />
                <Link className="navbar-left-link" to="/">ProjectOS</Link>
            </section>
            <section className="navbar-right">
                <section className="navbar-right-top">
                    <section className="navbar-right-top pc-only">
                        <NavbarItem text="About" />
                        <NavbarItem text="Licensing" />
                        <NavbarItem text="FAQ" />
                        <NavbarItem navbarSecondary={navbarColours === "secondary"} />
                        <NavbarItem text="Contact" />
                        <Button text="Get Demo" />
                    </section>
                    <section onClick={toggleRightDropdown} className="navbar-right-dropdown mobile-only">
                        <button>=</button>
                        {rightDropdown &&
                            <section className="navbar-right-dropdown-menu mobile-only">
                                <NavbarItem text="About" />
                                <NavbarItem text="Licensing" />
                                <NavbarItem text="FAQ" />
                                <NavbarItem text="Contact" />
                                <NavbarItem text="Get Demo" />
                                {/*  */}
                            </section>
                        }
                    </section>
                </section>
            </section>
        </div>
    );
};

const mapStateToProps = state => ({
    navbarColours: state.app.navbarColours,
    rightDropdown: state.navbar.rightDropdown,
    leftDropdown: state.navbar.leftDropdown,
})

const mapDispatchToProps = dispatch => ({
    rightDropdownDispatch: rightDropdown => dispatch(rightDropdownAction(rightDropdown)),
    leftDropdownDispatch: leftDropdown => dispatch(leftDropdownAction(leftDropdown)),
})
// resetDropdownDispatch: () => dispatch(resetDropdownAction())

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);