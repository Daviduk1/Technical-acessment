import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const Navbar = () => {
  return (
    <div>
        <div className='container'>
                <div className='heading'>
                    <img src="./Images/mollo 3.png" alt="" />
                </div>
                
                   {/* <NavLink to = "/"></NavLink> */}
                   <div className="cfh">
                      <NavLink to="/"><button className='company'>Company <span><i class="fa-solid fa-caret-down"></i></span></button></NavLink>
                      <NavLink to="/features"><button className='features'>Features <span><i class="fa-solid fa-caret-down"></i></span></button></NavLink>
                      <NavLink to="/help"><button className='help'>Help <span><i class="fa-solid fa-caret-down"></i></span></button></NavLink>

                   </div>
                   <div className="signup-login">
                      <NavLink to = "/login"><button className='login'>Login</button></NavLink>
                      <NavLink to = "/signup"><button className='signUp'>Sign Up</button></NavLink>
                   </div>
                
        </div>
    </div>
  )
}

export default Navbar