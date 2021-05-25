import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <ul className='menu'>
      <li>
        <Link to='/restaurants'>Home</Link>
      </li>
      <li>
        <Link to='/restaurants/new'>Add Restaurant</Link>
      </li>
    </ul>
  )
}

export default NavBar
