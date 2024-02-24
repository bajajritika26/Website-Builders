import React from 'react'
import "./Footer.scss"
import DownArrow from "../../assets/DownArrow.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='wrapper'>
<div className='list'>
   <h3>CATEGORIES</h3>
   <span>Web Builder</span>
    <span>Hosting</span>
    <span>Data Center</span>
    <span>Robotic-Automation</span>

</div>
<div className='list'>
    <h3>CONTACT</h3>
    <span>Contact</span>
    <span>Privacy Policy</span>
    <span>Terms of Service</span>
    <span>Categories</span>
    <span>About</span>

</div>
<div className='list'>
    <span className='item'>United States <img src={DownArrow} alt=''/> </span>
   

</div>
        </div>
    </div>
  )
}

export default Footer