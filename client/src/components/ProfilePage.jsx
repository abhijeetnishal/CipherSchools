import React from 'react'
import '../styles/ProfilePage.css'
import compass from '../assets/compass.png'
import bellicon from '../assets/bellicon.svg'
import searchicon from '../assets/searchicon.svg'

const ProfilePage = () => {
  return (
    <div className='main-container'>
      <div className='navbar'>
        <div className='iconAndIconName'>
          <img className='icon' src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" alt="" />
          <div className='iconName'>CipherSchools</div>
        </div>
        <div className='browse-themeBtn-notification-search'>
          <button className='browse'>
            <img className='browse-symbol' src={compass} alt="" />
            <div className='browse-name'>Browse</div>
            <div className='downBtn'>⌄</div>
          </button>
          <div className='themeBtn'>
            
          </div>
          <img className='notification' src={bellicon} alt="" />
          <img className='search' src={searchicon} alt="" />
        </div>
      </div>

      <div className='user-profile-details'>
        <div className='photo-name-email'>
          <div className='photo-btn'>
            <img className='photo' src="" alt="" />
            <button className='btn'> </button>
          </div>
          <div className='hello-name-email'>
            <div className='hello'>Hello,</div>
            <div className='name'>Abhijeet</div>
            <div className='email'>abhijeet@gmail.com</div>
          </div>
        </div>
        <div className='followercnt'>
        </div>
      </div>

      <div className='about-me-section'>
        <div className='aboutme-editBtn'>
          <div className='aboutme'></div>
          <button className='editBtn'>Edit</button>  
        </div>
        <textarea className='aboutme-textarea' name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div className='cipher Map'>

      </div>
    </div>
  )
}

export default ProfilePage