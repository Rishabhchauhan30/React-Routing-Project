import React from 'react'
import Navbar from '../components/Header/Navbar'
import { Footer } from '../components/Footer/Footer'

function ErrorPage() {
    return (
        <div>
            <Navbar/>
            <br/>
            {alert('You Just Hit a Wrong Url!!')};
            <h1>You Just Hit a Wrong Url!!</h1>
            <br/>
            <Footer/>
        </div>
    )
}

export default ErrorPage;
