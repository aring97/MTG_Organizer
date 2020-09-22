import React from "react"
import {Link} from "react-router-dom"
import "../../styles/nav/nav.css"
export const NavBar=(props)=>{
    return(
        <ul className="navbar">
             <li className="navbar__item">
                <Link className="navbarlink" to="/">Add cards</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/myCards">My Cards</Link>
            </li>
        </ul>
    )
}