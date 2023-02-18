
import { Link } from 'react-router-dom';
import City from '../../../Cities/Cities';
import { useEffect, useState } from 'react';
import axios from 'axios';


function AdminCitiesDetails() {
    const [cityId, setCityId] = useState()
    const [CityName, setCityName] = useState()
    const [Shorcity, setShorCity] = useState()
   

    const [RestaurantObj, setRestaurantObj] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleCityName = (e) => {
        setCityName(e.target.value)
    }
    const handleShortName = (e) => {
        setShorCity(e.target.value)
    }

    let CitiesEdit = localStorage.getItem("Cities");
    let citiesObj = [];
    if (CitiesEdit == null) {
        citiesObj = [];
    }
    else {
        citiesObj = JSON.parse(CitiesEdit)
        // console.log(citiesObj);
    };

    const catchData = () => {
        console.log(citiesObj[0]);
        setCityId(citiesObj[0].fkCityId)
    }

    // const handleImg = (e) => {
    //     // console.log(e.target.files[0])
    //     document.getElementsByClassName("selectImg")[0].style.display = "block";
    //     let Image = URL.createObjectURL(e.target.files[0]);
    //     let imgVal = document.getElementById("webBanner").value;
    //     setImg(Image)
    //     setFile(e.target.files[0])
    //     setFileName(e.target.files[0].name)
    //     console.log(file)
    //     console.log(fileName)
    // }

    const Detailapi = async () => {
        await axios.get(`http://144.91.86.203/apiresturant/Cities/Details/${cityId}`)
        .then((res) => {
            console.log(res.data);
        })
    }

    useEffect(() => {
        catchData()
        Detailapi()
       
    })

    console.log(cityId);

    const handleCLick = () => {
        // setRestaurantObj({
        //     restaurantId: rId,
        //     fkCityId: city,
        //     name: name,
        //     ownerName: ownerName,
        //     email: email,
        //     primaryContact: pContact,
        //     secondaryContact: sContact,
        //     logo: Img,
        //     address: address,
        //     landMark: landMark
        // })

        // axios.post('http://144.91.86.203/apiresturant/Restaurants/UpdateRestaurant', RestaurantObj).then((res) => {
        //     if (res.status == 200) {
        //         let a = document.createElement("a");
        //         a.href = "/Admin/Restaurantlist";
        //         a.click()
        //         console.log(a);
        //     }
        // });
        // // console.log(restaurantObj);

    }
    return (
        <section className="details" >
            <div className="adminDetails">
                <div className="data-header">
                    <h2 className="heading">Cities List Details / Updates</h2>
                    <Link to="/Admin/Cities" className="btn">Back</Link>
                </div>
                <div className='create_banner_container'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="banner_flex">
                            <label htmlFor="">City Id</label>
                            <input disabled type="number" id='' value={cityId} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="name">City Name</label>
                            <input type="text" id='name' value={CityName} onChange={handleCityName} />
                        </div>
                        <div className="banner_flex">
                            <label htmlFor="Short">Short City Name</label>
                            <input type="text" id='Short' value={Shorcity} onChange={handleShortName} />
                        </div>

                     
                        <button className='btn' onClick={handleCLick}>Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AdminCitiesDetails;