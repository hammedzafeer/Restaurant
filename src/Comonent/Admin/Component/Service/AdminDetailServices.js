import { Link } from "react-router-dom";

import './services.css'
function AdminDetailServces() {
    let serviceEdit = localStorage.getItem("Services");
    let serviceObj = [];
    if (serviceEdit == null) {
        serviceObj = [];
    }
    else {
        serviceObj = JSON.parse(serviceEdit)
    }
    let NAME = serviceObj[0].name;
    let IMG = serviceObj[0].img;
    
    const backService = () => {
        serviceObj = []
        localStorage.setItem("Services", JSON.stringify(serviceObj))
    }
    return (
        <section className="details" >
            <div className="adminDetails">
                <div className="data-header">
                    <h2 className="heading">Detail Services</h2>
                    <Link to="/Admin/Services" onClick={backService} className="btn">Back</Link>
                </div>
                <div className='detail_services'>
                    <div className="detail_flex">
                        <h2>Name</h2>
                        <p>{NAME}</p>
                    </div>
                    <div className="detail_flex">
                        <h2>URL</h2>
                        <p>{IMG}</p>
                    </div>
                    <div className="detail_flex">
                        <h2 htmlFor="Image">Image</h2>
                        <img src={IMG} alt="" />
                    </div>
                    {/* <button className='btn'>Edit</button> */}
                    <Link to="/Admin/Services/EditServices">
                        <button className='btn'>Edit</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default AdminDetailServces;