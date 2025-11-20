// src/components/Menu/index.js

import './styles.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

// --- MODIFICACIÓN AQUÍ ---
// Recibimos la nueva prop `closeMenu`
const Menu = ({ isOpen, closeMenu }) => {
    return (
        <div className={`menu ${isOpen ? 'menu-visible' : 'menu'}`}>
            <ul className={`links ${isOpen ? 'links-visible' : 'links'}`}>
                {/* --- MODIFICACIÓN AQUÍ --- */}
                {/* Añadimos el evento onClick a cada enlace */}
                <li><a href="#FAQ" onClick={closeMenu} className='menu-link'>Preguntas frecuentes</a></li>
                <div className='divider-link'></div>
                <li><a href="#Contact" onClick={closeMenu} className='menu-link'>Contacto</a></li>
                <div className='divider-link'></div>
                <li className='icons-container'>
                    <a className='rrss-navbar-icon' href="https://www.facebook.com" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
                        <FaFacebookF/>
                    </a>
                    <a className='rrss-navbar-icon' href="https://www.instagram.com" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a className='rrss-navbar-icon' href="https://www.tiktok.com" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
                        <FaTiktok />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;