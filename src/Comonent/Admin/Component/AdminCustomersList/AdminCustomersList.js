import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminCustomersList(props) {

    const [customers, setCustomers] = useState([])
    const Contact = []
     async function CustomerApi() {
        props.setProgress(20)
        await axios.get('http://144.91.86.203/apiresturant/Customers?rid=0')
        .then((res) => {
            props.setProgress(50)
            setCustomers(res.data)
            props.setProgress(80)
        })
        props.setProgress(100)

    }



    useEffect(() => {
        CustomerApi()
    }, [])


    const handleContact = (e) => {
        let ID = e.target.parentElement.id;
        console.log(ID);
        Contact.map((element) => {
            if (ID == element.Id) {
                let contactEdit = localStorage.getItem("Contacts");
                let contactObj = [];
                if (contactEdit == null) {
                    contactObj = [];
                }
                else {
                    contactObj = [];
                    localStorage.setItem("Contacts", JSON.stringify(contactObj))
                }
                let contactInfo = {
                    id: element.Id,
                    sName: element.serviceName,
                    name: element.name,
                    contact: element.contact,
                    email: element.email,
                    message: element.message
                }
                contactObj.push(contactInfo)
                localStorage.setItem("Contacts", JSON.stringify(contactObj))
                console.log(contactObj);
            }
        })
    }
    return (
        <>
            <section className="details" id="contact">
                <div className="adminDetails">
                    <div className="data-header">
                        <h2 className="heading">Recent Contact</h2>
                        {/* <Link to="/Admin/CreateBanner" className="btn">Create New</Link> */}
                    </div>

                    {/* <!-- Table --> */}
                    <table>
                        <thead>
                            <tr>
                                {/* <td>Id</td> */}
                                {/* <td>CustomerId</td> */}
                                {/* <td>CityId</td> */}
                                {/* <td>RestaurantId</td> */}
                                <td>Name</td>
                                <td>Email</td>
                                <td>Contact</td>
                                <td>Address</td>
                                <td>LandMark</td>
                                <td>Date</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Data Item Start --> */}
                            {customers.map((element, index) => {
                                return <tr key={index}>
                                    {/* <td>{index}</td> */}
                                    {/* <td>{element.customerId}</td> */}
                                    {/* <td>{element.fkCityId}</td> */}
                                    {/* <td>{element.fkRestaurantId}</td> */}
                                    <td>{element.name}</td>
                                    <td className="linehight" style={{ minWidth: "300px" }}>{element.email}</td>
                                    <td>{element.contact}</td>
                                    <td>{element.address}</td>
                                    <td>{element.landMark}</td>
                                    <td>{element.dateAdded}</td>
                                    <td><span className="status Active">{element.isActive.toString()}</span></td>

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

export default AdminCustomersList;