// import { useState } from "react";
// import ReviewForm from "./ReviewForm";
import './Review.css'

function Review() {


    // const date = new Date();
    let longDate3 = new Date();

    const ISO = longDate3.toLocaleDateString()

    return (
        <div>

            <div className="review_detail_container">
                <div className="review_item">
                    <div className="review_star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        {/* <i class="fa-solid fa-star"></i> */}
                    </div>
                    <div className="description">
                        <p>I forwarded my CV to their whatsapp and forget about that, but after a week got a call from their company and now doing a job as a manager in Rawalpindi.</p>
                    </div>
                    <div className="review_item_detail">
                        <h4 className="review_name">Rehmat</h4>
                        <p className="review_date">{ISO}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Review;