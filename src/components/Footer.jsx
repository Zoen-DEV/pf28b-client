import React from 'react'
import { Link } from 'react-router-dom'
import LOGOdemo from '../assets/LOGOdemo.png'

const Footer = () => {
  return (
    <footer>
        <Link className='link' to='/about'>ABOUT</Link>
        <img src={LOGOdemo} alt="animercce" />
        <Link className='link' to='/contactus'>CONTACT US</Link>
    </footer>
  )
}

export default Footer