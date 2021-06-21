import React from 'react'
import SliderImages from './SliderImages';

function Dots(props) {
    return (
        <div className="all-dots">{SliderImages.map((slide, index) => (
            <span key={index} className={`${props.activeIndex === index ? 'dot-active-dot' : 'dot'}`} 
            onClick={ event => props.onClick((event.target.value = index))}
            ></span>
        ))}</div>
    )
}

export default Dots;
