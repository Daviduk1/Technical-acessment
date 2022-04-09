import React from 'react'
import './Transfer.css'

const Transfer = () => {
  return (
    <div className='transfer'>
      <div className="mini-container">
          <button>TRANSFER FUND</button>
          <h1>Send money to friends and <br></br>family in a flash.</h1>
          <p>Transfers to the Mollo account are free, and you can send money to <br></br>any bank account in Nigeria.</p>
          <div className="images">
              <img src="./Images/vector (2).png" alt="" />
              <span>There are no conversion fees and the exchange rates are <br></br>straight forward</span>
          </div>
          <div className="images">
              <img src="./Images/vector (2).png" alt="" />
              <span> Transfers to local bank accounts and Mollo mobile money <br></br>accounts are completed quickly</span>
          </div>
          <div className="images">
              <img src="./Images/vector (2).png" alt="" />
              <span>Transfer of funds are easy discreet and fast</span>
          </div>
      </div>
      <div className="card-container">
            <div className="circle">
              <img src="./Images/Ellipse 23.png" alt="" />
            </div>
            <div className="dashboard2">
              <img src="./Images/Frame 5 1.png" alt="" className='frame'/>
              <img src="./Images/Dashboard 2 (1).png" alt="" />
            </div>
            <div className="successful-transfer">
            <img src="./Images/vector (2).png" alt="" />
              <span>Transfer successful</span>
              <p>200</p>
            </div>
      </div>
      
    </div>
  )
}

export default Transfer