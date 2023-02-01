import Navbar from "../Comonent/User/Navbar/Nav";
import ContactUs from "../Comonent/User/Contact/Contact";
import FooterComponent from '../Comonent/User/Footer/Footer'

function Home() {
    return (
        <div>
            <div className="backImg">
                <Navbar />
            </div> 
            <ContactUs />
            <FooterComponent />
        </div>
    );
}

export default Home;