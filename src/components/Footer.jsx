import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            {/* Footer Section */}
            <footer className="footer-section">
                <div className="footer-container">
                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Get In Touch</h4>
                        <ul>
                            <li>Email: support@mocktests.com</li>
                            <li>Phone: +1 234 567 890</li>
                            <li>Location: 1234 Exam Lane, Study City</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="./../../img/facebook_icon.png" alt="Facebook" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="./../../img/twitter_icon.png" alt="Twitter" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="./../../img/Instagram_icon.png.webp" alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 MockTests. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
