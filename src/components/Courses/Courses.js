import React from 'react'
import { NavLink } from 'react-router-dom'
import './Courses.css'


function Courses(props) {
    console.log(props)
    return (
        <div>
            <course>
                <ul className="courses_links"> 
                    <li>
                         <NavLink exact activeClassName="active_class" to='/products/'>{props.name}</NavLink>
                    </li>
                </ul>
            </course>
        </div>
    )
}


// const Courses = (props) => {
//     console.log(props);

//     const clickedItem = (e) => {
//         console.log()
        
//         // const courseName = (e.target.outerText);
//         // console.log(e.target.outerText);
//         // return e.target.outerText;
//     }
    
    
//     return (
//         <div>
//             <course>
//             <ul className="courses_links">
//                 <li>
//                 <NavLink exact activeClassName="active_class" to={"/products/Railway"} onClick={clickedItem} name="Railway"> Railway</NavLink>
//                 </li>

//                 <li>
//                 <NavLink exact activeClassName="active_class" to='/products/Banking' onClick={clickedItem}> Banking  </NavLink>
//                 </li>

//                 <li>
//                 <NavLink exact activeClassName="active_class" to='/products/SSC' onClick={clickedItem}> SSC </NavLink>
//                 </li>

//                 <li>
//                 <NavLink exact activeClassName="active_class" to='/products/Defence' onClick={clickedItem}> Defence </NavLink>
//                 </li>
//             </ul>
//             </course>
//         </div>
//     )
// }

export default Courses;
