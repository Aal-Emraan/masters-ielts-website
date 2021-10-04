import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <NavLink className="navlink" to="/home">Home</NavLink>
            <NavLink className="navlink" to="/courses">Courses</NavLink>
            <NavLink className="navlink" to="/services">Services</NavLink>
            <NavLink className="navlink" to="/about">About Us</NavLink>
            <NavLink className="navlink" to="/notfound">404 Not Found</NavLink>
        </div>
    );
};

export default NavBar;