import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateObj from "../DateObj/Date";

function AdminRider() {
    const [Dates, setDates] = useState()
    const [RiderList, setRiderList] = useState([])

    const Rider = async () => {
        await axios.get("http://144.91.86.203/apiresturant/Riders?rid=0")
            .then((res) => {
                setRiderList(res.data);
            })
        console.log("O");
    }


    useEffect(() => {
        Rider()
        // RiderList.map((ele) => {
        //     let date = ele.dateAdded;
        //     setDates(date)
        // })
    }, [])



    const handleContact = (e) => {
        // let ID = e.target.parentElement.id;
        // console.log(ID);
        // Contact.map((element) => {
        //     if (ID == element.Id) {
        //         let contactEdit = localStorage.getItem("Contacts");
        //         let contactObj = [];
        //         if (contactEdit == null) {
        //             contactObj = [];
        //         }
        //         else {
        //             contactObj = [];
        //             localStorage.setItem("Contacts", JSON.stringify(contactObj))
        //         }
        //         let contactInfo = {
        //             id: element.Id,
        //             sName: element.serviceName,
        //             name: element.name,
        //             contact: element.contact,
        //             email: element.email,
        //             message: element.message
        //         }
        //         contactObj.push(contactInfo)
        //         localStorage.setItem("Contacts", JSON.stringify(contactObj))
        //         console.log(contactObj);
        //     }
        // })
    }
    return (
        <>
            <section className="details" id="contact">
                <div className="adminDetails">
                    <div className="data-header">
                        <h2 className="heading">Rider List</h2>
                        {/* <Link to="/Admin/RestaurantCreate" className="btn">Create New</Link> */}
                    </div>

                    {/* <!-- Table --> */}
                    <table>
                        <thead>
                            <tr>
                                <td>Action</td>
                                <td>FName</td>
                                <td>LName</td>
                                <td>DOB</td>
                                <td>Gender</td>
                                <td>CNIC</td>
                                <td>ContactNo</td>
                                <td>Email</td>
                                <td>ImgUrl</td>
                                <td>CNICFrontImage</td>
                                <td>CNICBackImage</td>
                                <td>RideName</td>
                                <td>RideColor</td>
                                <td>RideModel</td>
                                <td>RideLicense</td>
                                <td>BikePapers</td>
                                <td>Date</td>


                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Data Item Start --> */}
                            {RiderList.map((element, index) => {
                                return <tr key={index}>
                                    <td><a className="btn">{element.fkRestaurantId == 0 ? "Assign Restaurat" : "Internal"}</a></td>
                                    <td>{element.fName}</td>
                                    <td>{element.lName}</td>
                                    {/* <td>{element.dob}</td> */}
                                    <DateObj Dates={element.dob} />
                                    <td>{element.gender == "m" ? "Male" : "Female"}</td>
                                    <td>{element.cnic}</td>
                                    <td>{element.contactNo}</td>
                                    <td>{element.email}</td>
                                    <td><img src={element.imgUrl} alt="" /></td>
                                    <td><img src={element.cnicFront} alt="" /></td>
                                    <td><img src={element.cnicBack} alt="" /></td>
                                    <td>{element.rideName}</td>
                                    <td>{element.rideColor}</td>
                                    <td>{element.rideModel}</td>
                                    <td><img src={element.riderLicense} alt="" /></td>
                                    <td><img src={element.bikePapers} alt="" /></td>
                                    <DateObj Dates={element.dateAdded} />
                                    {/* <td>{element.dateAdded}</td> */}

                                    {/* <!--z dropdown --> */}
                                    <td className="drop_menu"><span><ion-icon name="caret-down-circle-outline"></ion-icon>
                                        <ul>
                                            <li className="user-active"><Link to="/">Active</Link></li>

                                            <li id={element.Id}><Link to='/Admin/Contact/ContactEdit' onClick={handleContact}>Edit</Link></li>
                                            {/* <li id={element.Id}><a onClick={handleContact}>Edit</a></li> */}

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
        </>
    );
}

export default AdminRider;