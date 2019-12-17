import React from 'react'
//import './header/Header.scss'
import { Link } from 'react-router-dom'
//import logo from './header/Logo-01.jpg'
// const authenticatedOptions = (
//   <React.Fragment>
//     <Link class="menu-sign" to="/change-password">Change Password</Link>
//     <Link class="menu-sign" to="/sign-out">Sign Out</Link>
//     <Link class="menu-sign" to="/my-profile">My Profile </Link>
    
//   </React.Fragment>
// )
// const unauthenticatedOptions = (
//   <React.Fragment>
//     <Link class="menu-sign" to="/sign-up">Sign Up</Link>
//     <Link class="menu-sign" to="/sign-in">Sign In</Link>
//   </React.Fragment>
// )
// const alwaysOptions = (
//   <React.Fragment>
     
//     <Link class="menu-sign" to="/home">Home</Link>
//     <Link class="menu-sign" to="/Centeres">Centeres </Link>
    
//   </React.Fragment>
// )
const MyProfile = ({ user }) => (
  <header className="main-header">
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      </nav>
    

     <div> 
      <h1> {user.email} 
      </h1>
      <h2>{user.relation}</h2>
  </div>
  </header>
  
)
export default MyProfile