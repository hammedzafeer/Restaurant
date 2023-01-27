import Navbar from "../Comonent/Navbar/Nav";
import ContactUs from "../Comonent/Contact/Contact";
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