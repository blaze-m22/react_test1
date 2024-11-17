import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideNav = ({ isVisible, toggleSidebar }) => {
    const activepage = useLocation();
    const paths = [
        { path: '/', label: 'Home', imgSrc: 'https://img.icons8.com/material-rounded/24/ffffff/home.png' },
        { path: '/ourservices', label: 'Our Services', imgSrc: 'https://img.icons8.com/ios-glyphs/24/ffffff/restaurant-pickup.png' },
        { path: '/aboutus', label: 'About Us', imgSrc: 'https://img.icons8.com/ios/24/ffffff/about.png' },
        { path: '/clients', label: 'Clients', imgSrc: 'https://img.icons8.com/dotty/24/ffffff/search-client.png' },
        { path: '/contactus', label: 'Contact Us', imgSrc: 'https://img.icons8.com/ios/24/ffffff/contact-card.png' },
    ];

    return (
        <div className="sidenav" id="sidenav" style={{ display: 'flex' }}>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: isVisible ? '300px' : '0',
                    height: '100vh',
                    backgroundColor: '#000033',
                    overflowX: 'hidden',
                    transition: '0.3s',
                    paddingRight: isVisible ? '10px' : '0',
                    color: 'white',
                    zIndex: 2,
                }}
            >
                <a
                    href="#!"
                    onClick={toggleSidebar}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '20px',
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginLeft: '50px',
                        color: '#818181',
                    }}
                >
                    &times;
                </a>
                <a href="#"><img className="wlogo" alt="logo" src="images/wlogo.png" style={{ marginTop: '2vh' }} /></a>
                <ul className="navlinks" onClick={toggleSidebar}>
                    {paths.map((path) => (
                        <Link
                            to={path.path}
                            className={activepage.pathname === path.path ? 'active' : ''}>
                            <img alt="" src={path.imgSrc} />
                            {path.label}
                        </Link>
                    ))}
                </ul>

                <div className="socialmedias" style={{ marginTop: '50vh' }}>
                    <a><img title="Facebook" alt="" src="https://img.icons8.com/ios-filled/28/ffffff/facebook-new.png" /></a>
                    <a><img title="Instagram" alt="" src="https://img.icons8.com/ios-glyphs/28/ffffff/instagram-new.png" /></a>
                    <a><img title="Youtube" alt="" src="https://img.icons8.com/ios-filled/28/ffffff/youtube-play.png" /></a>
                </div>
            </div>
        </div>
    )
}

export default SideNav;