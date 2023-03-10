import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateObj from "../DateObj/Date";

function AdminRestaurantItem(props) {

    const [ItemList, setItemList] = useState([]);

    async function itemlists() {
        props.setProgress(10)
        await axios.get("http://144.91.86.203/apiresturant/Items?rid=7&cid=54").then((res) => {
            props.setProgress(50)
            setItemList(res.data)
            props.setProgress(70)
        });
        props.setProgress(100)
    }

    useEffect(() => {
        itemlists()
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
                        <h2 className="heading">Restaurant Item List</h2>
                        <Link to="/Admin/RestaurantCreate" className="btn">Create New</Link>
                    </div>

                    {/* <!-- Table --> */}
                    <table>
                        <thead>
                            <tr>
                                {/* <td>Id</td>
                                <td>ItemId</td>
                                <td>RestaurantId</td>
                                <td>CategoryId</td> */}
                                <td>Name</td>
                                <td>Description</td>
                                <td>Image</td>
                                <td>Price</td>
                                <td>Tex</td>
                                <td>Status</td>
                                <td>MenuId</td>
                                <td>Name</td>
                                <td>Date</td>
                                <td>isActive</td>


                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Data Item Start --> */}
                            {ItemList.map((element, index) => {
                                return <tr key={index}>
                                    {/* <td>{index}</td>
                                    <td>{element.itemId}</td>
                                    <td>{element.fkRestaurantId}</td>
                                    <td>{element.fkCategoryId}</td> */}
                                    <td>{element.name}</td>
                                    <td style={{ minWidth: "250px" }}>{element.description}</td>
                                    <td className="linehight" style={{ minWidth: "300px" }}>{element.imgUrl}</td>
                                    <td>{element.price}</td>
                                    <td>{element.tax}</td>
                                    <td><span className="status Active">{element.status.toString()}</span></td>
                                    <td>{element.categry.fkMenuId}</td>
                                    <td>{element.categry.name}</td>
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

export default AdminRestaurantItem;