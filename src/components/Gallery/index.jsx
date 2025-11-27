
import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import './styles.css';

import img1 from '../../img/photo/gallery/gallery-1.webp';
import img2 from '../../img/photo/gallery/gallery-2.webp';
import img3 from '../../img/photo/gallery/gallery-3.webp';
import img4 from '../../img/photo/gallery/gallery-4.webp';
import img5 from '../../img/photo/gallery/gallery-5.webp';
import img6 from '../../img/photo/gallery/gallery-6.webp';
import img7 from '../../img/photo/gallery/gallery-7.webp';
import img8 from '../../img/photo/gallery/gallery-8.webp';
import img9 from '../../img/photo/gallery/gallery-9.webp';
import img10 from '../../img/photo/gallery/gallery-10.webp';

const Gallery = () => {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
            showHideAnimationType: 'fade',
        });
        lightbox.init();
        return () => {
            lightbox.destroy();
        };
    }, []);


    return(
        <div className='gallery-container' id='gallery'>
        <a 
        href={img1} 
        data-pswp-width="2455" 
        data-pswp-height="3372" 
        className="img-1"
        >
        <img src={img1} alt="Fotografia de evento" />
        </a>
        <a 
        href={img2} 
        data-pswp-width="2753" 
        data-pswp-height="3453" 
        className="img-2"
        >
        <img src={img2} alt="Anthea" />
        </a>
        <a 
        href={img3} 
        data-pswp-width="2067" 
        data-pswp-height="2593" 
        className="img-3"
        >
        <img src={img3} alt="Ruba" />
        </a>
        <a 
        href={img4} 
        data-pswp-width="2067" 
        data-pswp-height="2593" 
        className="img-4"
        >
        <img src={img4} alt="Caravana Ruba" />
        </a>
        <a 
        href={img5} 
        data-pswp-width="1901" 
        data-pswp-height="2131" 
        className="img-5"
        >
        <img src={img5} alt="Evento en Jabil" />
        </a>
        <a 
        href={img6} 
        data-pswp-width="2821" 
        data-pswp-height="1750" 
        className="img-6"
        >
        <img src={img6} alt="Anthea" />
        </a>
        <a 
        href={img7} 
        data-pswp-width="1367" 
        data-pswp-height="1877" 
        className="img-7"
        >
        <img src={img7} alt="Dia de las madres Valeo" />
        </a>
        <a 
        href={img8} 
        data-pswp-width="2269" 
        data-pswp-height="1464" 
        className="img-8"
        >
        <img src={img8} alt="Inaguracion Anthea" />
        </a>
        <a 
        href={img9} 
        data-pswp-width="2269" 
        data-pswp-height="1391" 
        className="img-9"
        >
        <img src={img9} alt="Dia de las madres Valeo" />
        </a>
        <a 
        href={img10} 
        data-pswp-width="2269" 
        data-pswp-height="1391" 
        className="img-9"
        >
        <img src={img10} alt="Dia de las madres Valeo" />
        </a>
        </div>
    )
};

export default Gallery;