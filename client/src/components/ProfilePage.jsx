import React, { useState } from 'react'
import '../styles/ProfilePage.css'
import compass from '../assets/compass.png'
import bellicon from '../assets/bellicon.svg'
import searchicon from '../assets/searchicon.svg'
import ciphermap from '../assets/ciphermap.png'
import userProfile from '../assets/user.png'
import editBtn from '../assets/editbtn.png'
import PasswordUpdate from './PasswordUpdate';

const ProfilePage = () => {
  const [postImage, setPostImage] = useState({myFile: ""});

  const [showPopUpUpdate, setShowPopUpUpdate]  = useState(false);

  function convertToBase64(file){
    return new Promise((resolve, reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = ()=>{
        resolve(fileReader.result)
      };
      fileReader.onerror = (error)=>{
        reject(error)
      }
    })
  }

  const handleFileUpload = async (e)=>{
    e.preventDefault();
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    //console.log(base64);
    setPostImage({...postImage, myFile: base64});
  }

  function handleCloseDialogUpdate(){
    setShowPopUpUpdate(false);
  }

  function handleUpdateClick(){
    setShowPopUpUpdate(true);
  }

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
            <img className='photo' src={userProfile} alt="" />
            <input onChange={(e)=> handleFileUpload(e)} type="file" lable="Image" accept='.jpeg, .png, .jpg' name="myFile" id="file-upload" />
            <label htmlFor="file-upload" className='btn'> 
              <img className='editBtnImg' src={editBtn} alt="" />
            </label>
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
              <input className='left-linkinput' type="text" placeholder='' name="" id="" />
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
              <input className='left-linkinput' type="text" placeholder='' name="" id="" />
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
              <input className='left-linkinput' type="text" placeholder='' name="" id="" />
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

      <hr className='horizontal-line'/>

      <div className='ontheweb-container'>
        <div className='ontheweb-editbtn'>
          <div className='aboutme'>PROFESSIONAL INFORMATION</div>
          <button className='editBtn'>Edit</button> 
        </div>
        <div className='websitename-container'>
          <div className='websitename'>
            <div className='linkname'>Highest education</div>
            <select className='left-linkinput'>
              <option value="option1">Primary</option>
              <option value="option2">Secondary</option>
              <option value="option3">Higher Secondary</option>
              <option value="option2">Graduation</option>
              <option value="option2">Post Graduation</option>
            </select>
          </div>
          <div className='websitename'>
            <div className='linkname'>What do you do currently?</div>
            <select className='linkinput'>
              <option value="option1">Schooling</option>
              <option value="option2">College Student</option>
              <option value="option3">Teaching</option>
              <option value="option2">Job</option>
              <option value="option2">Freelancing</option>
            </select>
          </div>
        </div>
      </div>

      <hr className='horizontal-line'/>

      <div className='ontheweb-container'>
        <div className='ontheweb-editbtn'>
          <div className='aboutme'>PASSWORD & SECURITY</div>
          <button onClick={handleUpdateClick} className='editBtn'>Change</button> 
          {
                    (showPopUpUpdate) && (
                        <PasswordUpdate
                            onClose={handleCloseDialogUpdate}
                        />
                    )
          }
        </div>
          <div className='password-container'>
            <div className='linkname'>Password</div>
            <input className='linkinput' type="text" placeholder='*************' name="" id="" />
          </div>
      </div>

      <hr className='horizontal-line'/>

      <div className='ontheweb-container'>
        <div className='ontheweb-editbtn'>
          <div className='aboutme'>INTERESTS</div>
          <button className='editBtn'>Edit</button> 
        </div>
          <div className='password-container'>
          </div>
      </div>
        
    </div>
  )
}

export default ProfilePage