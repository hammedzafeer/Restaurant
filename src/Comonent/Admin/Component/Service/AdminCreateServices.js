
import { Link } from "react-router-dom";
function AdminCreateServces() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section className="details" >
            <div className="adminDetails">
                <div className="data-header">
                    <h2 className="heading">Create Services</h2>
                    <Link to="/Admin/Services" className="btn">Back</Link>
                </div>
                <div className='create_banner_container'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="banner_flex">
                            <label htmlFor="Name">Name</label>
                            <input type="text" id='Name' />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="URL">URL</label>
                            <input type="url" id='URL' />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="Image">Image</label>
                            <input type="file" id='Image' />
                        </div>
                        <button className='btn'>Save</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AdminCreateServces;