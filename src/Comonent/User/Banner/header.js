import './Banner.css'
import img1 from "../../../Img/about.jpeg"
import img2 from "../../../Img/res4.jpg"
import img3 from "../../../Img/back1.jpg"

function Header() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        // let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            console.log("OK");
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        //     // console.log("Active");
        // }
        slides[slideIndex - 1].style.display = "block";
        // dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 3000); // Change image every 2 seconds
    }
    return (
        <>
            <div className="slideshow-container">

                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src={img1} style={{ width: "100%" }} alt="" />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img src={img2} style={{ width: "100%" }} alt="" />
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img src={img3} style={{ width: "100%" }} alt="" />
                </div>

            </div>
            <br />




        </>
    );
}

export default Header;