import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
    return (
        <nav className='navbar bg-dark'>
            <div className="w-75 mx-auto">
            <NavLink className="navlink text-white fs-5 mx-4" to="/home">Home</NavLink>
            <NavLink className="navlink text-white fs-5 mx-4" to="/courses">Courses</NavLink>
            <NavLink className="navlink text-white fs-5 mx-4" to="/services">Services</NavLink>
            <NavLink className="navlink text-white fs-5 mx-4" to="/about">About Us</NavLink>
            <NavLink className="navlink text-white fs-5 mx-4" to="/login">Log In</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;