import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero-section'>
        <div className="digital">
            <button className='digital-bank'>DIGITAL BANK</button>
            <h1>All lifestyles can gain <br></br>from digital banking.</h1>
            <p>With a free Mollo, you can unlock the power of money. All of your<br></br> bills, money transfers, buy airtime can be done in one spot.</p>
            <button className='get-started'>Get Started</button>
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
        <div className="eclipse">
            <div className="eclipse-image">
                <img src="./Images/ellipse 28.png" alt="" className='ellipse'/>
                <img src="./Images/freehand.png" alt="" className='freehand' />
                <img src="./Images/vector (3).png" alt="" className='vector-3' />
                <img src="./Images/vector (4a).png" alt="" className='vector-4'/>
                <img src="./Images/vector (2a).png" alt="" className='vector-2' />
            </div>
            {/* <div className="freehand">
            </div>
            <div className="vectors">
            </div> */}
        </div>
    </div>
  )
}

export default Hero