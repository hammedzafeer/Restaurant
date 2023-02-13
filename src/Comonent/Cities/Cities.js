import { useState } from "react";
import { useEffect } from "react";

function City() {
    const [Cityname, setCityname] = useState([])
    const cities = ["Ahmadpur East", " Ahmed Nager Chatha", " Ali Khan Abad", " Alipur", " Arifwala", " Attock", " Bhera", " Bhalwal", " Bahawalnagar", " Bahawalpur", " Bhakkar", " Burewala", " Chillianwala", " Choa Saidanshah", " Chakwal", " Chak Jhumra", " Chichawatni", " Chiniot", " Chishtian", " Chunian", " Dajkot", " Daska", " Davispur", " Darya Khan", " Dera Ghazi Khan", " Dhaular", " Dina", " Dinga", " Dhudial Chakwal", " Dipalpur", " Faisalabad", " Fateh Jang", " Ghakhar Mandi", " Gojra", " Gujranwala", " Gujrat", " Gujar Khan", " Harappa", " Hafizabad", " Haroonabad", " Hasilpur", " Haveli Lakha", " Jalalpur Jattan", " Jampur", " Jaranwala", " Jhang", " Jhelum", " Kallar Syedan", " Kalabagh", " Karor Lal Esan", " Kasur", " Kamalia", " Kāmoke", " Khanewal", " Khanpur", " Khanqah Sharif", " Kharian", " Khushab", " Kot Adu", " Jauharabad", " Lahore", " Islamabad", " Lalamusa", " Layyah", " Lawa Chakwal", " Liaquat Pur", " Lodhran", " Malakwal", " Mamoori", " Mailsi", " Mandi Bahauddin", " Mian Channu", " Mianwali", " Miani", " Multan", " Murree", " Muridke", " Mianwali Bangla", " Muzaffargarh", " Narowal", " Nankana Sahib", " Okara", " Renala Khurd", " Pakpattan", " Pattoki", " Pindi Bhattian", " Pind Dadan Khan", " Pir Mahal", " Qaimpur", " Qila Didar Singh", " Rabwah", " Raiwind", " Rajanpur", " Rahim Yar Khan", " Rawalpindi", " Sadiqabad", " Sagri", " Sahiwal", " Sambrial", " Samundri", " Sangla Hill", " Sarai Alamgir", " Sargodha", " Shakargarh", " Sheikhupura", " Shujaabad", " Sialkot", " Sohawa", " Soianwala", " Siranwali", " Tandlianwala", " Talagang", " Taxila", " Toba Tek Singh", " Vehari", " Wah Cantonment", " Wazirabad", " Yazman", " Zafarwal",]

    const city = () => {
        fetch('http://localhost:3456/apiresturant/Cities', {
            method: "GET",
        }).then(res => res.json()).then(data => setCityname(data))

    }
    useEffect(() => {
      city()
    }, [])
    

    return (
        <>
            {Cityname.map((e, index) => {
                return <option id={e.cityId} key={index} >{e.cityName}</option>
            })}
        </>
    );
}

export default City;