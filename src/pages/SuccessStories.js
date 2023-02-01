import Navbar from "../Comonent/User/Navbar/Nav";
import Review from "../Comonent/User/Review/Review";
import ReviewForm from "../Comonent/User/Review/ReviewForm";
import FooterComponent from '../Comonent/User/Footer/Footer'

function Services() {
    return (
        <div>
            <Navbar />
            <div className="about_heading review_heading">
                <h3>Success Stories</h3>
                {/* <p>Your rating will help us to improve our services</p> */}
            </div>
            <Review />
            <Review />
            <Review />
            <ReviewForm />
            <FooterComponent />
        </div>
    );
}

export default Services;