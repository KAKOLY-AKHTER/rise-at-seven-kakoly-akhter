import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-content">
                    {/* Logo */}
                    <div className="logo">
                        <h1>Rise at Seven</h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="desktop-menu">
                        <a href="#" className="nav-link">Services</a>
                        <a href="#" className="nav-link">Work</a>
                        <a href="#" className="nav-link">About</a>
                        <button className="cta-button">Get in touch</button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button 
                        className="hamburger"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu">
                    <a href="#" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Work</a>
                    <a href="#" onClick={() => setIsOpen(false)}>About</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;