import React from 'react'
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav>
                <div className="logo">Navbar <i class="fab fa-joomla"></i></div>
                <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
                    <li>
                        <NavLink exact activeClassName="active_class" to='/' > Home </NavLink>
                        {/* <a>Home</a> */}
                    </li>
                    <li>
                    <NavLink exact activeClassName="active_class" to='/products'> Products </NavLink>
                        {/* <a>Products</a> */}
                    </li>
                    <li>
                    <NavLink exact activeClassName="active_class" to='/service'> Services </NavLink>

                        {/* <a>Services</a> */}
                    </li>
                    <li>
                    <NavLink exact activeClassName="active_class" to='/about'> About </NavLink>
                        {/* <a>About</a> */}
                    </li>
                    <li>
                    <NavLink exact activeClassName="active_class" to='/contact'> Contact </NavLink>
                        {/* <a>Contact</a> */}
                    </li>
                </ul>
                <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
            </nav>
        </div>
    )
}

export default Navbar;
