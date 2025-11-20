import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import './styles.css';
import aboutImg from '../../img/photo/nardeli-01.jpeg';
import cardTwo from '../../img/photo/card-two.webp'
import cardThree from '../../img/photo/card-three.webp';
import Card from './Card';
import map from '../../img/photo/maps-nardeli.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    // Creamos una referencia para el contenedor principal
    const containerRef = useRef(null);

    useGSAP(() => {
        // Creamos una línea de tiempo para secuenciar las animaciones
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current, // El contenedor activa la animación
                start: "top 80%", // La animación empieza cuando el 80% del componente es visible
                toggleActions: "play none none none" // La animación solo se ejecuta una vez
            }
        });

        // 1. La imagen aparece con un efecto de escala y fade-in
        tl.from('.about-us-img', { 
            opacity: 0, 
            scale: 0.8, 
            duration: 1, 
            ease: 'power3.out' 
        });

        // 2. Los degradados entran desde los lados (un poco después de que empieza la imagen)
        tl.from('.left-degrade', { 
            xPercent: -100, 
            opacity: 0, 
            duration: 0.8 
        }, "-=0.7"); // El "-=0.7" hace que esta animación empiece 0.7s antes de que la anterior termine

        tl.from('.right-degrade', { 
            xPercent: 100, 
            opacity: 0, 
            duration: 0.8 
        }, "<"); // El "<" hace que esta animación empiece al mismo tiempo que la anterior

        // 3. El párrafo aparece desde abajo
        tl.from('.about-us-paragraph', { 
            opacity: 0, 
            y: 50, 
            duration: 1.8,
            ease: 'power2.out'
        }, "-=0.5");


    }, { scope: containerRef }); // El scope ayuda a GSAP a buscar los elementos dentro de este componente

    return (
        // Añadimos la referencia al contenedor principal
        <div className='about-us-container' ref={containerRef}>
            {/* NO hay div duplicado, solo uno */}
            <div className='about-us-items-container'>
                <h2 className='title title-about'>Bienvenidos</h2>
                <p className='subtitle subtitle-about'>Centro de espectaculos de vanguardia</p>
                <div className='cards-container'>
                    <Card 
                        cardImage={map}
                        cardTitle='Ubicación Estrategica'
                        cardParagraph='Cerca del puente internacional Zaragoza'
                        cardButtonText='Ubicación'
                        class='card-button'
                    />
                    <Card 
                        cardImage={cardTwo}
                        cardTitle='Tecnología y Diseño'
                        cardParagraph='Pantallas OLED panorámicas, pista con robótico, y un diseño espectacular'                 
                    />

                    <Card 
                        cardImage={cardThree}
                        cardTitle='Ambiente Versatil'
                        cardParagraph='Lugar ideal para cenas, show, con artistas, bodas, quinceañeras, baby showers y mucho más'
                    />

                </div>
            </div>
        </div>
    );
}

export default About;