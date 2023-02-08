import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function AdminEditReview() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

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
    const [Name, setName] = useState(rName)
    const [email, setEmail] = useState(rEmail)
    const [comment, setComment] = useState(rComment)
    const [stars, setStars] = useState(rStar)
    const [date, setDate] = useState(rDate)
    const [status, setStatus] = useState(rStatus)
    if(status == "Active") {
        setStatus(true)
    }
    else if (status == "Deactive"){
        setStatus(false)
    }

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleComment = (e) => {
        setComment(e.target.value);
    }
    const handleStar = (e) => {
        setStars(e.target.value);
    }
    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const backReview = () => {
        reviewObj = []
        localStorage.setItem("Reviews", JSON.stringify(reviewObj))
    }

    const handleStatus = () => {
    if(status == true) {
        setStatus(false)
    }
    else{
        setStatus(true)
    }
    }
    return (
        <section className="details" >
            <div className="adminDetails">
                <div className="data-header">
                    <h2 className="heading">Edit Review</h2>
                    <Link to="/Admin/Reviews" onClick={backReview} className="btn">Back</Link>
                </div>
                <div className='create_banner_container'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="banner_flex">
                            <label htmlFor="name">Banner Name</label>
                            <input type="text" id='name' onChange={handleName} value={Name} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="Email">Email</label>
                            <input type="email" id='Email' onChange={handleEmail} value={email} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="Comment">Comment</label>
                            <input type="text" id='Comment' onChange={handleComment} value={comment} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="stars">Stars</label>
                            <input type="number" id='stars' min={0} max={5} onChange={handleStar} value={stars} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="Date">Date Time</label>
                            <input type="datetime-local" id='Date' onChange={handleDate} value={date} />
                        </div>
                        <div className="banner_flex flex_status">
                            <label htmlFor="status">status</label>
                            <input type="checkbox" checked={status} id='status' style={{ width: "auto" }} onChange={handleStatus} />
                        </div>
                        <button className='btn'>Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AdminEditReview;