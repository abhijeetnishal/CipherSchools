import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/RegisterPage.css'


const LandingPage = () => {
  return (
    <div>
      <Link style={{padding:'20px', display: 'flex' , justifyContent: 'center'}} to='/register'>Register</Link>
      <Link style={{padding:'20px', display: 'flex' , justifyContent: 'center'}} to='login'>Login</Link>
    </div>
  )
}

export default LandingPage