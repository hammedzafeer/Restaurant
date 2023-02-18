// import './Banner.css'
// const cors = require('cors');
// import { CorsRequest } from 'cors';
import img from '../../../../Img/back1.jpg'
import { Link } from 'react-router-dom';
import City from '../../../Cities/Cities';
import { useEffect, useState } from 'react';
import axios from 'axios';


function RestaurantEdit() {
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    const [fileObj, setFileObj] = useState();
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
    const [ImgFile, setImgFile] = useState()
    const [rId, setrId] = useState()


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
        console.log(e.target.value);
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }


    let restaurantEdit = localStorage.getItem("RestaurantList");
    let restaurantObj = [];
    if (restaurantEdit == null) {
        restaurantObj = [];
    }
    else {
        restaurantObj = JSON.parse(restaurantEdit)
        console.log(restaurantObj);
    };

    //     let restaurantId =  restaurantObj[0].ResId;
    // console.log(restaurantId);
    // let fkCityId = 
    // let name =
    // let ownerName =
    // let email =
    // let primaryContact =
    // let secondaryContact =
    // let logo =
    // let address =
    // let landMark 
    const catchData = () => {
        setrId(restaurantObj[0].restaurantId);
        setCity(restaurantObj[0].fkCityId)
        setName(restaurantObj[0].name)
        setOwnerName(restaurantObj[0].ownerName)
        setEmail(restaurantObj[0].email)
        setPContact(restaurantObj[0].primaryContact)
        setSContact(restaurantObj[0].secondaryContact)
        setAddress(restaurantObj[0].address)
        setLandMark(restaurantObj[0].landMark)


    }

    console.log(rId);
    const handleImg = (e) => {
        // console.log(e.target.files[0])
        document.getElementsByClassName("selectImg")[0].style.display = "block";
        let Image = URL.createObjectURL(e.target.files[0]);
        let imgVal = document.getElementById("webBanner").value;
        setImg(Image)
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
        console.log(file)
        console.log(fileName)
    }

    useEffect(() => {
        catchData()
                setFileObj({
            myImage: file
        })
    },[])


    const handleCLick = () => {
        setRestaurantObj({
            restaurantId: rId,
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

        axios.post('http://144.91.86.203/apiresturant/Restaurants/UpdateRestaurant', RestaurantObj).then((res) => {
            if (res.status == 200) {
                let a = document.createElement("a");
                a.href = "/Admin/Restaurantlist";
                a.click()
                console.log(a);
            }
        });
        console.log(restaurantObj);

    }
    return (
        <section className="details" >
            <div className="adminDetails">
                <div className="data-header">
                    <h2 className="heading">Restaurant List Update</h2>
                    <Link to="/Admin/Restaurantlist" className="btn">Back</Link>
                </div>
                <div className='create_banner_container'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="banner_flex">
                            <label htmlFor="name">Restaurant Name</label>
                            <input type="text" id='name' value={name} onChange={handleName} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="ownerName">Owner Name</label>
                            <input type="text" id='ownerName' value={ownerName} onChange={handleOwnerName} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="Email">Email</label>
                            <input type="email" id='Email' value={email} onChange={handleEmail} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="pContact">Primary Contact</label>
                            <input type="text" id='pContact' value={pContact} onChange={handlePContact} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="sContact">Secondary Contact (optional)</label>
                            <input type="text" id='sContact' value={sContact} onChange={handleSContact} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="City">City</label>
                            <select name="" id="City" required onChange={handleCity}>
                                <option value="list" >List of City</option>
                                <City />
                            </select>
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="address">Address</label>
                            <input type="text" id='address' value={address} onChange={handleAddress} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="landMark">Land Mark</label>
                            <input type="text" id='landMark' value={landMark} onChange={handleLandMark} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="webBanner">Upload Img</label>
                            <input type="file" value={ImgFile} id='webBanner' onChange={handleImg} />
                        </div>
                        <div className="selectImg" style={{ display: "none" }}>
                            <img src={Img} alt="" />
                        </div>
                        <button className='btn' onClick={handleCLick}>Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default RestaurantEdit;