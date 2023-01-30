import logo from '../../../../Img/Logo.png'

function AdminNav() {

    const handleClick = () => {

    }
    return (
        <>
            <nav className="navigation">
                <ul>
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li>
                        <a href="/" className="" style={{
                            alignItems: "center"
                        }}>
                            <span className="">
                                {/* <ion-icon name="logo-apple"></ion-icon> */}
                                <img src={logo} alt="" style={{
                                    width: "50px",
                                    height: "50px",
                                    margin: "0.5rem 1rem",
                                }} />
                            </span>
                            <span className="title">Restaurant</span>
                        </a>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li className="active" onClick={handleClick}>
                        <a href="Admin.html">
                            <span className="icon">
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className="title">Dashboard</span>
                        </a>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li className="" onClick={handleClick}>
                        <a href="Admin.html">
                            <span className="icon">
                                <ion-icon name="newspaper-outline"></ion-icon>
                            </span>
                            <span className="title">Banners</span>
                        </a>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}

                    <li onClick={handleClick}>
                        <a href="/">
                            <span className="icon">
                                <ion-icon name="people-outline"></ion-icon>
                            </span>
                            <span className="title">Contact forms</span>
                        </a>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li onClick={handleClick}>
                        <a href="/">
                            <span className="icon">
                                <ion-icon name="help-circle-outline"></ion-icon>
                            </span>
                            <span className="title">Services</span>
                        </a>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li onClick={handleClick}>
                        <a href="/">
                            <span className="icon">
                                <ion-icon name="eye-outline"></ion-icon>
                            </span>
                            <span className="title">Reviews</span>
                        </a>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li onClick={handleClick}>
                        <a href="/">
                            <span className="icon">
                                <ion-icon name="log-out-outline"></ion-icon>
                            </span>
                            <span className="title">Sign Out</span>
                        </a>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                </ul>
            </nav>
        </>
    );
}

export default AdminNav;