import { Link, Outlet } from 'react-router-dom';
import './Nav.css'
import logo from '../../../Img/Logo.png'
function Navbar() {
    const toggleclicked = () => {
        document.getElementById("imgLogo").classList.toggle("imgHide")
    }
    return (
        
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a>  */}
                    <button onClick={toggleclicked} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link' to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/success">Success Stories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/apply">Apply</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}

                    </div>
                    <a id="imgLogo" className="navbar-brand menu_header" href="/">
                        <img src={logo} alt="" />
                    </a>
                    {/* <Link className="navbar-brand" to="/Admin">Admin</Link> */}

                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;