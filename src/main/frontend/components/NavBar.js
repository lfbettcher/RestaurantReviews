import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <ul className='menu-list'>
      <li className="menu-list__item">
        <Link to='/restaurants' className="menu-list__link">Home</Link>
      </li>
      <li className="menu-list__item">
        <Link to='/restaurants/new' className="menu-list__link">Add Restaurant</Link>
      </li>
    </ul>
  )
}

export default NavBar
