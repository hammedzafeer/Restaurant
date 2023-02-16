import { Link } from 'react-router-dom';
import logo from '../../../../Img/Logo.png'

function AdminNav(props) {

    const handleClick = () => {

    }
    return (
        <>
            <nav className="navigation" id="NavId">
                <ul>
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li>
                        <Link to="/" className="" style={{
                            alignItems: "center"
                        }}>
                            <span className="">
                                {/* <ion-icon name="logo-apple"></ion-icon> */}
                                <img src={logo} alt="" style={{
                                    width: "50px",
                                    height: "50px",
                                    margin: "0.5rem 0.5rem",
                                }} />
                            </span>
                            <span className="title">Restaurant</span>
                        </Link>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    {/* <li className={`${props.Dashboard}`} onClick={handleClick}>
                        <a href="Admin.html">
                            <span className="icon">
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className="title">Dashboard</span>
                        </a>
                    </li> */}
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li className={`${props.Banner}`} onClick={handleClick}>
                        <Link to="/Admin">
                            <span className="icon">
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className="title">Banners</span>
                        </Link>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}

                    <li className={`${props.Contact}`} onClick={handleClick}>
                        <Link to="/Admin/Contact">
                            <span className="icon">
                                <ion-icon name="people-outline"></ion-icon>
                            </span>
                            <span className="title">Contact forms</span>
                        </Link>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li className={`${props.Services}`} onClick={handleClick}>
                        <Link to="/Admin/Services">
                            <span className="icon">
                                <ion-icon name="help-circle-outline"></ion-icon>
                            </span>
                            <span className="title">Services</span>
                        </Link>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li className={`${props.Reviews}`} onClick={handleClick}>
                        <Link to="/Admin/Reviews">
                            <span className="icon">
                                <ion-icon name="eye-outline"></ion-icon>
                            </span>
                            <span className="title">Reviews</span>
                        </Link>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li className={`${props.list}`} onClick={handleClick}>
                        <Link to="/Admin/Restaurantlist">
                            <span className="icon">
                                <ion-icon name="restaurant-outline"></ion-icon>
                            </span>
                            <span className="title">RestaurantList</span>
                        </Link>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li className={`${props.Customerslist}`} onClick={handleClick}>
                        <Link to="/Admin/Customerslist">
                            <span className="icon">
                                <ion-icon name="list-outline"></ion-icon>
                            </span>
                            <span className="title">CustomersList</span>
                        </Link>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li className={`${props.Itemlist}`} onClick={handleClick}>
                        <Link to="/Admin/ItemList">
                            <span className="icon">
                                <ion-icon name="pricetag-outline"></ion-icon>
                            </span>
                            <span className="title">Item List</span>
                        </Link>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li className={`${props.orderList}`} onClick={handleClick}>
                        <Link to="/Admin/OrderList">
                            <span className="icon">
                                <ion-icon name="apps-outline"></ion-icon>
                            </span>
                            <span className="title">OrderList</span>
                        </Link>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li className={`${props.category}`} onClick={handleClick}>
                        <Link to="/Admin/Category">
                            <span className="icon">
                                <ion-icon name="podium-outline"></ion-icon>
                            </span>
                            <span className="title">Category</span>
                        </Link>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li className={`${props.itemvrities}`} onClick={handleClick}>
                        <Link to="/Admin/ItemVrities">
                            <span className="icon">
                                <ion-icon name="reorder-four-outline"></ion-icon>
                            </span>
                            <span className="title">Item Vrities</span>
                        </Link>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li className={`${props.rider}`} onClick={handleClick}>
                        <Link to="/Admin/Rider">
                            <span className="icon">
                                <ion-icon name="bicycle-outline"></ion-icon>
                            </span>
                            <span className="title">Rider</span>
                        </Link>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}

                    {/* <!-- ===== Menu Item Start ===== --> */}
                    <li className={`${props.SignOut}`} onClick={handleClick}>
                        <Link to="/Admin/Login">
                            <span className="icon">
                                <ion-icon name="log-out-outline"></ion-icon>
                            </span>
                            <span className="title">Sign Out</span>
                        </Link>
                    </li>
                    {/* <!-- ===== Menu Item End ===== --> */}
                </ul>
            </nav>
        </>
    );
}

export default AdminNav;