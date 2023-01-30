import Navbar from "../Comonent/User/Navbar/Nav";
import ContactUs from "../Comonent/User/Contact/Contact";
function Home() {
    return (
        <div>
            <div className="backImg">
                <Navbar />
            </div> 
            <ContactUs />
        </div>
    );
}

export default Home;