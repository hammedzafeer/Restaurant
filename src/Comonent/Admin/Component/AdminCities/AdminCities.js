import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminCities(props) {

    const [Cities, setCities] = useState([])
    // const [CityId, setCityId] = useState()

    const city = async () => {
        props.setProgress(20)
        await axios.get("http://144.91.86.203/apiresturant/Cities")
        .then((res) => {
            props.setProgress(50)
            setCities(res.data)
            props.setProgress(70)
        })
        props.setProgress(100)
    }
    useEffect(() => {
      city()
    }, [])

    const handleCity = (Id) => {
        // console.log(Id);
        let CitiesEdit = localStorage.getItem("Cities");
        let citiesObj = [];
        if (CitiesEdit == null) {
            citiesObj = [];
        }
        else {
            citiesObj = [];
            localStorage.setItem("Cities", JSON.stringify(citiesObj))
        }
        let cityInfo = {
            "fkCityId": Id
        }

        citiesObj.push(cityInfo)
        localStorage.setItem("Cities", JSON.stringify(citiesObj))
        console.log(citiesObj);
    }
    return (
        <>
            <section className="details" id="contact">
                <div className="adminDetails">
                    <div className="data-header">
                        <h2 className="heading">Cities</h2>
                        <Link to="/Admin/RestaurantCreate" className="btn">Create New</Link>
                    </div>

                    {/* <!-- Table --> */}
                    <table>
                        <thead>
                            <tr>
                                <td>CityId</td>
                                <td>City Name</td>
                                <td>Short Name</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Data Item Start --> */}
                            {Cities.map((element, index) => {
                                return <tr key={index}>
                                    <td>{element.cityId}</td>
                                    <td>{element.cityName}</td>
                                    <td>{element.shortName}</td>
                                    {/* <!--z dropdown --> */}
                                    <td className="drop_menu" style={{ textAlign: "left" }}><span><ion-icon name="caret-down-circle-outline"></ion-icon>
                                        <ul>
                                            {/* <li className="user-active"><Link to="/">Active</Link></li> */}

                                            {/* <li><Link to='/Admin/Cities/Details' onClick={() => handleCity(element.cityId)}>Details</Link></li> */}
                                            <li><a onClick={() => handleCity(element.cityId)}>Details</a></li>

                                            {/* <li id={element.Id}><a onClick={handleContact}>Edit</a></li> */}

                                            {/* <li><Link to="/">Delete</Link></li> */}
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

export default AdminCities;