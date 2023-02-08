import './AboutComponent.css'

import about1 from '../../../Img/about_1.jpeg'
import about2 from '../../../Img/about_2.jpeg'
import about3 from '../../../Img/about_3.jpeg'
import about4 from '../../../Img/about_4.jpg'


function AboutComponenet() {
    return (
            <div className="about_content">
                <div className="about_heading">
                    <h2>About Us</h2>
                    <p>Providig Restaurant Staff Services All Over Pakistan</p>
                </div>
                <div className="about_card_container">
                    <div className="about_card">
                        <img src={about1} alt="" />
                        <h4>fresh salads</h4>
                    </div>
                    <div className="about_card">
                        <img src={about2} alt="" />
                        <h4>party platters</h4>
                    </div>
                    <div className="about_card">
                        <img src={about3} alt="" />
                        <h4>sea food</h4>
                    </div>
                    <div className="about_card">
                        <img src={about4} alt="" />
                        <h4>vegan desserts</h4>
                    </div>
                </div>
            </div>
    );
}

export default AboutComponenet;