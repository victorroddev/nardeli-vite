
import { useState, useEffect, useRef } from 'react';
import logo from '../../img/logos/nardeli-icon.png';
import './styles.css';
import Menu from '../Menu';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    };

    // --- NUEVA FUNCIÓN ---
    // Función dedicada a cerrar el menú
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect((()=> {
        const handleClickOutside = (event) => {
            if(menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu(); // Usamos la nueva función aquí también para claridad
            }
        };
        if(isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return() => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }), [isMenuOpen]);

    return(
        <div className='navbar' ref={menuRef}>
            <div className='logo-container'>
                <img className="logo" src={logo} alt="Logo Nardeli" />
            </div>
                <button 
                className={`menu-button ${isMenuOpen ? 'is-active': ''}`} 
                aria-label='toggle menu' 
                onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                </button>
                <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />
        </div>
    );
};

export default Navbar;