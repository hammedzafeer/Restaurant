import { Link } from "react-router-dom";

function AdminReviews
    () {
    const Reviews = [
        {
            Id: "0",
            name: "Sania",
            email: "test@gmail.com",
            comment: "I would recommend this agency to anyone . Very professional and reliable consultants. They are quick to respond to messages and queries.",
            star: "4",
            dateTime: "2023-02-01T02:39",
            status: "Active",
        },
        {
            Id: "1",
            name: "Waseem Ali",
            email: "waseem@gmail.com",
            comment: "The staf is very good and they have great experience.",
            star: "3",
            dateTime: "2023-02-13T08:11",
            status: "Active",
        },
        {
            Id: "2",
            name: "Yasir",
            email: "yasir@gmail.com",
            comment: "your services is very good",
            star: "4",
            dateTime: "2023-02-16T08:39",
            status: "Deactive",
        }
    ]

    const handleReview = (e) => {
        let ID = e.target.parentElement.id;
        console.log(ID);
        Reviews.map((element) => {
           if (ID === element.Id) {
                let reviewEdit = localStorage.getItem("Reviews");
                let reviewObj = [];
                if (reviewEdit == null) {
                    reviewObj = [];
                }
                else {
                    reviewObj = [];
                localStorage.setItem("Reviews", JSON.stringify(reviewObj))
                    // reviewObj = JSON.parse(reviewEdit)
                }
                let reviewInfo = {
                    id: element.Id,
                    name: element.name,
                    comment: element.comment,
                    email: element.email,
                    stars: element.star,
                    date: element.dateTime,
                    status: element.status

                }
                reviewObj.push(reviewInfo)
                localStorage.setItem("Reviews", JSON.stringify(reviewObj))
                console.log(reviewObj);
            }
        })
    }

    return (
        <>
            {/* <!-- ====== Datalist Items Start ====== --> */}
            <section className="details" id="contact">
                <div className="adminDetails">
                    <div className="data-header">
                        <h2 className="heading">Review</h2>
                        <Link to="/Admin/Reviews/CreateReview" className="btn">Create New</Link>
                    </div>

                    {/* <!-- Table --> */}
                    <table>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Comment</td>
                                <td>Stars</td>
                                <td>Date Time</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Data Item Start --> */}
                            {Reviews.map((element, index) => {
                                return <tr key={index}>
                                    <td>{element.Id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.email}</td>
                                    <td style={{ minWidth: "400px" }}>{element.comment}</td>
                                    <td>{element.star}</td>
                                    <td>{new Date(element.dateTime).toLocaleDateString()} - {new Date(element.dateTime).toLocaleTimeString()}</td>
                                    <td><span className={`status ${element.status}`}>{element.status}</span></td>
                                    {/* <!--z dropdown --> */}
                                    <td className="drop_menu"><span><ion-icon name="caret-down-circle-outline"></ion-icon>
                                        <ul>
                                            <li id={index}><Link to="/Admin/Review/EditReview" onClick={handleReview}>Edit</Link></li>
                                            <li id={index}><Link to="/Admin/Review/DetailReview" onClick={handleReview}>Detail</Link></li>
                                            <li><Link to="/">Delete</Link></li>
                                        </ul>
                                    </span>
                                    </td>
                                </tr>
                            })}

                            {/* <!-- Data Item End --> */}

                        </tbody>
                    </table>
                </div>
            </section>


            {/* <!-- ====== Datalist Items End ====== --> */}
        </>
    );
}

export default AdminReviews
    ;