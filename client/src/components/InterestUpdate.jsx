import React, { useState } from 'react'
import '../styles/InterestUpdate.css'

const InterestUpdate = (props) => {
    const {onClose} = props;

    const [appDev, setAppdev] = useState('white');
    const [webDev, setWebdev] = useState('white');
    const [gameDev, setGamedev] = useState('white');
    const [dsa, setDsa] = useState('white');
    const [program, setProgram] = useState('white');
    const [ml, setMl] = useState('white');
    const [datasc, setDatasc] = useState('white');
    const [other, setOther] = useState('white');
    const [interests, setInterests] = useState([]);
    const [statusCode, setStatusCode] = useState('');


    async function handleSubmit(){
        const response = await fetch('https://servercipherschools.vercel.app/profile/update-user-interests',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            interests
        }),
        credentials: 'include',
        });
        setStatusCode(response.status);
        response.json().then(data => ({
            data: data,
        })
        ).then(res => {
            //console.log(res);
            setInterests()
        })
    }

    if(statusCode === 200){
        window.location.reload(false);
    }
    
    return (
        <div onClick={onClose} className='interestOverlay'>
            <div onClick={(e) => {e.stopPropagation();}} className='interestModalContainer'>
                <div className='interest-container'>
                    <div className='sub-interest-container'>
                        <button id='App Development' className={`${appDev}`} value={appDev} onClick={(e)=>{interests.push(e.target.id); setAppdev(e.target.value==='orange' ? 'white' : 'orange')}}>App Development</button>
                        <button id='Web Development' className={`${webDev}`} value={webDev} onClick={(e)=>{interests.push(e.target.id); setWebdev(e.target.value==='orange' ? 'white' : 'orange')}}>Web Development</button>
                    </div>
                    <div className='sub-interest-container'>
                        <button id='Game Development'  className={`${gameDev}`} value={gameDev} onClick={(e)=>{interests.push(e.target.id); setGamedev(e.target.value==='orange' ? 'white' : 'orange')}}>Game Development</button>
                        <button id='Data Structures' className={`${dsa}`} value={dsa} onClick={(e)=>{interests.push(e.target.id); setDsa(e.target.value==='orange' ? 'white' : 'orange')}}>Data Structures</button>
                    </div>
                    <div className='sub-interest-container'>
                        <button id='Promgramming' className={`${program}`} value={program} onClick={(e)=>{interests.push(e.target.id); setProgram(e.target.value==='orange' ? 'white' : 'orange')}}>Programming</button>
                        <button id='Machine Learning' className={`${ml}`} value={ml} onClick={(e)=>{interests.push(e.target.id); setMl(e.target.value==='orange' ? 'white' : 'orange')}}>Machine Learning</button>
                    </div>
                    <div className='sub-interest-container'>
                        <button id='Data Science' className={`${datasc}`} value={datasc} onClick={(e)=>{interests.push(e.target.id); setDatasc(e.target.value==='orange' ? 'white' : 'orange')}}>Data Science</button>
                        <button id='Others' className={`${other}`} value={other} onClick={(e)=>{interests.push(e.target.id); setOther(e.target.value==='orange' ? 'white' : 'orange')}}>Others</button>
                    </div>
                </div>
                
                <div className='interestBtnContainer'>
                    <button className='cancel-btn' onClick={onClose}>cancel </button>
                    <button className='save-btn' onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InterestUpdate