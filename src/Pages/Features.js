import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div className='features'>
      <div className="images">
        <img src="./Images/camera.png" alt="" />
        <span>Wallet</span>
      </div>
      <div className="images">
        <img src="./Images/app1.png" alt="" />
        <span>Finance Manager</span>

      </div>
      <div className="images">
        <img src="./Images/wallet.png" alt="" />
        <span>Cards</span>
      </div>
        
    </div>
  )
}

export default Features