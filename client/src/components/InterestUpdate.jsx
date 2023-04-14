import React, { useState } from 'react'
import '../styles/PasswordUpdate.css'

const InterestUpdate = (props) => {
    const {onClose} = props;



    const [message, setMessage] = useState('');

    async function addFunc(){
        const response = await fetch('https://servercipherschools.vercel.app/profile/update-user-password',{
        method: 'PUT',
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
            setMessage(res.data);
        })
    }
    
    return (
        <div onClick={onClose} className='editOverlay'>
            <div onClick={(e) => {e.stopPropagation();}} className='editModalContainer'>
                <div className='interest-container'>
                    <button className=''></button>
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