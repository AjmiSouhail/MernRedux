import React from 'react'
import {Link} from "react-router-dom"
const Nav =()=>{
    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary" >
  <span className="navbar-brand text-white mx-4" >Employe</span>
    <ul className="navbar-nav">
            <li className="nav-item "><Link to="/employe"className="nav-link text-white" >Liste Employe</Link></li>
            <li className="nav-item">  <Link to="/ajout"  className="nav-link text-white">Ajout Employe</Link></li>
            </ul>
            </nav>
        </div>
    )
}
export default Nav ;