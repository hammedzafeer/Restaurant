import { useState } from "react";
import { Link } from "react-router-dom";
function AdminEditServces() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
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

    const [Name, setName] = useState(NAME)
    const [Url, setUrl] = useState(IMG)

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleUrl = (e) => {
        setUrl(e.target.value)
    }
    console.log(serviceObj);

    const backService = () => {
        serviceObj = []
        localStorage.setItem("Services", JSON.stringify(serviceObj))
    }

    return (
        <section className="details" >
            <div className="adminDetails">
                <div className="data-header">
                    <h2 className="heading">Edit Services</h2>
                    <Link to="/Admin/Services" onClick={backService} className="btn">Back</Link>
                </div>
                <div className='create_banner_container'>
                    <form action="" onSubmit={handleSubmit}>
                        { }<div className="banner_flex">
                            <label htmlFor="Name">Name</label>
                            <input type="text" id='Name' onChange={handleName} value={Name} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="URL">URL</label>
                            <input type="url" id='URL' onChange={handleUrl} value={Url} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="Image">Image</label>
                            <input type="file" id='Image' />
                        </div>
                        <button className='btn'>Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AdminEditServces;