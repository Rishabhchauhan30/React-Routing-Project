import React from 'react'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import Navbar from '../components/Header/Navbar'
import { withRouter } from 'react-router-dom'

// function Products() {
//     const clickedItem = () => {
//         const { courseName } = useParams();
//     }
//     return (
//         <div>
//             <Navbar/>
//             <br/>
//             <h1> This is Our {  } Page</h1>
//             <br/>
//             <Footer/>
//         </div>
//     )
// }

const Products = () => {
    const { courseName } = useParams();
    return (
        <div>
            <Navbar/>
            <br/>
            <h1>Products page </h1>
            <br/>
            <h1> Selected Course is { courseName }</h1>
            <br/>
            <Footer/>
        </div>
    )
}

export default withRouter(Products);
