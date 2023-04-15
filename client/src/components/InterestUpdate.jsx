import React, { useState } from 'react'
import '../styles/InterestUpdate.css'

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
        <div onClick={onClose} className='interestOverlay'>
            <div onClick={(e) => {e.stopPropagation();}} className='interestModalContainer'>
                <div className='interest-container'>
                    <div className='sub-interest-container'>
                        <button className='appdev'>App Development</button>
                        <button className='appdev'>Web Development</button>
                    </div>
                    <div className='sub-interest-container'>
                        <button className='appdev'>Game Development</button>
                        <button className='appdev'>Data Structures</button>
                    </div>
                    <div className='sub-interest-container'>
                        <button className='appdev'>Programming</button>
                        <button className='appdev'>Machine Learning</button>
                    </div>
                    <div className='sub-interest-container'>
                        <button className='appdev'>Data Science</button>
                        <button className='appdev'>Others</button>
                    </div>
                </div>
                
                
                <div className='interestBtnContainer'>
                    <button className='cancel-btn' onClick={onClose}>cancel </button>
                    <button className='save-btn' onClick={addFunc}>
                        Save
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