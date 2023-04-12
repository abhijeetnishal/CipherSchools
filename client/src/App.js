import {Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import ProtectRoute from './ProtectRoute'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/profile/:id' element={<ProtectRoute><ProfilePage/></ProtectRoute>} />
      </Routes>
    </div>
  );
}

export default App;
