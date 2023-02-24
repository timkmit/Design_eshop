import React from "react";
import { Carousel } from "react-bootstrap";
import sand from '../Slider/sand.jpg'
import galka from '../Slider/galka.jpg'
import sheben from '../Slider/sheben.jpg'

const Slider = () => {
    return ( 
        <Carousel>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                className="d-block w-100"
                src={sand}
                alt="sand"
                ></img>
            <Carousel.Caption>
                <h3>Песок</h3>
                <p>Большое количество разносортного песка!</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': '600px'}}> 
                <img
                className="d-block w-100"
                src={galka}
                alt="sand"
                ></img>
            <Carousel.Caption>
                <h3>Галька</h3>
                <p>Однородная и красивая</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{'height': '600px'}}> 
                <img
                className="d-block w-100"
                src={sheben}
                alt="sand"
                ></img>
            <Carousel.Caption>
                <h3>Щебень</h3>
                <p>Выбор большого количества щебня!</p>
            </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
     );
}
 
export default Slider;