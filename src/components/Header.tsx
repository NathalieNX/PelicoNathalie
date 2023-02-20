import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id='sidebar'>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/products`}>Product Listing</Link>
          </li>
          <li>
            <Link to={`/cart`}>Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
