import React, { useState } from 'react'
import SaveBtn from '../../assets/save-btn.png'
import '../../styles/EditPassword.css'

const ProfileUpdate = (props) => {
    const {onClose} = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [image, setImage] = useState()
    const [message, setMessage] = useState('');

    async function addFunc(){
      if(firstName && lastName && email){
        const response = await fetch('http://localhost:4000/passwords',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            
        }),
        credentials: 'include',
        });
        response.json().then(data => ({
            data: data,
        })
        ).then(res => {
            //console.log(res);
            window.location.reload(false);
        })
      }
      else{
        setMessage('Enter All Details');
      }
    }
    
    return (
        <div onClick={onClose} className='editOverlay'>
            <div onClick={(e) => {e.stopPropagation();}} className='editModalContainer'>
                <div className='editDataText'>Add New </div>
                <div className='websiteNameContainer'>
                    <div>
                        <label htmlFor="" className='websiteName'>Website Name</label>
                    </div>
                    <div>
                        <input className='inputField' type="text" name="websitename" value={firstName} placeholder='websitename' onChange={(e)=>setWebsiteName(e.target.value)} /> 
                    </div>
                </div>
                <div className='passwordContainer'>
                    <div>
                        <label htmlFor="" className='websiteName'>Password</label>
                    </div>
                    <div>
                        <input className='inputField' type="password" name="password" value={lastName} placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                </div>
                <div className='editBtnContainer'>
                    <button className='cancelBtn' onClick={onClose}>cancel </button>
                    <button className='saveBtn' onClick={addFunc}>
                        <img className='saveBtnImg' src={SaveBtn} alt="" />
                        <div className='saveText'>Save</div>
                    </button>
                </div>
                <div className='editMessage'>
                    {message}
                </div>
            </div>
        </div>
    )
}

export default ProfileUpdate