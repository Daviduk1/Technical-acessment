import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-image">
            <img src="./Images/mollo 1.png" alt="" />
        </div>
        <div className="footer-company">
            <img src="./Images/COMPANY.png" alt="" />
            <ul>
                <li>our story</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Media Center</li>
            </ul>
        </div>
        <div className="footer-contact">
            <img src="./Images/CONTACT.png" alt="" />
            <p>Enquiry</p>
        </div>
        <div className="footer-socials">
            <img src="./Images/vector (twitter).png" alt="" />
            <img src="./Images/vector (face).png" alt="" />
            <img src="./Images/vector (lin).png" alt="" />
            <img src="./Images/vector (inst).png" alt="" />
        </div>

    </div>
  )
}

export default Footer