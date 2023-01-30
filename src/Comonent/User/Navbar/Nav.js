import { Link } from 'react-router-dom';
import './Nav.css'
import logo from '../../../Img/Logo.png'
function Navbar() {
    return (
        <div className='nav_container'>
            <nav>
                <ul className="menu_container">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/success">Success Stories</Link></li>
                </ul>
                <div className="menu_header">
                    {/* <h1>Staff Restaurant</h1>
                    <Link to="/resturents">resturentstaff.pk</Link> */}
                    <img src={logo} alt="" />
                </div>

            </nav>
        </div>
    );
}

export default Navbar;