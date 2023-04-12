import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../styles/RegisterPage.css'
import  Loading  from '../components/Loading'

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [btnClick, setBtnClick] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(null);
  
  const handleSubmit = async(e)=>{
    setIsLoading(true);
    setBtnClick(true);
    e.preventDefault();
    const response = await fetch('http://localhost:4000/auth/register-user',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        password
      })
    })
    setStatusCode(response.status);
    await response.json().then((data)=>{
      setMessage(data);
      setIsLoading(false);
    })
  }

  if(statusCode === 201){
    return <Navigate to={'/login'} />
  }

  return (
    <div className='register'>
      <div className='container'>
        <div className="registration form">
        <header>Register</header>
        <form>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
          <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number (optional)" />
          <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" />
        </form>
        <div>
        <input type='button' className="button" onClick={handleSubmit} disabled={isLoading} value='Register' /> 
          <div className='messageDiv'>
            {
              btnClick?
              (<div className='message'>
                {
                  isLoading ? (<Loading/>) : (message)
                }
              </div>):
              (<div>
              </div>)
            }
          </div>
        </div>
          <div className="signup">
            <span className="signup">Already have an account?
            <Link to='/login'>Login</Link>
            </span>
          </div>
        </div>
        </div>
      </div>
  )
}

export default RegisterPage
