import res1 from '../../../Img/res1.jpg'
import res2 from '../../../Img/res2.jpg'
import res3 from '../../../Img/res3.jpg'
import './Banner.css'
import HeroSlider from 'hero-slider/dist/HeroSlider'
import { Slide } from 'hero-slider'


function Banner() {

    return (
        <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange" ,previousSlide, nextSlide)}
        onChange={nextSlide => console.log("onchange", nextSlide)}
        onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
        style={{
            backgroundColor: "rgba(0,0,0,0.33)"
        }}
        settings={{
            slidingDuraction: 250,
            slidingDelay: 100,
            shouldAutoplay: true,
            shouldDisplayButtons: true,
            autoplayDuration: 5000,
            height: "100vh"
        }}>
            <Slide background={{
                backgroundImage: res1,
                backgroundAttachmet: "fixed"
            }} />
            
            <Slide background={{
                backgroundImage: res2,
                backgroundAttachmet: "fixed"
            }} />
            
            <Slide background={{
                backgroundImage: res3,
                backgroundAttachmet: "fixed"
            }} />
            

        </HeroSlider>
    );
}

export default Banner;