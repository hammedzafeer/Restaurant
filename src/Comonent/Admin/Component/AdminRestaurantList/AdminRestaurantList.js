import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminRestaurantList(props) {

    const [restaurant, setRestaurant] = useState([])
    const Contact = []
    async function RestaurantApi() {
        props.setProgress(20)
        await axios.get("http://144.91.86.203/apiresturant/Restaurants")
            .then((res) => {
                props.setProgress(50)
                setRestaurant(res.data)
                props.setProgress(70)
            })
        props.setProgress(100)
        // props.setProgress(10)
        // let data = await fetch("http://144.91.86.203/apiresturant/Restaurants");
        // props.setProgress(50)
        // let response = await data.json(); 
        // props.setProgress(70)
        // setRestaurant(response);
        // props.setProgress(100)
    }
    useEffect(() => {
        RestaurantApi()

    }, [])

    // Active Function
    const handleActive = (Id) => {
        axios.get(`http://144.91.86.203/apiresturant/Restaurants/IsActive/${Id}`)
        console.log(Id);
    }
    // Delete Function
    const handleDelete = (Id) => {
        axios.get(`http://144.91.86.203/apiresturant/Restaurants/DltUser/${Id}`)
        console.log(`http://144.91.86.203/apiresturant/Restaurants/DltUser/${Id}`);
        console.log(Id);
    }

    const handleResEdit = (ResId, CityId, name, Oname, email, pContact, sContact, logo, address, land) => {
        console.log(ResId, CityId, name, Oname, email, pContact, sContact, logo, address, land);
        let restaurantEdit = localStorage.getItem("RestaurantList");
        let restaurantObj = [];
        if (restaurantEdit == null) {
            restaurantObj = [];
        }
        else {
            restaurantObj = [];
            localStorage.setItem("RestaurantList", JSON.stringify(restaurantObj))
        }
        let restaurantInfo = {
            "restaurantId": ResId,
            "fkCityId": CityId,
            "name": name,
            "ownerName": Oname,
            "email": email,
            "primaryContact": pContact,
            "secondaryContact": sContact,
            "logo": logo,
            "address": address,
            "landMark": land,
        }

        restaurantObj.push(restaurantInfo)
        localStorage.setItem("RestaurantList", JSON.stringify(restaurantObj))
        console.log(restaurantObj);
        //     }
        // })
    }
    return (
        <>
            <section className="details" id="contact">
                <div className="adminDetails">
                    <div className="data-header">
                        <h2 className="heading">Restaurant List</h2>
                        <Link to="/Admin/RestaurantCreate" className="btn">Create New</Link>
                    </div>

                    {/* <!-- Table --> */}
                    <table>
                        <thead>
                            <tr>
                                {/* <td>Id</td>
                                <td>RestaurantId</td> */}
                                <td>Name</td>
                                <td>Owner Name</td>
                                <td>Contact</td>
                                <td>Contact 1</td>
                                <td>Email</td>
                                <td>Image</td>
                                <td>Address</td>
                                <td>LandMark</td>
                                <td>Date</td>
                                <td>Status</td>


                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Data Item Start --> */}
                            {restaurant.map((element, index) => {
                                return <tr key={index}>
                                    {/* <td>{index}</td>
                                    <td>{element.restaurantId}</td> */}
                                    <td>{element.name}</td>
                                    <td>{element.ownerName}</td>
                                    <td>{element.primaryContact}</td>
                                    <td style={{ minWidth: "250px" }}>{element.secondaryContact}</td>
                                    <td className="linehight" style={{ minWidth: "300px" }}>{element.email}</td>
                                    <td>{element.logo}</td>
                                    <td>{element.address}</td>
                                    <td>{element.landMark}</td>
                                    <td>{element.dateAdded}</td>
                                    <td><span className="status Active" style={{ backgroundColor: element.isActive == true ? "#999914" : "red" }}>{element.isActive.toString()}</span></td>

                                    {/* <!--z dropdown --> */}
                                    <td className="drop_menu"><span><ion-icon name="caret-down-circle-outline"></ion-icon>
                                        <ul>
                                            <li className="user-active"><a onClick={() => handleActive(element.restaurantId)} >{element.isActive != true ? "Active" : "Deactive"}</a></li>

                                            <li id={element.Id}><Link to='/Admin/Restaurantlist/Edit' onClick={() => handleResEdit(element.restaurantId, element.fkCityId, element.name, element.ownerName, element.email, element.primaryContact, element.secondaryContact, element.logo, element.address, element.landMark)}>Edit</Link></li>
                                            {/* <li id={element.Id}><a onClick={() => handleResEdit(element.restaurantId, element.fkCityId, element.name, element.ownerName, element.email, element.primaryContact, element.secondaryContact, element.logo, element.address, element.landMark)}>Edit</a></li> */}

                                            <li><a onClick={() => handleDelete(element.restaurantId)}>Delete</a></li>
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

export default AdminRestaurantList;