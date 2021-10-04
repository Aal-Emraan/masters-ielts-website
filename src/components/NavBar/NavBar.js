import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
    return (
        <nav className='navbar bg-dark'>
            <div className="w-75 mx-auto">
            <NavLink className="navlink text-white fs-5 mx-5" to="/home">Home</NavLink>
            <NavLink className="navlink text-white fs-5 mx-5" to="/courses">Courses</NavLink>
            <NavLink className="navlink text-white fs-5 mx-5" to="/services">Services</NavLink>
            <NavLink className="navlink text-white fs-5 mx-5" to="/about">About Us</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;