import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer bg-dark text-white p-3">
            <div className="row container mx-auto pt-4">
                <div className="col-4">
                    <h4>Our Other Courses</h4>
                    <ul className="text-start mt-4">
                        <li>Speaking Expert</li>
                        <li>Learning English Properly</li>
                        <li>Awesome Handwriting</li>
                        <li>Improve Listening Skill</li>
                        <li>Fast Reading</li>
                    </ul>
                </div>

                <div className="col-4">
                    <h4>Get Connected In Social Media</h4>
                    <ul className="text-start mt-4">
                        <li><a href="3">Facebook</a></li>
                        <li><a href="3">Twitter</a></li>
                        <li><a href="3">Instagram</a></li>
                        <li><a href="3">LinkedIn</a></li>
                        <li><a href="3">Discord</a></li>
                    </ul>    
                </div>
                <div className="col-4">
                    <h4>Contact Us</h4>
                    <div className=' mt-4'>
                        <p>Email: myemail@gmail.com</p>
                        <p>Phone: 34865894365</p>
                        <p>Fax: 49357943</p>
                    </div>
                </div>
            </div>
            <div className="border-top pt-3">
                 <p>&copy; copyright 2021. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;