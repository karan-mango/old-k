import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <div className="navbar">
      <div className="left">
        <div className="logo">hello</div>
      </div>
      <div className="right">
      
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/add-product">Add Product</Link>
            </li>
            <li>
              <Link to="/update-product">Update Product</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        
      </div>
    </div>
    </>
    

  )
}
