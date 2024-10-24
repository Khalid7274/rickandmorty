import React from 'react';
import '../components/styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                {/* <h1 className='app_title'>The Rick and Morty</h1>   */}
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/episodes">Episodes</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
