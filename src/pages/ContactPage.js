import ContactUs from "../Comonent/User/Contact/Contact";
import Navbar from "../Comonent/User/Navbar/Nav";

function ContactPage() {
    return (
        <div className="contact_Page_container ">
            <Navbar />
            <div className="about_heading">
                <h2>Conatct US</h2>
                <p>please call at least 24 hours in advance for catering orders</p>
            </div>
            <ContactUs />
        </div>
    );
}

export default ContactPage;