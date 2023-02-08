import ContactUs from "../Comonent/User/Contact/Contact";
import Navbar from "../Comonent/User/Navbar/Nav";
import FooterComponent from '../Comonent/User/Footer/Footer'
import Progress from "../Comonent/User/ProgressBar/progress";

function ContactPage() {
    return (
        <>
        <Progress />
            <div className="contact_Page_container ">
                <Navbar />
                <div className="about_heading">
                    <h2>Conatct US</h2>
                    <p>Providig Restaurant Staff Services All Over Pakistan</p>
                </div>
                <ContactUs />
                <FooterComponent />
            </div>
        </>
    );
}

export default ContactPage;