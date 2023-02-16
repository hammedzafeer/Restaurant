import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DateObj from "../DateObj/Date";
function AdminCategoryList() {

    const Category = [
        {
            "categoryId": 45,
            "fkMenuId": 19,
            "name": "POPULAR ",
            "status": true,
            "isActive": true,
            "isDeleted": false,
            "dateAdded": "2023-02-01T13:00:42.069696",
            "menu": {
                "menuId": 19,
                "fkRestaurantId": 7,
                "name": "Lunch",
                "description": "Burgers, Fast Food, Fried chicken ",
                "status": true,
                "isActive": true,
                "isDeleted": false,
                "dateAdded": "2023-02-01T12:57:30.768667",
                "monStart": "2023-01-01T00:05:00",
                "monEnd": "2023-01-01T23:55:00",
                "tueStart": "2023-01-01T00:05:00",
                "tueEnd": "2023-01-01T23:55:00",
                "wedStart": "2023-01-01T00:05:00",
                "wedEnd": "2023-01-01T23:55:00",
                "thrStart": "2023-01-01T00:05:00",
                "thrEnd": "2023-01-01T23:55:00",
                "friStart": "2023-01-01T00:05:00",
                "friEnd": "2023-01-01T23:41:00",
                "satStart": "2023-01-01T00:05:00",
                "satEnd": "2023-01-01T23:55:00",
                "sunStart": "2023-01-01T00:05:00",
                "sunEnd": "2023-01-01T23:55:00",
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
                    "dateAdded": "2023-02-13T14:27:01.1584858+00:00",
                    "isActive": true,
                    "isDeleted": false
                }
            },
            "items": [
                {
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
                        "dateAdded": "2023-02-13T14:27:01.1611048+00:00",
                        "isActive": true,
                        "isDeleted": false
                    },
                    "categry": {
                        "categoryId": 0,
                        "fkMenuId": 0,
                        "name": ""
                    }
                },
                {
                    "itemId": 121,
                    "fkRestaurantId": 7,
                    "fkCategoryId": 45,
                    "name": "Papri chaat",
                    "description": "An all-time favorite Chaat,a combination of chickpeas, onion, potato ",
                    "imgUrl": "121-Paprichaat-233526.jpg",
                    "price": 400,
                    "tax": 15,
                    "status": true,
                    "isActive": true,
                    "isDeleted": false,
                    "dateAdded": "2023-02-01T13:25:25.49429",
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
                        "dateAdded": "2023-02-13T14:27:01.1611489+00:00",
                        "isActive": true,
                        "isDeleted": false
                    },
                    "categry": {
                        "categoryId": 0,
                        "fkMenuId": 0,
                        "name": ""
                    }
                },
                {
                    "itemId": 122,
                    "fkRestaurantId": 7,
                    "fkCategoryId": 45,
                    "name": "Samosa Chaat",
                    "description": "Potato samosa topped with chickpeas sauce,yogurt&salad with tangy",
                    "imgUrl": "122-SamosaChaat-233744.jpg",
                    "price": 440,
                    "tax": 10,
                    "status": true,
                    "isActive": true,
                    "isDeleted": false,
                    "dateAdded": "2023-02-01T13:27:52.170997",
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
                        "dateAdded": "2023-02-13T14:27:01.1611679+00:00",
                        "isActive": true,
                        "isDeleted": false
                    },
                    "categry": {
                        "categoryId": 0,
                        "fkMenuId": 0,
                        "name": ""
                    }
                },
                {
                    "itemId": 123,
                    "fkRestaurantId": 7,
                    "fkCategoryId": 45,
                    "name": "Gol Gappay",
                    "description": "Gol Gappay filled with potatoes,chickpeas&onion served with the bowl",
                    "imgUrl": "123-GolGappay-234120.jpg",
                    "price": 360,
                    "tax": 15,
                    "status": true,
                    "isActive": true,
                    "isDeleted": false,
                    "dateAdded": "2023-02-01T13:40:30.038073",
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
                        "dateAdded": "2023-02-13T14:27:01.1612045+00:00",
                        "isActive": true,
                        "isDeleted": false
                    },
                    "categry": {
                        "categoryId": 0,
                        "fkMenuId": 0,
                        "name": ""
                    }
                },
                {
                    "itemId": 130,
                    "fkRestaurantId": 7,
                    "fkCategoryId": 45,
                    "name": "Gujrati Puri",
                    "description": "Gol Gappay filled with papri,chickpeas,onion, potato &puffed rice ",
                    "imgUrl": "130-GujratiPuri-234816.jpg",
                    "price": 385,
                    "tax": 10,
                    "status": true,
                    "isActive": true,
                    "isDeleted": false,
                    "dateAdded": "2023-02-01T13:48:15.2303283",
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
                        "dateAdded": "2023-02-13T14:27:01.1612237+00:00",
                        "isActive": true,
                        "isDeleted": false
                    },
                    "categry": {
                        "categoryId": 0,
                        "fkMenuId": 0,
                        "name": ""
                    }
                },
                {
                    "itemId": 131,
                    "fkRestaurantId": 7,
                    "fkCategoryId": 45,
                    "name": "Bun Kabab",
                    "description": "Sub buns stuffed with kababs and topped with spicy chutney,sliced",
                    "imgUrl": "131-BunKabab-235003.jpg",
                    "price": 660,
                    "tax": 20,
                    "status": true,
                    "isActive": true,
                    "isDeleted": false,
                    "dateAdded": "2023-02-01T13:50:02.8531981",
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
                        "dateAdded": "2023-02-13T14:27:01.1612419+00:00",
                        "isActive": true,
                        "isDeleted": false
                    },
                    "categry": {
                        "categoryId": 0,
                        "fkMenuId": 0,
                        "name": ""
                    }
                }
            ]
        },
        {
            "categoryId": 46,
            "fkMenuId": 19,
            "name": "Burgers",
            "status": true,
            "isActive": true,
            "isDeleted": false,
            "dateAdded": "2023-02-01T13:01:25.5057767",
            "menu": {
                "menuId": 19,
                "fkRestaurantId": 7,
                "name": "Lunch",
                "description": "Burgers, Fast Food, Fried chicken ",
                "status": true,
                "isActive": true,
                "isDeleted": false,
                "dateAdded": "2023-02-01T12:57:30.768667",
                "monStart": "2023-01-01T00:05:00",
                "monEnd": "2023-01-01T23:55:00",
                "tueStart": "2023-01-01T00:05:00",
                "tueEnd": "2023-01-01T23:55:00",
                "wedStart": "2023-01-01T00:05:00",
                "wedEnd": "2023-01-01T23:55:00",
                "thrStart": "2023-01-01T00:05:00",
                "thrEnd": "2023-01-01T23:55:00",
                "friStart": "2023-01-01T00:05:00",
                "friEnd": "2023-01-01T23:41:00",
                "satStart": "2023-01-01T00:05:00",
                "satEnd": "2023-01-01T23:55:00",
                "sunStart": "2023-01-01T00:05:00",
                "sunEnd": "2023-01-01T23:55:00",
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
                    "dateAdded": "2023-02-13T14:27:01.1584858+00:00",
                    "isActive": true,
                    "isDeleted": false
                }
            },
            "items": [
                {
                    "itemId": 132,
                    "fkRestaurantId": 7,
                    "fkCategoryId": 46,
                    "name": "Nashville Burger ",
                    "description": "Hot Chicken burger marinaded in a hot Nashville sauce,covered in a maximum ",
                    "imgUrl": "132-NashvilleBurger-235413.jpg",
                    "price": 1045,
                    "tax": 20,
                    "status": true,
                    "isActive": true,
                    "isDeleted": false,
                    "dateAdded": "2023-02-01T13:54:12.626812",
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
                        "dateAdded": "2023-02-13T14:27:01.1620739+00:00",
                        "isActive": true,
                        "isDeleted": false
                    },
                    "categry": {
                        "categoryId": 0,
                        "fkMenuId": 0,
                        "name": ""
                    }
                },
                {
                    "itemId": 133,
                    "fkRestaurantId": 7,
                    "fkCategoryId": 46,
                    "name": "Special Chicken Burger ",
                    "description": "fried chicken breast fillet breaded&topped with jalapeno sauce serve ",
                    "imgUrl": "133-SpecialChickenBurger-235713.png",
                    "price": 850,
                    "tax": 10,
                    "status": true,
                    "isActive": true,
                    "isDeleted": false,
                    "dateAdded": "2023-02-01T13:57:13.1810463",
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
                        "dateAdded": "2023-02-13T14:27:01.1621083+00:00",
                        "isActive": true,
                        "isDeleted": false
                    },
                    "categry": {
                        "categoryId": 0,
                        "fkMenuId": 0,
                        "name": ""
                    }
                },
                {
                    "itemId": 134,
                    "fkRestaurantId": 7,
                    "fkCategoryId": 46,
                    "name": "Bun kabab",
                    "description": "sub buns stuffed with kababs and topped with spicy chutney,sliced",
                    "imgUrl": "134-Bunkabab-235855.jpg",
                    "price": 660,
                    "tax": 15,
                    "status": true,
                    "isActive": true,
                    "isDeleted": false,
                    "dateAdded": "2023-02-01T13:58:55.1496884",
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
                        "dateAdded": "2023-02-13T14:27:01.1621289+00:00",
                        "isActive": true,
                        "isDeleted": false
                    },
                    "categry": {
                        "categoryId": 0,
                        "fkMenuId": 0,
                        "name": ""
                    }
                },
                {
                    "itemId": 135,
                    "fkRestaurantId": 7,
                    "fkCategoryId": 46,
                    "name": "The Dubble Decker",
                    "description": "two chicken patties topped with spicy homemade sauce,served ",
                    "imgUrl": "135-TheDubbleDecker-230132.jpg",
                    "price": 1150,
                    "tax": 25,
                    "status": true,
                    "isActive": true,
                    "isDeleted": false,
                    "dateAdded": "2023-02-01T14:01:31.841685",
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
                        "dateAdded": "2023-02-13T14:27:01.1621652+00:00",
                        "isActive": true,
                        "isDeleted": false
                    },
                    "categry": {
                        "categoryId": 0,
                        "fkMenuId": 0,
                        "name": ""
                    }
                }
            ]
        },
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
                        <h2 className="heading">Category List</h2>
                        {/* <Link to="/Admin/RestaurantCreate" className="btn">Create New</Link> */}
                    </div>

                    {/* <!-- Table --> */}
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Menu Name</td>
                                <td>Date</td>
                                <td>Status</td>


                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Data Item Start --> */}
                            {Category.map((element, index) => {
                                return <tr key={index}>
                                    <td>{element.name}</td>
                                    <td>{element.menu.name}</td>
                                    {/* <td>{element.dateAdded}</td> */}
                                    <DateObj Dates={element.dateAdded} />

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

export default AdminCategoryList;