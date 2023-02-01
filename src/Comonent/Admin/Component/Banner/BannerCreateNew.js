import './Banner.css'
import { Link } from 'react-router-dom';
function BannerCreate() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section className="details" >
            <div className="adminDetails">
                <div className="data-header">
                    <h2 className="heading">Banner Create</h2>
                    <Link to="/Admin" className="btn">Back</Link>
                </div>
                <div className='create_banner_container'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="banner_flex">
                            <label htmlFor="name">Banner Name</label>
                            <input type="text" id='name' />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="url">Landing Link</label>
                            <input type="text" id='url' />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="webBanner">Upload Web Banner</label>
                            <input type="file" id='webBanner' />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="mobileBanner">Upload Mobile Picture</label>
                            <input type="file" id='mobileBanner' />
                        </div>
                        <button className='btn'>Create</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default BannerCreate;