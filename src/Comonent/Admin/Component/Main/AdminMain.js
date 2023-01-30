
function MainAdmin() {
    const toggleCLick = () => {
        console.log("OK Click");
    }
    return (
        <>
            <div className="main-contant">
                <section className="topbar">
                    <div className="toggle" onClick={toggleCLick}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>
                    {/* <!-- search --> */}
                    <div className="search">
                        <label htmlFor="">
                            <input type="search" placeholder="Search Here" />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </label>
                    </div>
                    {/* <!-- admin --> */}
                    <div className="admin">
                        <img
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </div>
                </section>

                {/* <!-- ====== Datalist Items Start ====== --> */}
                <section className="details">
                    <div className="recentcustomer">
                        <div className="data-header">
                            <h2 className="heading">Recent Customer</h2>
                            <a href="/" className="btn">Create New</a>
                        </div>

                        {/* <!-- Table --> */}
                        <table>
                            <thead>
                                <tr>
                                    <td>Banner Name</td>
                                    <td>Mobile Banner</td>
                                    <td>Web Banner</td>
                                    <td>Date Added</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- Data Item Start --> */}
                                <tr>
                                    <td>1</td>
                                    <td><img src="https://img.freepik.com/free-vector/professional-website-banner-with-blue-shapes_1361-1531.jpg?w=2000" alt="" /></td>
                                    <td><img src="https://img.freepik.com/free-vector/modern-website-banner-template-with-abstract-shapes_1361-3311.jpg?w=2000" alt="" /></td>
                                    <td>15/01/2002</td>
                                    <td><span className="status Active">Active</span></td>
                                    {/* <!--z dropdown --> */}
                                    <td className="drop_menu"><span><ion-icon name="caret-down-circle-outline"></ion-icon>
                                        <ul>
                                            <li className="user-active"><a href="/">Active</a></li>
                                            <li><a href="Form.html">Edit</a></li>
                                            <li><a href="/">Delete</a></li>
                                        </ul>
                                    </span>
                                    </td>
                                </tr>
                                {/* <!-- Data Item End --> */}
                                {/* <!-- Data Item Start --> */}
                                <tr>
                                    <td>2</td>
                                    <td><img src="https://img.freepik.com/free-vector/professional-website-banner-with-blue-shapes_1361-1531.jpg?w=2000" alt="" /></td>
                                    <td><img src="https://img.freepik.com/free-vector/modern-website-banner-template-with-abstract-shapes_1361-3311.jpg?w=2000" alt="" /></td>
                                    <td>15/01/2002</td>
                                    <td><span className="status Deactive">Deactive</span></td>
                                    {/* <!--z dropdown --> */}
                                    <td className="drop_menu"><span><ion-icon name="caret-down-circle-outline"></ion-icon>
                                        <ul>
                                            <li className="user-active"><a href="/">Active</a></li>
                                            <li><a href="Form.html">Edit</a></li>
                                            <li><a href="/">Delete</a></li>
                                        </ul>
                                    </span>
                                    </td>
                                </tr>
                                {/* <!-- Data Item End --> */}

                            </tbody>
                        </table>
                    </div>
                </section>


                {/* <!-- ====== Datalist Items End ====== --> */}
            </div>
        </>
    );
}

export default MainAdmin;