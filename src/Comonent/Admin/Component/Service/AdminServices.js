import { Link } from "react-router-dom";

function AdminServices() {
    const Services = [
        {
            Id: "0",
            name: "Chef",
            image: "https://img.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5343.jpg?w=360"
        },
        {
            Id: "1",
            name: "Waiter",
            image: "https://img.freepik.com/free-photo/happy-young-waiter-holding-glass-champagne-towel_171337-5290.jpg?w=2000"
        },
        {
            Id: "2",
            name: "Restaurant Manager",
            image: "https://thumbs.dreamstime.com/b/restaurant-manager-discussing-chef-kitchen-cook-preparing-dish-restaurant-owner-standing-restaurant-manager-102577204.jpg"
        },
        {
            Id: "3",
            name: "Dish washer",
            image: "https://c8.alamy.com/comp/E0H0GC/everyday-daily-scene-of-a-woman-emptying-a-fitted-dishwasher-full-E0H0GC.jpg"
        }
    ]

    const handleService = (e) => {
        let ID = e.target.parentElement.id;
        Services.map((element) => {
            if (ID == element.Id) {
                let serviceEdit = localStorage.getItem("Services");
                let serviceObj = [];
                if (serviceEdit == null) {
                    serviceObj = [];
                }
                else {
                    serviceObj = [];
                    localStorage.setItem("Services", JSON.stringify(serviceObj))
                    // serviceObj = JSON.parse(serviceEdit)
                }
                let serviceInfo = {
                    id: element.Id,
                    name: element.name,
                    img: element.image
                }
                serviceObj.push(serviceInfo)
                localStorage.setItem("Services", JSON.stringify(serviceObj))
                console.log(serviceObj);
            }
        })
    }
    return (
        <>
            {/* <!-- ====== Datalist Items Start ====== --> */}
            <section className="details" id="contact">
                <div className="adminDetails">
                    <div className="data-header">
                        <h2 className="heading">Services</h2>
                        <Link to="/Admin/Services/CreateServices" className="btn">Create New</Link>
                    </div>

                    {/* <!-- Table --> */}
                    <table>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Icon</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Data Item Start --> */}
                            {Services.map((element, index) => {
                                return <tr key={index}>
                                    <td>{element.Id}</td>
                                    <td style={{ minWidth: "400px" }}>{element.name}</td>
                                    <td style={{ minWidth: "400px" }}>{element.image}</td>
                                    {/* <!--z dropdown --> */}
                                    <td className="drop_menu"><span><ion-icon name="caret-down-circle-outline"></ion-icon>
                                        <ul>
                                            <li id={element.Id}><Link to="/Admin/Services/EditServices" onClick={handleService}>Edit</Link></li>
                                            <li id={element.Id}><Link to="/Admin/Services/DetailServices" onClick={handleService}>Detail</Link></li>
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


            {/* <!-- ====== Datalist Items End ====== --> */}
        </>
    );
}

export default AdminServices;