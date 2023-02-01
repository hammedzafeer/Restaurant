import '../Banner/Banner.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ContactFormEdit() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    let contactEdit = localStorage.getItem("Contacts");
    let contactObj = [];
    if (contactEdit == null) {
        contactObj = [];
    }
    else {
        contactObj = JSON.parse(contactEdit)
    };

    let CsName = contactObj[0].id;
    let cName = contactObj[0].name;
    let contact = contactObj[0].contact;
    let cemail = contactObj[0].email;
    let cmessage = contactObj[0].message;


    const [FkId, setFkId] = useState(CsName)
    const [name, setName] = useState(cName)
    const [contactUS, setContact] = useState(contact)
    const [email, setEmail] = useState(cemail)
    const [message, setMessage] = useState(cmessage)


    const handleFkId = (e) => {
        setFkId(e.target.value)
    }
    const handlename = (e) => {
        setName(e.target.value)

    }
    const handlecontact = (e) => {
        setContact(e.target.value)

    }
    const handleemail = (e) => {
        setEmail(e.target.value)

    }
    const handlemessage = (e) => {
        setMessage(e.target.value)

    }
    const backContact = () => {
        contactObj = []
        localStorage.setItem("Contacts", JSON.stringify(contactObj))
    }
    return (
        <section className="details">
            <div className="adminDetails">
                <div className="data-header">
                    <h2 className="heading">Edit ContactForm</h2>
                    {/* <a onClick={backAdmin} className="btn">Back</a> */}
                    <Link to="/Admin/Contact" className="btn" onClick={backContact}>Back</Link>
                </div>
                <div className='create_banner_container'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="banner_flex">
                            <label htmlFor="FkServiceId">FkServiceId</label>
                            <input type="number" id='FkServiceId' placeholder='1' onChange={handleFkId} value={FkId} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="Name">Name</label>
                            <input type="text" id='Name' onChange={handlename} value={name} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="Contact">Contact</label>
                            <input type="text" id='Contact' onChange={handlecontact} value={contactUS} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="Email">Email</label>
                            <input type="email" id='Email' onChange={handleemail} value={email} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="Message">Message</label>
                            <input type="text" id='Message' onChange={handlemessage} value={message} />
                        </div>
                        <button className='btn'>Save</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactFormEdit;