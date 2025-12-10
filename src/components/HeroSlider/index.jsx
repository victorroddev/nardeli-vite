import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import videoOne from '../../videos/video-nardeli-01.mp4';
import videoTwo from '../../videos/video-nardeli-02.mp4';
import videoThree from '../../videos/web-vid.mp4';

//Import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import VideoSlide from '../VideoSlide';
import HeroText from '../HeroText';
import './styles.css';

//Import swiper modules for use
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MdFlashAuto } from 'react-icons/md';

const HeroSlider = () => {
    return(
        <div className='hero-slider-container'>
            <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 50000,
                disableOnInteraction: false,
            }}
            pagination= {{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
            >

                <SwiperSlide>
                    <HeroText/>
                </SwiperSlide>

                <SwiperSlide>
                    <VideoSlide videoUrl={videoOne} />
                </SwiperSlide>

                <SwiperSlide>
                    <VideoSlide videoUrl={videoThree}/>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default HeroSlider;
