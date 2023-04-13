import React, { useEffect, useState } from 'react'
import '../styles/ProfilePage.css'
import compass from '../assets/compass.png'
import bellicon from '../assets/bellicon.svg'
import searchicon from '../assets/searchicon.svg'
import ciphermap from '../assets/ciphermap.png'
import userProfile from '../assets/user.png'
import editBtn from '../assets/editbtn.png'
import PasswordUpdate from './PasswordUpdate';
import ProfileUpdate from './ProfileUpdate'

const ProfilePage = () => {
  const [showPopUpUpdate, setShowPopUpUpdate]  = useState(false);
  const [showPopUpProfile, setShowPopUpProfile] = useState(false);

  const [newImage, setNewImage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [statusCode, setStatusCode] = useState(0);

  const [updateData, setUpdateData] = useState({firstName:'', lastName:'', mobile:'', image:''});
  const [updateBtnClick, setUpdateBtnClick] = useState(false);

  useEffect(()=>{
    setUpdateData(updateData);
    console.log(updateData);

        const firstName = updateData.firstName;
        const lastName = updateData.lastName;
        const mobile = updateData.mobile;
        const image = updateData.image;
        if(firstName!=='' && lastName!=='' && updateBtnClick){
          async function handleSubmit(){
            const response = await fetch('http://localhost:4000/profile/update-user-profile',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName, 
                lastName,
                mobile,
                image
            }),
            credentials: 'include',
            });
            setStatusCode(response.status);
            response.json().then(data => ({
                data: data,
            })
            ).then(res => {
                console.log(res.data);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setMobile(res.data.mobile);
                setNewImage(res.data.image);
                // if(statusCode===200)
                //     window.location.reload(false);
            })
        }
          handleSubmit();
        }

  }, [])
  if(updateBtnClick && updateData.image){
    setNewImage(updateData.image);
  }

  function handleCloseDialogUpdate(){
    setShowPopUpUpdate(false);
  }

  function handleCloseDialogProfile(){
    setShowPopUpProfile(false);
  }

  function handleUpdateClick(){
    setShowPopUpUpdate(true);
  }

  function handleProfileClick(){
    setShowPopUpProfile(true);
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
            <img className='photo' src={newImage || userProfile} alt="" />
            <button onClick={handleProfileClick} htmlFor="file-upload" className='btn'> 
              <img className='editBtnImg' src={editBtn} alt="" />
            </button>
            {
              (showPopUpProfile) && (
                  <ProfileUpdate
                      onClose={handleCloseDialogProfile}
                      editData = {setUpdateData}
                      updateBtn = {setUpdateBtnClick}
                  />
              )
          }
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