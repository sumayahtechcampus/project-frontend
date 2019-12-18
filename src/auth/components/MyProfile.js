import React from 'react'
//import './header/Header.scss'
import { Link } from 'react-router-dom'
//import logo from './header/Logo-01.jpg'

const MyProfile = ({ user }) => (
  <header>
     <div> 
      <h1>{user.email}</h1>
      <h2>{user.name}</h2>
      <h2>{user.relation}</h2>
      <h2>{user.age}</h2>
      <h2>{user.phone}</h2>
  </div>
  </header>
  
)
export default MyProfile