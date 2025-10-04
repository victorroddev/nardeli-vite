// src/components/FixedButtons/index.jsx

import React, { useState, useEffect } from 'react';
import { FaPhone, FaArrowUp } from 'react-icons/fa'; // Importa los iconos que necesitas
import './styles.css'; // Estilos para este componente

const FixedButtons = ({ phoneNumber }) => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    // Función para ir arriba de la página
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    };

    // Monitorea el scroll para mostrar/ocultar el botón "ir arriba"
    useEffect(() => {
        const handleScroll = () => {
            // Muestra el botón si el usuario ha bajado más de 300px
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Función de limpieza para remover el event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // El array vacío asegura que se ejecute solo una vez al montar y desmontar

    return (
        <div className="fixed-buttons-container">
            {/* Botón de teléfono */}
            {phoneNumber && ( // Solo se muestra si se proporciona un número
                <a 
                    href={`tel:${phoneNumber}`} 
                    className="fixed-button phone-button"
                    aria-label="Llamar por teléfono"
                >
                    <FaPhone />
                </a>
            )}

            {/* Botón de "Ir arriba" */}
            {showScrollButton && (
                <button 
                    onClick={scrollToTop} 
                    className="fixed-button scroll-to-top-button"
                    aria-label="Ir arriba de la página"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default FixedButtons;