import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Orders } from "./OrderApi";
function AdminNewOrder() {

    // // console.log(Orders);
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
                        <h2 className="heading">New Orders List</h2>
                        <Link to="/Admin/OrderList" className="btn">Back</Link>
                    </div>

                    {/* <!-- Table --> */}
                    <table>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>OrderId</td>
                                <td>Price</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Contact</td>
                                <td>Address</td>
                                <td>LandMark</td>
                                <td>Date</td>

                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Data Item Start --> */}
                            {Orders.map((element, index) => {
                                if (element.orderStatus == "w") {
                                    return <tr key={index}>
                                        <td>{index}</td>
                                        <td>{element.orderId}</td>
                                        <td>{element.productsAmount + element.deliveryCharges + element.tax}</td>
                                        <td>{element.customer.name}</td>
                                        <td>{element.customer.email}</td>
                                        <td>{element.customer.contact}</td>
                                        <td style={{ minWidth: "300px" }}>{element.customer.address}</td>
                                        <td>{element.customer.landmark}</td>
                                        <td>{element.customer.dateAdded}</td>



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
                                }

                            })}

                            {/* <!-- Data Item End --> */}

                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

export default AdminNewOrder;