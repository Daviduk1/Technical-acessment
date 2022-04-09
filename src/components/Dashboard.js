import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="dashboard-container">
            <div className="ellipse-1">
                <img src="./Images/Ellipse 28.png" alt="" />
            </div>
            <div className="payment-success">
                <img src="./Images/vector (2).png" alt="" className='pay' /><span>Payment successful</span>
            </div>
            <div className="bill-dashboard">
                <img src="./Images/Dashboard 2.png" alt="" />
            </div>
            <div className="internet">
                <img src="./Images/Ellipse 11.png" alt="" />
                <img src="./Images/Ellipse 12.png" alt="" />
                <img src="./Images/Ellipse 13 (1).png" alt="" />
                <img src="./Images/Ellipse 14.png" alt="" />
            </div>
        </div>
        <div className="payment">
            <div className="bill-payment">
                <button>BILL PAYMENT</button>
                <h1>Take advantage of seamless <br></br>payments at a low or no cost.</h1>
                <p>With only a few clicks on your smartphone, you can pay all of your bills <br></br>and top up your airtime at the lowest possible price.</p>
            </div>
            <div className="purchase">
                <img src="./Images/vector (2).png" alt="" />
                <span>Purchase airtime and data for all networks you can get 10% <br></br>discount.
                </span><br></br>
                <img src="./Images/vector (2).png" alt="" /><span>Pay for your cable television, power and water bills and save <br></br>up to 100% on fees</span><br></br>
                <img src="./Images/vector (2).png" alt="" /><span>You can get up to 10% discount when you pay your bills</span><br></br>
            </div>
        </div>
    </div>
  )
}

export default Dashboard