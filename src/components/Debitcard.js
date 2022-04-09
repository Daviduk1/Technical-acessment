import React from 'react'
import './Debit.css'

const Debitcard = () => {
  return (
    <div className='debitcard-container'>
        <div className="debitcard">
            <div className="vectors-images">
                <img src="./Images/vector c.png" alt="" />
                <img src="./Images/vector p.png" alt="" />
                <img src="./Images/vector n.png" alt="" />
                <img src="./Images/vector a.png" alt="" />
            </div>
            <div className="card1-debit">
                <img src="./Images/Ellipse 28.png" alt="" />
                <img src="./Images/Card 1.png" alt="" className='card20' />
            </div>
            <div className="payment20">
                <img src="./Images/Vector (2).png" alt="" />
                <span>Payment sucessful</span>
                <p>20,000</p>
            </div>
        </div>
        <div className="virtualcards">
            <button>VIRTUAL CARD</button>
            <h1>Get an authentic card that <br></br>pays you back.</h1>
            <p>The Mollo debit card gives you more financial control, security, and<br></br> access to deals.</p>
        <div className="virtual-images">
            <div className="v-image">
                <img src="./Images/vector (2).png" alt="" />
                <span>You can make as many cards as you want</span>  
            </div>
            <div className="v-image">
                <img src="./Images/vector (2).png" alt="" />
                <span>For your transactions, we offer a transparent and <br></br>dependable exchange rate</span>  
            </div>
            <div className="v-image">
                <img src="./Images/vector (2).png" alt="" />
                <span>With our cashback loyalty scheme you will be able to pay <br></br>smarter and earn more</span>  
            </div>
            <div className="v-image">
                <img src="./Images/vector (2).png" alt="" />
                <span>Compatible with Apple Pay, Google Pay, Paypal, Netflix,<br></br> Amazon, Spotify and other famous websites.</span>  
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Debitcard