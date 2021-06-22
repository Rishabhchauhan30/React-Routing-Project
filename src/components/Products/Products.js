import React from 'react'
import { NavLink } from 'react-router-dom'
import './Products.css'


function Products() {
    const clickedItem = (e) => {
        const courseName = (e.target.outerText);
        console.log(e.target.outerText);
        // return e.target.outerText;
    }
    
    return (
        <div>
            <pro>
            <ul className="products_links">
                <li>
                <NavLink exact activeClassName="active_class" to={"/products/Railway"} onClick={clickedItem}> Railway</NavLink>
                </li>

                <li>
                <NavLink exact activeClassName="active_class" to='/products/Banking' onClick={clickedItem}> Banking  </NavLink>
                </li>

                <li>
                <NavLink exact activeClassName="active_class" to='/products/SSC' onClick={clickedItem}> SSC </NavLink>
                </li>

                <li>
                <NavLink exact activeClassName="active_class" to='/products/Defence' onClick={clickedItem}> Defence </NavLink>
                </li>
            </ul>
            </pro>
        </div>
    )
}

export default Products;
