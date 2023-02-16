import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateObj from "../DateObj/Date";

function AdminRider() {
    const [Dates, setDates] = useState()

    const RiderList = [
        {
            "riderId": 1,
            "fkCityId": 1,
            "fkRestaurantId": 5,
            "fName": "abdul",
            "lName": "basir",
            "dob": "2004-12-27T10:50:19.1746567",
            "gender": "m",
            "cnic": "15306-6322934-7",
            "contactNo": "03001231230",
            "email": "abc@gmail.com",
            "imgUrl": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "cnicFront": "https://i.pinimg.com/564x/88/d2/07/88d207b28746221eaf22a8523469599a.jpg",
            "cnicBack": "https://online.theunitedinsurance.com/Admin_files/Images/cnic-back-side.jpg",
            "rideName": "string",
            "rideColor": "string",
            "rideModel": "string",
            "riderLicense": "https://www.shutterstock.com/image-vector/flat-man-driver-license-plastic-260nw-645891550.jpg",
            "bikePapers": "https://www.motorcyclevalley.com/images/media/1618985909_172314381_892056961588189_1136016952267616446_n.jpg",
            "dateAdded": "2022-12-27T14:50:19.1746384",
            "isActive": true,
            "isVerified": true,
            "isDeleted": false,
            "restaurant": {
                "restaurantId": 0,
                "fkCityId": 0,
                "name": "",
                "ownerName": "",
                "email": "",
                "primaryContact": "",
                "secondaryContact": "",
                "logo": "",
                "address": "",
                "landMark": "",
                "dateAdded": "2023-02-14T10:15:38.4398269+00:00",
                "isActive": true,
                "isDeleted": false
            }
        },
        {
            "riderId": 2,
            "fkCityId": 1,
            "fkRestaurantId": 5,
            "fName": "AbdulBasir",
            "lName": "Arbab",
            "dob": "2004-12-27T11:13:55.7180095",
            "gender": "m",
            "cnic": "15306-6322934-7",
            "contactNo": "034755566333",
            "email": "co08979@gmail.com",
            "imgUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "cnicFront": "https://i.pinimg.com/564x/88/d2/07/88d207b28746221eaf22a8523469599a.jpg",
            "cnicBack": "https://online.theunitedinsurance.com/Admin_files/Images/cnic-back-side.jpg",
            "rideName": "string",
            "rideColor": "string",
            "rideModel": "string",
            "riderLicense": "https://www.shutterstock.com/image-vector/flat-man-driver-license-plastic-260nw-645891550.jpg",
            "bikePapers": "https://www.motorcyclevalley.com/images/media/1618985909_172314381_892056961588189_1136016952267616446_n.jpg",
            "dateAdded": "2022-12-27T15:13:55.7179962",
            "isActive": true,
            "isVerified": true,
            "isDeleted": false,
            "restaurant": {
                "restaurantId": 0,
                "fkCityId": 0,
                "name": "",
                "ownerName": "",
                "email": "",
                "primaryContact": "",
                "secondaryContact": "",
                "logo": "",
                "address": "",
                "landMark": "",
                "dateAdded": "2023-02-14T10:15:38.4904471+00:00",
                "isActive": true,
                "isDeleted": false
            }
        }
    ]
    useEffect(() => {
        RiderList.map((ele) => {
            let date = ele.dateAdded;
            setDates(date)
        })
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
                                    <DateObj Dates = {element.dateAdded}/>
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