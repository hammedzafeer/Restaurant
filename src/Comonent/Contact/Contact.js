import './Contact.css'
import ContactForm from './ContactForm';
function ContactUs() {
    return (
        <div className="contact_container">
            <div className="contact_1">
                <div className='contact_1_container'>
                    {/* STart */}
                    <div className='contact_info_container'>
                        <div className='contact_icon'>
                            <i className="fa-solid fa-location-dot"></i>
                            {/* <i className="fa-solid fa-phone"></i>
                            <i className="fa-solid fa-envelope"></i> */}
                        </div>
                        <div className='contact_info'>
                            <h3>Address</h3>
                            <a href='https://www.google.com/maps/place/Noor+Mobile+Mall/@33.6428656,73.0712419,17z/data=!3m1!4b1!4m6!3m5!1s0x38df952666758ec3:0x1c244a6ff29e043e!8m2!3d33.6428612!4d73.0734306!16s%2Fg%2F11g5_dyrk9' target="_blank" rel="noreferrer">Noor Mobile Mall, 6th Road, Block D Satellite Town, Rawalpindi</a>
                        </div>
                    </div>
                    {/* End */}
                    {/* STart */}
                    <div className='contact_info_container'>
                        <div className='contact_icon'>
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className='contact_info'>
                            <h3>Lets Talk</h3>
                            <a href="tel: +92 319 4585699">+92 319 4585699</a>
                        </div>
                    </div>
                    {/* End */}
                    {/* STart */}
                    <div className='contact_info_container'>
                        <div className='contact_icon'>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className='contact_info'>
                            <h3>General Support</h3>
                            <a href="mailto: restaurantstaffpk@gmail.com">restaurantstaffpk@gmail.com</a>
                        </div>
                    </div>
                    {/* End */}
                </div>
            </div>
            <div className="contact_2">
                {/* <h2>Contact Us</h2> */}
                <ContactForm />

            </div>
        </div>
    );
}

export default ContactUs;