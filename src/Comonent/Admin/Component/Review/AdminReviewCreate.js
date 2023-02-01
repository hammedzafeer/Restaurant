import { Link } from 'react-router-dom';
function ReviewCreate() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section className="details" >
            <div className="adminDetails">
                <div className="data-header">
                    <h2 className="heading">Review Create</h2>
                    <Link to="/Admin/Reviews" className="btn">Back</Link>
                </div>
                <div className='create_banner_container'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="banner_flex">
                            <label htmlFor="name">Banner Name</label>
                            <input type="text" id='name' />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="Email">Email</label>
                            <input type="email" id='Email' />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="Comment">Comment</label>
                            <input type="text" id='Comment' />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="stars">Stars</label>
                            <input type="number" id='stars' min={0} max={5} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="Date">Date Time</label>
                            <input type="datetime-local" id='Date' />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="status">status</label>
                            <input type="checkbox" id='status' style={{ width: "auto" }} />
                        </div>
                        <button className='btn'>Create</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ReviewCreate;