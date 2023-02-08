import './Banner.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
function BannerEdit() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    let bannerEdit = localStorage.getItem("Banners");
    let bannerObj = [];
    if (bannerEdit == null) {
        bannerObj = [];
    }
    else {
        bannerObj = JSON.parse(bannerEdit)
    };
    let bannername = bannerObj[0].name;
    let bannerweb = bannerObj[0].web;
    let banermobile = bannerObj[0].mobile;
    let bannerStatus = bannerObj[0].status;
    const backBanner = () => {
        bannerObj = []
        localStorage.setItem("Banners", JSON.stringify(bannerObj))
    }

    const [bname, setBname] = useState(bannername)
    const [weburl, setWeburl] = useState(bannerweb)
    const [mobileurl, setMobileurl] = useState(banermobile)
    const [status, setStatus] = useState(bannerStatus)
    if (status == "Active") {
        setStatus(true)
    }
    else if (status == "Deactive") {
        setStatus(false)
    }
    const handlerName = (e) => {
        setBname(e.target.value)
    }
    const handlerweburl = (e) => {
        setWeburl(e.target.value)
    }
    const handlermobilrurl = (e) => {
        setMobileurl(e.target.value)
    }
    const handleStatus = () => {
        if(status == true) {
            setStatus(false)
        }
        else{
            setStatus(true)
        }
        }
    return (
        <section className="details">
            <div className="adminDetails">
                <div className="data-header">
                    <h2 className="heading">Banner Edit</h2>
                    <Link to="/Admin" className="btn" onClick={backBanner}>Back</Link>
                </div>
                <div className='create_banner_container'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="banner_flex">
                            <label htmlFor="name">Banner Name</label>
                            <input type="text" id='name' onChange={handlerName} value={bname} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="webUrl">Web Landing Link</label>
                            <input type="url" name="" id="webUrl" onChange={handlerweburl} value={weburl} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="mobileUrl">Mobile Landing Link</label>
                            <input type="url" name="" id="mobileUrl" onChange={handlermobilrurl} value={mobileurl} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="webBanner">Upload Web Banner</label>
                            <input type="file" id='webBanner' />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="mobileBanner">Upload Mobile Picture</label>
                            <input type="file" id='mobileBanner' />
                        </div>
                        <div className="banner_flex flex_status">
                            <label htmlFor="status">status</label>
                            <input type="checkbox" checked={status} id='status' style={{ width: "auto" }} onChange={handleStatus} />
                        </div>
                        <button className='btn'>Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default BannerEdit;