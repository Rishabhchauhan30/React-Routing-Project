import React from 'react'

function Arrow(props) {
    return (
        <div className="arrow">
            <span className="prev" onClick={props.prevSlide}>
                &#10094;
            </span>
            <span className="next" onClick={props.nextSlide}>
                &#10095;
            </span>
        </div>
    );
}

export default Arrow;