import Navbar from "../Comonent/Navbar/Nav";
import Review from "../Comonent/Review/Review";
import ReviewForm from "../Comonent/Review/ReviewForm";

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
        </div>
    );
}

export default Services;