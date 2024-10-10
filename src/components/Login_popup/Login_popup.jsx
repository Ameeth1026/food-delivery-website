import React, { useState } from 'react'
import './Login_popup.css'
import {assets} from '../../assets/assets'

const Login_popup = ({setShowLogin}) => {
  const [currentstate,setCurrentstate] = useState("Login");


  return (
    <div className='login_popup'>

      <form action="" className="login_popup_container">

        <div className="login_popup_title">

          <h2>
            <img src={assets.logo} alt="" />
            {currentstate}
          </h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        
        </div>

        <div className="login_popup_input">
          
          {currentstate==="Login"?<></>: 
          <div className="user_field">
            <i class="fas fa-user"></i>
            <input type="text" placeholder='Your Name'  required/>
          </div> }
            <div className="user_field">
            <i class="fas fa-envelope"></i>
          <input type="email" placeholder='Your Email'  required/>
            </div>
            <div className="user_field">
            <i class="fas fa-lock"></i>
          <input type="password" placeholder='Your Password'  required/>
            </div>

        </div>

        <button>{currentstate==="Sign Up"?"Create Account":"Login"}</button>
        
        <div className="login_popup_condition">

          <input type="checkbox" name="" id="check" required />
          <p> i agree to the terms of use & privacy policy.</p>
       
        </div>

        {
          currentstate==="Sign Up"?
        <p className='select_page'>already have an account? <span onClick={()=>setCurrentstate("Login")}>login here</span></p>
        :<p className='select_page'>create a new account? <span onClick={()=>setCurrentstate("Sign Up")}>signup here</span></p>
        }

      </form>
    </div>
  )
}

export default Login_popup