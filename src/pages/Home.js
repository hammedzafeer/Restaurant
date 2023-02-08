import Navbar from "../Comonent/User/Navbar/Nav";
import ContactUs from "../Comonent/User/Contact/Contact";
import FooterComponent from '../Comonent/User/Footer/Footer'
import SliderBanner from "../Comonent/User/Banner/slider";
import Progress from "../Comonent/User/ProgressBar/progress";
// import Header from "../Comonent/User/Banner/header";

function Home() {
    document.onload = () => {
        console.log("OKKK")
    }
    return (
        <>
            <Progress />
            {/* <div className="backImg"> */}
            <Navbar />
            {/* </div>  */}
            {/* <Header /> */}
            <SliderBanner />
            <ContactUs />
            <FooterComponent />
        </>
    );
}

export default Home;