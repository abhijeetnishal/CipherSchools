import React, { useState } from 'react'
import '../styles/ProfileUpdate.css'
import userProfile from '../assets/user.png'
import editBtn from '../assets/editbtn.png'
import { Cookies } from "react-cookie"

const ProfileUpdate = (props) => {
    const {onClose} = props;
    const [postImage, setPostImage] = useState({myFile: ""});

    const cookies = new Cookies();
    const cookieValue = cookies.get('myCookie');
    const email = cookieValue.email;

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
      setPostImage({...postImage, myFile: base64});
    }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');
    const [statusCode, setStatusCode] = useState('');


    async function handleSubmit(){
        const response = await fetch('https://servercipherschools.vercel.app/profile/update-user-profile',{
        mode: 'no-cors',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName, 
            lastName,
            mobile,
            image: postImage.myFile
        }),
        credentials: 'include',
        });
        setStatusCode(response.status);
        
        response.json().then(data => ({
            data: data,
        })
        ).then(res => {
            setMessage(res.data.message);
        })
    }

    if(statusCode===200)
        window.location.reload(false);
    
    return (
        <div onClick={onClose} className='editOverlay'>
            <div onClick={(e) => {e.stopPropagation()}} className='editModalContainer'>
                <div className='editDataText'>Profile Update </div>
                    <div className='photo-info-container'>
                    <div className='profile-photo-btn'>
                        <img className='photo-img' src={postImage.myFile || userProfile} alt="" />
                        <input onChange={(e)=> handleFileUpload(e)} type="file" lable="Image" accept='.jpeg, .png, .jpg' name="myFile" id="file-upload" />
                        <label htmlFor="file-upload" className='btn-edit'> 
                        <img className='editBtnImg' src={editBtn} alt="" />
                        </label>
                    </div>
                        <div className='all-info-container'>
                        <div className='info-container'>
                            <div className='info-type-name'>First Name</div>
                            <input className='info-input' value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder='First Name' />
                        </div>   
                        <div className='info-container'>
                            <div className='info-type-name'>Last Name</div>
                            <input className='info-input' value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder='Last Name' />
                        </div> 
                        <div className='info-container'>
                            <div className='info-type-name'>Email Address</div>
                            <div className='info-input'>{email}</div>
                        </div> 
                        <div className='info-container'>
                            <div className='info-type-name'>Mobile Number</div>
                            <input className='info-input' value={mobile} onChange={(e)=>setMobile(e.target.value)} type="text" placeholder='Mobile Number' />
                        </div> 
                            <div className='cancel-save-btn'>
                                <button className='cancel-btn' onClick={onClose}>cancel </button>
                                <button className='save-btn' onClick={handleSubmit}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='edit-message'>
                        {message}
                    </div>
            </div>
        </div>
    )
}

export default ProfileUpdate