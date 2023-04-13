import { useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import '../styles/RegisterPage.css'
import Loading from '../components/Loading'
import { Cookies } from "react-cookie"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cookies = new Cookies();
  const [userId, setUserId] = useState('');

  const [btnClick, setBtnClick] = useState(false);
  const [message, setMessage] = useState('');
  const [statusCode, setStatusCode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async(e)=>{
    setIsLoading(true);
    setBtnClick(true);
    e.preventDefault();
    const response = await fetch('https://servercipherschools.vercel.app/auth/login-user',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      }),
      credentials: 'include',
    })
    setStatusCode(response.status);
    await response.json().then((userInfo)=>{
      cookies.set('myCookie', userInfo, { path: '/' });
      const cookieValue = cookies.get('myCookie');
      //console.log(cookieValue);
      setUserId(cookieValue.id);
      setMessage(userInfo.message);
      setIsLoading(false);
    })
  }

  if(statusCode === 200 && userId){
    return <Navigate to={`/profile/${userId}`} />
  }
  
  return (
    <div className='register'>
        <div className='container'>
        <div className="login form">
        <header>Login</header>
        <form>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
          <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" />
        </form>
        <div>
          <input type='button' className="button" onClick={handleSubmit} disabled={isLoading} value='Login' /> 
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
          <span className="signup">Don't have an account?
          <Link to='/register' >Register</Link>
          </span>
        </div>
        </div>
        </div>
      </div>
  )
}

export default Login
