import React from "react";
import Logo from "../components/assets/moll.jpeg"
import Img from "../components/assets/lady.jpeg";
import Bgc from "../components/assets/half circle.jpeg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import './Signup.css'

const Signup = () => {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [passWord, setPassword] = useState("")
  const [user, setUser] = useState('')

  useEffect(()=>{
    if (user.email){
      alert('Your Registration was Successful')
    }
  })
  const onSubmit =(evt) => {
    evt.preventDefault()
    const newUser = {fullName, phone, passWord, email}
    const url = 'https://jsonplaceholder.typicode.com/users'
    axios.post(url, newUser, {header:{ 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' }})// {newUser})
    .then(response => {
    
        console.log(response.data)
        
      })
    .catch(err => console.log(err))

    setUser(newUser)
    setTimeout(()=>{
      navigate(``)
    }, 2000)
  }
  return (
    <div>
      <header className="head-image">
        <img src={Logo} alt="logo" />
      </header>

      <section className="section">
        <div className="register">
          <h1>Sign Up to Mollo</h1>
          <p>
            Please enter your Mollo password and the email address<br></br> associated
            with your account to sign in.
          </p>
          <form className="form" action="#">
            <div>
              <label htmlFor="name">Full Name</label>
              <input type="text" placeholder="Enter your Name" value={fullName} onChange={evt=>setFullName(evt.target.value)} />
            </div>
            <div>
              <label htmlFor="Phone">Phone Number</label>
              <input type="tel" placeholder="Enter your Phone Number" value={phone} onChange={evt=>setPhone(evt.target.value)} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter your Email"value={email} onChange={evt=>setEmail(evt.target.value)} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" value={passWord} onChange={evt=>setPassword(evt.target.value)}/>
            </div>
            <p>forgot passWord? <span><a href="#">Reset it</a></span></p>
            <button className="btn" type="submit" onClick={onSubmit}>
              Sign in
            </button>
          </form>
        </div>

        <div className="img-container">
          <div>
            <img src={Img} alt="" className="woman" />
          </div>
          <div className="bgc-img">
            <img src={Bgc} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;