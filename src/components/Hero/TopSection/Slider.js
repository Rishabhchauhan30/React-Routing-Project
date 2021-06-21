import React, {useState, useEffect} from 'react'
import SliderImages from './SliderImages';
import Arrow from './Arrow';
import Dots from './Dots';
import SliderContent from './SliderContent';
import './Slider.css';


const len = SliderImages.length -1 ;

function Slider() {

    const [activeIndex, setActiveIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    //     }, 5000);
    // }, [activeIndex]);

    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex}/>

            <Arrow 
                prevSlide={() => 
                    setActiveIndex(activeIndex <1 ? len : activeIndex - 1)
                }
                nextSlide = {() => 
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />

            <Dots 
                activeIndex={activeIndex} 
                onClick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    )
}

export default Slider;
