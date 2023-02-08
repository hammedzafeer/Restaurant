// import { useState } from "react";
import { Link } from "react-router-dom";


function Banner() {
    const Banner = [
        {
            Id: "0",
            bannerName: "1",
            bannermobileImg: "https://img.freepik.com/free-vector/professional-website-banner-with-blue-shapes_1361-1531.jpg?w=2000",
            bannerwebImg: "https://img.freepik.com/free-vector/modern-website-banner-template-with-abstract-shapes_1361-3311.jpg?w=2000",
            bannerDate: "15/01/2002",
            bannerStatus: "Active",
        },
        {
            Id: "1",
            bannerName: "2",
            bannermobileImg: "https://img.freepik.com/free-vector/professional-website-banner-with-blue-shapes_1361-1531.jpg?w=2000",
            bannerwebImg: "https://img.freepik.com/free-vector/modern-website-banner-template-with-abstract-shapes_1361-3311.jpg?w=2000",
            bannerDate: "15/01/2002",
            bannerStatus: "Deactive",
        }
    ]

    const handleBanner = (e) => {
        let ID = e.target.parentElement.id;
        console.log(ID);
        Banner.map((element) => {
            if (ID == element.Id) {
                let bannerEdit = localStorage.getItem("Banners");
                let bannerObj = [];
                if (bannerEdit == null) {
                    bannerObj = [];
                }
                else {
                    bannerObj = [];
                    localStorage.setItem("Banners", JSON.stringify(bannerObj))
                }
                let bannerInfo = {
                    id: element.Id,
                    name: element.bannerName,
                    web: element.bannerwebImg,
                    mobile: element.bannermobileImg,
                    status: element.bannerStatus
                }
                bannerObj.push(bannerInfo)
                localStorage.setItem("Banners", JSON.stringify(bannerObj))
                console.log(bannerObj);
            }
        })
    }

    const example = (id, name, date) => {
        console.log(id);
        console.log(name);
        console.log(date);

    }
 
    return (
        <>
            {/* <!-- ====== Datalist Items Start ====== --> */}
            <section className="details" id="banner">
                <div className="adminDetails">
                    <div className="data-header">
                        <h2 className="heading">Recent Banner</h2>
                        <Link to="/Admin/CreateBanner" className="btn">Create New</Link>
                    </div>

                    {/* <!-- Table --> */}
                    <table>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Banner Name</td>
                                <td>Mobile Banner</td>
                                <td>Web Banner</td>
                                <td>Date Added</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Data Item Start --> */}
                            {Banner.map((element, index) => {
                                return <tr key={index}>
                                    <td id="">{element.Id}</td>
                                    <td id="">{element.bannerName}</td>
                                    <td><img src={element.bannermobileImg} alt="" /></td>
                                    <td><img src={element.bannerwebImg} alt="" /></td>
                                    <td>{element.bannerDate}</td>
                                    <td><span className={`status ${element.bannerStatus}`}>{element.bannerStatus}</span></td>
                                    {/* <!--z dropdown --> */}
                                    <td className="drop_menu"><span><ion-icon name="caret-down-circle-outline"></ion-icon>
                                        <ul>
                                            <li className="user-active"><Link to="/">Active</Link></li>
                                            <li id={element.Id}><Link to='/Admin/BannerEdit' onClick={handleBanner}>Edit</Link></li>
                                            {/* <li id={element.Id}><a onClick={() => example(element.Id, element.bannerName,element.bannerDate)}>Example</a></li> */}
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

export default Banner;