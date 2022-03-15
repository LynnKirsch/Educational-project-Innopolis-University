import React from 'react';
import Slider from 'infinite-react-carousel';

const Carousel = () => {
    return (
        <Slider dots>
            <div>
                <img src = '/images/Cupcake_1.jpg' alt = 'slider' className={'slider__image'}/>
            </div>
            <div>
                <img src = '/images/Cupcake_3.jpg' alt = 'slider' className={'slider__image'}/>
            </div>
            <div>
                <img src = '/images/Cupcake_4.jpg' alt = 'slider' className={'slider__image'}/>
            </div>
        </Slider>
    )
}

export default Carousel;