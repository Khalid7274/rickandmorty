import React from 'react';
import '../components/styles/footer.css'


const Footer = () => {
    return (
        <footer className='footer'>
            <p>&copy; 2023 Rick & Morty. All rights reserved.</p>
            <ul className='footer-links'>
                <li><a href="About">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
        </footer>
    );
}

export default Footer;
