import './ReviewForm.css'
import review1 from '../../Img/review.jpg'
// import review2 from '../../Img/review1.jpg'
import { useState } from "react";

function ReviewForm() {
    const submitHandler = (e) => {
        e.preventDefault();
    }
    const [stars1, setStars1] = useState("regular");
    const [stars2, setStars2] = useState("regular");
    const [stars3, setStars3] = useState("regular");
    const [stars4, setStars4] = useState("regular");
    const [stars5, setStars5] = useState("regular");

    const star1 = () => {
        setStars1("solid");
        setStars2("regular");
        setStars3("regular");
        setStars4("regular");
        setStars5("regular");

    }
    const star2 = () => {
        setStars1("solid");
        setStars2("solid");
        setStars3("regular");
        setStars4("regular");
        setStars5("regular");
    }
    const star3 = () => {
        setStars1("solid");
        setStars2("solid");
        setStars3("solid");
        setStars4("regular");
        setStars5("regular");
    }
    const star4 = () => {
        setStars1("solid");
        setStars2("solid");
        setStars3("solid");
        setStars4("solid");
        setStars5("regular");
    }
    const star5 = () => {
        setStars1("solid");
        setStars2("solid");
        setStars3("solid");
        setStars4("solid");
        setStars5("solid");
    }
    return (
        <div className="review_form_container">
            <div className="about_heading review_heading">
                <h4>Add review</h4>
                <p>Your rating will help us to improve our services</p>
            </div>
            <div className='review_content'>
                <div className='review_1'>
                    <img src={review1} alt="" />
                </div>
                <div className='review_2'>
                    <form action="" onSubmit={submitHandler}>
                        <div className="review_star">
                            <i className={`fa-${stars1} fa-star`} onClick={star1}></i>
                            <i className={`fa-${stars2} fa-star`} onClick={star2}></i>
                            <i className={`fa-${stars3} fa-star`} onClick={star3}></i>
                            <i className={`fa-${stars4} fa-star`} onClick={star4}></i>
                            <i className={`fa-${stars5} fa-star`} onClick={star5}></i>
                            {/* <i class="fa-solid fa-star"></i> */}
                        </div>
                        <div><input type="text" name="" id="" placeholder="Enter your name" required /></div>
                        <div><input type="text" name="" id="" placeholder="Enter your email" required /></div>
                        <div><textarea name="" id="" cols="30" rows="10" placeholder="Enter your review about this business" required></textarea></div>
                        <div><button type="submit">Add Review</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ReviewForm;