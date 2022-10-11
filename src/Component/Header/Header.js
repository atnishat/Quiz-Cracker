import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
       <nav className='link'>
       <h4> My Quizzz</h4>
        <div className='nav-links'>
        <Link to='/'>Topics</Link>
        <Link to='/statistic'>Statistic</Link>
        <Link to='/blog'>Blog</Link>
        </div>
       </nav>
    );
};

export default Header;