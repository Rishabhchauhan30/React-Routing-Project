import React from 'react'
import Navbar from '../components/Header/Navbar'
import Slider from '../components/Hero/TopSection/Slider'
import { Footer } from '../components/Footer/Footer'
// import Courses from '../components/Courses/Courses'
import CoursesList from '../components/Courses/CoursesList'

function About() {
    return (
        <div>
            <Navbar/>
            <h1>This is Home Page</h1>
            <br/>
            <Slider/>
            <br/>
            <br/>
            <h1>Products</h1>
            <br/>
            <CoursesList/>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}

export default About
