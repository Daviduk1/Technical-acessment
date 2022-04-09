import React from 'react'
import './RegistrationDetails.css'

const RegistrationDetails = () => {
  return (
    <div className='registration-container'>
        <div className="registration">
            <h1>Register For Free</h1>
            <p>Mollo is available on Google Play and the App Store.To enjoy ultimate<br></br> financial security</p>
        <div className="store">
            <div className="play-store">
                    <button>
                    <i class="fa-brands fa-google-play"></i>
                    <span>get it <br></br>play store</span>
                    </button>
                </div>
                <div className="apple-store">
                   <button><i class="fa-brands fa-apple"></i><span>get it on<br></br>apple store</span></button>
                </div>
        </div>
        </div>
        <div className="dashboard22">
            {/* <img src="./Images/Ellipse 21.png" alt="" className='p1'/>
            <img src="./Images/Ellipse 21.png" alt="" className='p1'/>
            <img src="./Images/Ellipse 21.png" alt="" className='p1'/>
            <img src="./Images/Ellipse 21.png" alt="" className='p1'/> */}
            <img src="./Images/Dashboard 2 (1).png" alt="" />
        </div>


    </div>
  )
}

export default RegistrationDetails