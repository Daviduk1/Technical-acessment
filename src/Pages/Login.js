import React from "react";
import Logo from "../components/assets/moll.jpeg"
import Img from "../components/assets/lady.jpeg";
import Bgc from "../components/assets/half circle.jpeg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [passWord, setPassword] = useState("")
  const [user, setUser] = useState('')

  useEffect(()=>{
    if (user.email){
      navigate('/dashboard')
    }
  })
  const onSubmit =(evt) => {
    evt.preventDefault()
    const newUser = { passWord, email}
    const url = 'https://jsonplaceholder.typicode.com/users'
    axios.post(url, newUser, {header:{ 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' }})// {newUser})
    .then(response => {
    
        console.log(response.data)
        
      })
    .catch(err => console.log(err))

    setUser(newUser)
    setTimeout(()=>{
      navigate(`/dashboard`)
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
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter your Email"value={email} onChange={evt=>setEmail(evt.target.value)} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" value={passWord} onChange={evt=>setPassword(evt.target.value)}/>
            </div>
            <p>forgot passWord? <span><a href="#">Reset it</a></span></p>

            <button className="btn" type="submit"onClick={onSubmit}>
              Login in
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
  )
}

export default Login