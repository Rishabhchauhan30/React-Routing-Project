import React from 'react'
import Navbar from '../components/Header/Navbar'
import Slider from '../components/Hero/TopSection/Slider'
import { Footer } from '../components/Footer/Footer'
import Products from '../components/Products/Products'

function About() {
    return (
        <div>
            <Navbar/>
            {/* <br/> */}
            <h1>This is Home Page</h1>
            <br/>
            <Slider/>
            <br/>
            <br/>
            <h1>Products</h1>
            <br/>
            <Products/>
            <br/>
            <br/>
            <Footer/>
        </div>
    )
}

export default About
