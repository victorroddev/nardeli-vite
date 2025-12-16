
import './styles.css';

const VideoSlide = ({ videoUrl }) => {
    return(
        <div className='hero-video-slide'>
            <video 
            className='background-video'
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            
            />

            <div className=''></div>
            <div className=''></div>
        </div>
    )
};

export default VideoSlide;