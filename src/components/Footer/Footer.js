import React from 'react'
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Team</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get Help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Order Status</a></li>
                            <li><a href="#">Payment Options</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Online Courses</h4>
                        <ul>
                            <li><a href="#">Banking</a></li>
                            <li><a href="#">SSC</a></li>
                            <li><a href="#">Railway</a></li>
                            <li><a href="#">Defence</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                            <a href="#"><i className="fab fa-instagram-square"></i></a>
                            <a href="#"><i className="fab fa-twitter-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
