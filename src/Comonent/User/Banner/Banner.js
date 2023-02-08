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








            {/* <div className="slideshow-container">
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src={img1} style={{width: "100%"}} alt=""/>
                    <div className="text">Caption Text</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img src={img2} style={{width: "100%"}} alt=""/>
                    <div className="text">Caption Two</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img src={img3} style={{width: "100%"}} alt=""/>
                    <div className="text">Caption Three</div>
                </div>

            </div>
            <br />

                <div style={{textAlign: "center"}}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </> */}