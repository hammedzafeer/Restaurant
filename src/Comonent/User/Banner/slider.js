import './slider.css'
import banner1 from '../../../Img/banner_1.jpeg'
import banner2 from '../../../Img/banner_2.jpg'
import banner3 from '../../../Img/banner_3.jpg'

import Carousel from 'react-bootstrap/Carousel';
const images = [
    {
        img: banner1,
        status: "active"
    },
    {
        img: banner2,
        status: "active"
    },
    {
        img: banner3,
        status: "active"
    }
]
// images.map((element, index) => {
//     console.log(element)
// })
// console.log(images[0]);
function SliderBanner() {
    return (
        <Carousel variant="dark" keyboard={true} pause={false}>
            {images.map((element, index) => {
                return <Carousel.Item interval={1000} key={index}>
                    <img
                        className="d-block slider_Img"
                        src={element.img}
                        alt={`Image ${index}`}
                    />
                </Carousel.Item>
                {/* if (element.status === "active") { */ }

                {/* } */ }
            })}

        </Carousel>
    );
}

export default SliderBanner;

{/* <Carousel.Caption>
<h3>First slide label</h3>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item> */}