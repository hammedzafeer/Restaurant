
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div>

            <footer>
                <div className="flex footer">
                    <div className="footer_4">
                        <div className="musicology">
                            <h2 className="footer_heading">RESTAURANT</h2>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim.
                            </p>
                            <ul className="icon flex">
                                <li><i className="fab fa-instagram"></i></li>
                                <li><a href="https://www.facebook.com/profile.php?id=100087761547437" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                <li><i className="fab fa-twitter"></i></li>
                                <li><i className="fab fa-whatsapp"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_6 flex">
                        <div className="footer_3">
                            <h2 className="footer_heading">About</h2>
                            <ul>
                                <li>Terms & Condition</li>
                            </ul>
                        </div>
                        <div className="footer_3">
                            <h2 className="footer_heading">Services</h2>
                            <ul>
                                <li>Chef</li>
                                <li>Waiter</li>
                                <li>Restaurant Manager</li>
                                <li>Dish washer</li>
                            </ul>

                        </div>
                        <div className="footer_3">
                            <h2 className="footer_heading">Other</h2>
                            <ul>
                                <li><Link to='/contact'>Contact Us</Link></li>
                                <li>Help</li>
                                <li>Privacy</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <p className="footer_text text">Copyright &copy; | All Right Reserved</p>

            </footer>
        </div>
    );
}

export default Footer;