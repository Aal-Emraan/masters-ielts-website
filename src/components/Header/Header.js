import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div className='header text-white bg-dark'>
            <div className="d-flex container justify-content-between align-items-center py-3">
                <div>
                <h1 className="border shadow px-3 py-2 rounded">Master's IELTS</h1>
                </div>
                <div>
                <NavBar></NavBar>
                </div>
            </div>
        </div>
    );
};

export default Header;