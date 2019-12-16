import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link class="menu-sign" to="/change-password">Change Password</Link>
    <Link class="menu-sign" to="/sign-out">Sign Out</Link>
    <Link class="menu-sign" to="/my-profile">My Profile </Link>
    
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link class="menu-sign" to="/sign-up">Sign Up</Link>
    <Link class="menu-sign" to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
     
    <Link class="menu-sign" to="/">Home</Link>
    <Link class="menu-sign" to="/Centeres">Centeres </Link>

    
  </React.Fragment>
)

const Header = ({ user }) => (

  <header className="main-header">
    <nav>
      { alwaysOptions }
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      
      
    </nav>
  </header>




)


export default Header
