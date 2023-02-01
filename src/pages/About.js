import AboutComponenet from "../Comonent/User/About/AboutComponent";
import Navbar from "../Comonent/User/Navbar/Nav";
import FooterComponent from '../Comonent/User/Footer/Footer'


function About() {
    return (
        <div className="about_container">
            <Navbar />
            <AboutComponenet />
            <FooterComponent />
        </div>
    );
}

export default About;