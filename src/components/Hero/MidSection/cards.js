import React from 'react'
import './cards.css'
function cards() {
    return (
        <div className="grand_parent">
            <h1>Courses</h1>
            <div className="parents">
                <div className="child">
                    <p>Banking</p>
                </div>
                <div className="child">
                    <p>Railway</p>
                </div>
                <div className="child">
                    <p>Defense</p>
                </div>
                <div className="child">
                    <p>Engineering</p>
                </div>
            </div>
        </div>
    )
}
export default cards;
