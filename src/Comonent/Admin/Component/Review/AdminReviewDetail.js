import { Link } from "react-router-dom";

import '../Service/services.css'
function AdminDetailReview() {

    
    let reviewEdit = localStorage.getItem("Reviews");
    let reviewObj = [];
    if (reviewEdit == null) {
        reviewObj = [];
    }
    else {
        reviewObj = JSON.parse(reviewEdit)
    }
    let rName = reviewObj[0].name;
    let rEmail = reviewObj[0].email;
    let rStar = reviewObj[0].stars;
    let rDate = reviewObj[0].date;
    let rComment = reviewObj[0].comment;
    let rStatus = reviewObj[0].status;

    const backReview = () => {
        reviewObj = []
        localStorage.setItem("Reviews", JSON.stringify(reviewObj))
    }
    return (
        <section className="details" >
            <div className="adminDetails">
                <div className="data-header">
                    <h2 className="heading">Detail Reviews</h2>
                    <Link to="/Admin/Reviews" onClick={backReview} className="btn">Back</Link>
                </div>
                <div className='detail_services'>
                    <div className="detail_flex">
                        <h2>Name</h2>
                        <p>{rName}</p>
                    </div>
                    <div className="detail_flex">
                        <h2>Email</h2>
                        <p>{rEmail}</p>
                    </div>
                    <div className="detail_flex">
                        <h2>Comment</h2>
                        <p>{rComment}</p>
                    </div>
                    <div className="detail_flex">
                        <h2 htmlFor="Image">Stars</h2>
                        <p>{rStar}</p>
                    </div>
                    <div className="detail_flex">
                        <h2>Date Time</h2>
                        <p>{rDate}</p>
                    </div>
                    <div className="detail_flex">
                        <h2>Status</h2>
                        <p>{rStatus}</p>
                    </div>
                    {/* <button className='btn'>Edit</button> */}
                    <Link to="/Admin/Review/EditReview">
                        <button className='btn'>Edit</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default AdminDetailReview;