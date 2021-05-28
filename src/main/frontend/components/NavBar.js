import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <ul className='menu-list'>
        <li className="menu-list__item">
          <Link to='/restaurants' className="menu-list__link">Home</Link>
        </li>
        <li className="menu-list__item">
          <Link to='/restaurants/new' className="menu-list__link">Add Restaurant</Link>
        </li>
        <li className="menu-list__item">
          <Link to='/aboutus' className="menu-list__link">About Us</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
