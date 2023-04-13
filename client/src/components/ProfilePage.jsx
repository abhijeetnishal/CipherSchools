import React from 'react'
import '../styles/ProfilePage.css'
import compass from '../assets/compass.png'
import bellicon from '../assets/bellicon.svg'
import searchicon from '../assets/searchicon.svg'
import ciphermap from '../assets/ciphermap.png'

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
        <div className='follower-cnt'>
          {} Followers
        </div>
      </div>

      <div className='about-me-section'>
        <div className='aboutme-editBtn'>
          <div className='aboutme'>ABOUT ME</div>
          <button className='editBtn'>Edit</button>  
        </div>
        <textarea className='aboutme-textarea' placeholder='Add something about you.' name="" id="" cols="30" rows="10"></textarea>
      </div>

      <hr className='horizontal-line'/>

      <div className='cipher-text-map'>
        <div className='aboutme'>CIPHER MAP</div>
        <img className='cipher-map' src={ciphermap} alt="" />
      </div>

      <hr className='horizontal-line'/>

      <div className='ontheweb-container'>
        <div className='ontheweb-editbtn'>
          <div className='aboutme'>ON THE WEB</div>
          <div className='editBtn'>Edit</div>
        </div>
        <div className='grid-container'>
          <div className='websitename-container'>
            <div className='websitename'>
              <div className='linkname'>
                Linkedin
              </div>
              <input className='linkinput' type="text" placeholder='' name="" id="" />
            </div>
            <div className='websitename'>
              <div className='linkname'>
                GitHub
              </div>
              <input className='linkinput' type="text" placeholder='' name="" id="" />
            </div>
            </div>
            <div className='websitename-container'>
            <div className='websitename'>
              <div className='linkname'>
                Facebook
              </div>
              <input className='linkinput' type="text" placeholder='' name="" id="" />
            </div>
            <div className='websitename'>
              <div className='linkname'>
                Twitter
              </div>
              <input className='linkinput' type="text" placeholder='' name="" id="" />
            </div>
            </div>
            <div className='websitename-container'>
            <div className='websitename'>
              <div className='linkname'>
                Instagram
              </div>
              <input className='linkinput' type="text" placeholder='' name="" id="" />
            </div>
            <div className='websitename'>
              <div className='linkname'>
                Website
              </div>
              <input className='linkinput' type="text" placeholder='' name="" id="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProfilePage