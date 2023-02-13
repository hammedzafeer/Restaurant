// import './Banner.css'
// const cors = require('cors');
// import { CorsRequest } from 'cors';
import img from '../../../../Img/back1.jpg'
import { Link } from 'react-router-dom';
import City from '../../../Cities/Cities';
import { useEffect, useState } from 'react';
function RestaurantCreate() {
    const [Img, setImg] = useState()
    // const [Image, setImage] = useState()
    const [name, setName] = useState()
    const [ownerName, setOwnerName] = useState()
    const [email, setEmail] = useState()
    const [pContact, setPContact] = useState()
    const [sContact, setSContact] = useState()
    const [city, setCity] = useState()
    const [cityId, setCityId] = useState()
    const [address, setAddress] = useState()
    const [landMark, setLandMark] = useState()

    const [RestaurantObj, setRestaurantObj] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleOwnerName = (e) => {
        setOwnerName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePContact = (e) => {
        setPContact(e.target.value)
    }
    const handleSContact = (e) => {
        setSContact(e.target.value)
    }

    const handleLandMark = (e) => {
        setLandMark(e.target.value)
    }
    const handleCity = (e) => {
        setCity(e.target.value);
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }





    const handleImg = (e) => {
        // console.log(e.target.files[0])
        document.getElementsByClassName("selectImg")[0].style.display = "block";
        let Image = URL.createObjectURL(e.target.files[0]);
        setImg(Image)
        // console.log(Image)
    }
    useEffect(() => {
        setRestaurantObj({
            fkCityId: city,
            name: name,
            ownerName: ownerName,
            email: email,
            primaryContact: pContact,
            secondaryContact: sContact,
            logo: Img,
            address: address,
            landMark: landMark
        })
    }, [name, ownerName, email, pContact, sContact, city, address, landMark, Img])

    // Example POST method implementation:
    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        // return response.json(); // parses JSON response into native JavaScript objects
    }


    const handleCLick = () => {


        fetch('http://144.91.86.203/apiresturant/Restaurants/create', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/problem+json; charset=utf-8',
                'Transfer-Encoding': 'chunked',
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
                },
            body: {
                "name": "HAs",
                "email": "HAHss@gmail.com"
            }
        });
            // .then(response => response.json())
            // .then(data => console.log(data));
        console.log(JSON.stringify(RestaurantObj))
        // console.log(city, name, ownerName, email, pContact, sContact, Img, address, landMark)

    }
    return (
        <section className="details" >
            <div className="adminDetails">
                <div className="data-header">
                    <h2 className="heading">Restaurant List Create</h2>
                    <Link to="/Admin/Restaurantlist" className="btn">Back</Link>
                </div>
                <div className='create_banner_container'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="banner_flex">
                            <label htmlFor="name">Restaurant Name</label>
                            <input type="text" id='name' value={name} onChange={handleName} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="name">Owner Name</label>
                            <input type="text" id='name' value={ownerName} onChange={handleOwnerName} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="name">Email</label>
                            <input type="email" id='name' value={email} onChange={handleEmail} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="name">Primary Contact</label>
                            <input type="text" id='name' value={pContact} onChange={handlePContact} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="name">Secondary Contact (optional)</label>
                            <input type="text" id='name' value={sContact} onChange={handleSContact} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="name">City</label>
                            <select name="" id="" required value={city} onChange={handleCity}>
                                <option value="list" >List of City</option>
                                <City />
                            </select>
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="url">Address</label>
                            <input type="text" id='url' value={address} onChange={handleAddress} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="url">Land Mark</label>
                            <input type="text" id='url' value={landMark} onChange={handleLandMark} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="webBanner">Upload Img</label>
                            <input type="file" id='webBanner' onChange={handleImg} />
                        </div>
                        <div className="selectImg" style={{ display: "none" }}>
                            <img src={Img} alt="" />
                        </div>
                        <button className='btn' onClick={handleCLick}>Create</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default RestaurantCreate;