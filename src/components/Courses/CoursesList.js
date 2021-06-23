import React from 'react'
import Courses from './Courses'
import './Courses.css'

function CoursesList() {
    return (
        <div>
            <Courses
                id="1"
                name="Railway"
                details="Railway Course"
                logo=""
            />
            <Courses
                id="2"
                name="Banking"
                details="Railway Course"
                logo=""
            />
            <Courses
                id="3"
                name="Defence"
                details="Railway Course"
                logo=""
            />
            <Courses
                id="4"
                name="SSC"
                details="Railway Course"
                logo=""
            />
        </div>
    )
}

export default CoursesList
