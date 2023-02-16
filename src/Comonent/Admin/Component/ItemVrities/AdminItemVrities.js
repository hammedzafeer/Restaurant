import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminItemVrities() {

    const ItemList = [
        {
            "itemVerityId": 1,
            "fkItemId": 120,
            "name": "Extra Suger",
            "addPrice": 50,
            "status": true,
            "isActive": true,
            "isDeleted": false,
            "dateAdded": "2022-12-28T09:40:28.107889",
            "item": {
                "itemId": 120,
                "fkRestaurantId": 7,
                "fkCategoryId": 45,
                "name": "Jalebi",
                "description": "Single Serving ",
                "imgUrl": "120-Jalebi-233147.jpg",
                "price": 495,
                "tax": 10,
                "status": true,
                "isActive": true,
                "isDeleted": false,
                "dateAdded": "2023-02-01T13:03:34.62619",
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
                    "dateAdded": "2023-02-14T09:15:44.8176075+00:00",
                    "isActive": true,
                    "isDeleted": false
                },
                "categry": {
                    "categoryId": 0,
                    "fkMenuId": 0,
                    "name": ""
                }
            }
        },
        {
            "itemVerityId": 2,
            "fkItemId": 120,
            "name": "Extra cheese ",
            "addPrice": 45,
            "status": true,
            "isActive": true,
            "isDeleted": false,
            "dateAdded": "2023-01-21T16:07:05.1244084",
            "item": {
                "itemId": 120,
                "fkRestaurantId": 7,
                "fkCategoryId": 45,
                "name": "Jalebi",
                "description": "Single Serving ",
                "imgUrl": "120-Jalebi-233147.jpg",
                "price": 495,
                "tax": 10,
                "status": true,
                "isActive": true,
                "isDeleted": false,
                "dateAdded": "2023-02-01T13:03:34.62619",
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
                    "dateAdded": "2023-02-14T09:15:44.8176075+00:00",
                    "isActive": true,
                    "isDeleted": false
                },
                "categry": {
                    "categoryId": 0,
                    "fkMenuId": 0,
                    "name": ""
                }
            }
        }
    ]

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
                        <h2 className="heading">Item Vrities</h2>
                        <Link to="/Admin/RestaurantCreate" className="btn">Create New</Link>
                    </div>

                    {/* <!-- Table --> */}
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Item Name</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Data Item Start --> */}
                            {ItemList.map((element, index) => {
                                return <tr key={index}>
                                    <td>{element.name}</td>
                                    <td>{element.addPrice}</td>
                                    <td>{element.item.name}</td>
                                    {/* <!--z dropdown --> */}
                                    <td className="drop_menu" style={{textAlign: "left"}}><span><ion-icon name="caret-down-circle-outline"></ion-icon>
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

export default AdminItemVrities;