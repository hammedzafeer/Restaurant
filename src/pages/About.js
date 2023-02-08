import AboutComponenet from "../Comonent/User/About/AboutComponent";
import Navbar from "../Comonent/User/Navbar/Nav";
import FooterComponent from '../Comonent/User/Footer/Footer'
import Progress from "../Comonent/User/ProgressBar/progress";


function About() {
    return (
        <>
        <Progress />
            <Navbar />
            <div className="about_container">
                <AboutComponenet />
            </div>
            <FooterComponent />

        </>
    );
}

export default About;