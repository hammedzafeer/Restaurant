import { useState } from "react";
import { Link } from "react-router-dom";
import '../Banner/Banner.css'
import DateObj from "../DateObj/Date";

function AdminContact() {



    const Contact = [
        {
            Id: "0",
            serviceName: "Waiter",
            name: "Haseeb Ullah	",
            contact: "03149019205",
            email: "haseebomare12@gmail.com	",
            message: "I Want To Do Job as Waiter In Restaurant, Cafe,Hotel, At Peshawar Iam An Intermediate I Can Speak in English,Urdu,pashto,Farsi Iam 21 Years Old.",
            date: "2023-02-14T10:11:38.4904471+00:00"
        },
        {
            Id: "1",
            serviceName: "Chef",
            name: "rafia",
            contact: "03129860097",
            email: "rafiamaryam001@gmail.com",
            message: "I need 2 chefs and 4 waiters",
            date: "2023-02-14T10:15:38.4904471+00:00"
        },
        {
            Id: "2",
            serviceName: "Restaurant Manager",
            name: "M Nawaz rana	",
            contact: "03327841513",
            email: "rananawaz_911@yahoo.com",
            message: "Experience 22 years in pizza Hut pizza max pizza crust pizza next",
            date: "2023-02-14T10:15:38.4904471+00:00"
        },
        {
            Id: "3",
            serviceName: "Dish washer",
            name: "Muhammad Faheem",
            contact: "03035975265",
            email: "faheemkhankpk92@gmail.com",
            message: "Urgently need jobs",
            date: "2023-02-14T10:15:38.4904471+00:00"
        }
    ]


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
            {/* <!-- ====== Datalist Items Start ====== --> */}
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
                                <td>Id</td>
                                <td>Service Name</td>
                                <td>Name</td>
                                <td>Contact</td>
                                <td>Email</td>
                                <td>Message</td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Data Item Start --> */}
                            {Contact.map((element, index) => {
                                return <tr key={index}>
                                    <td>{element.Id}</td>
                                    <td style={{ minWidth: "250px" }}>{element.serviceName}</td>
                                    <td>{element.name}</td>
                                    <td>{element.contact}</td>
                                    <td style={{ minWidth: "250px" }}>{element.email}</td>
                                    <td className="linehight" style={{ minWidth: "400px" }}>{element.message}</td>
                                    {/* <td>{element.date}</td> */}
                                    <DateObj Dates={element.date} />
                                    {/* <!--z dropdown --> */}
                                    <td className="drop_menu"><span><ion-icon name="caret-down-circle-outline"></ion-icon>
                                        <ul>
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

export default AdminContact;