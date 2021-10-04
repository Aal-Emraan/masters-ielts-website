import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    const style = {
        fontWeight: "bold"
    }
    return (
        <nav className='navbar bg-dark'>
            <div className="">
            <NavLink className="navlink text-white fs-5 mx-4 text-decoration-none" to="/home" activeStyle={style}>Home</NavLink>
            <NavLink className="navlink text-white fs-5 mx-4 text-decoration-none" to="/courses" activeStyle={style}>Courses</NavLink>
            <NavLink className="navlink text-white fs-5 mx-4 text-decoration-none" to="/services" activeStyle={style}>Services</NavLink>
            <NavLink className="navlink text-white fs-5 mx-4 text-decoration-none" to="/about" activeStyle={style}>About Us</NavLink>
            <NavLink className="navlink text-white fs-5 mx-4 text-decoration-none" to="/login" activeStyle={style}>Log In</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;