import React, { useState } from 'react'
import '../styles/PasswordUpdate.css'

const InterestUpdate = (props) => {
    const {onClose} = props;

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const [message, setMessage] = useState('');

    async function addFunc(){
        const response = await fetch('https://servercipherschools.vercel.app/profile/update-user-password',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            currentPassword,
            newPassword,
            confirmNewPassword
        }),
        credentials: 'include',
        });
        response.json().then(data => ({
            data: data,
        })
        ).then(res => {
            console.log(res);
            setMessage(res.data);
            //window.location.reload(false);
        })
    }
    
    return (
        <div onClick={onClose} className='editOverlay'>
            <div onClick={(e) => {e.stopPropagation();}} className='editModalContainer'>
                <div className='websiteNameContainer'>
                    <div>
                        <label htmlFor="" className='websiteName'>Current Password</label>
                    </div>
                    <div>
                        <input className='inputField' type="password" name="websitename" value={currentPassword} placeholder='Current Password' onChange={(e)=>setCurrentPassword(e.target.value)} /> 
                    </div>
                </div>
                <div className='passwordContainer'>
                    <div>
                        <label htmlFor="" className='websiteName'>New Password</label>
                    </div>
                    <div>
                        <input className='inputField' type="password" name="password" value={newPassword} placeholder='New Password' onChange={(e)=>setNewPassword(e.target.value)} />
                    </div>
                </div>
                <div className='confirmPasswordContainer'>
                    <div>
                        <label htmlFor="" className='websiteName'>Confirm New Password</label>
                    </div> 
                    <div> 
                        <input className='inputField' type="password" name="password" value={confirmNewPassword} placeholder='Confirm New Password' onChange={(e)=>setConfirmNewPassword(e.target.value)} />
                    </div>
                </div>
                <div className='editBtnContainer'>
                    <button className='cancelBtn' onClick={onClose}>cancel </button>
                    <button className='saveBtn' onClick={addFunc}>
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

export default InterestUpdate