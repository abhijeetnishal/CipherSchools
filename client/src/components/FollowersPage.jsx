import React, { useEffect, useState } from 'react'
import '../styles/FollowersPage.css'

const FollowersPage = () => {

    const [followersData, setFollowersData] = useState(null);
    const [dataLength, setDataLength] = useState(0);


    useEffect(()=>{
        async function handleSubmit(){
            const response = await fetch('https://servercipherschools.vercel.app/profile/get-all-followers',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            });
            await response.json().then((res)=>{
                console.log(res);
                setFollowersData(res);
                setDataLength(res.length);
            })
        }

        handleSubmit()
        .catch(console.error)
    }, [])
    

  return (
    <div>
        <div className='followers-main-container'>
            {
                (dataLength && followersData.map((mainData, index) =>(
                    <div className='single-follower' key={index}>
                        <div className='follower-image'>{mainData.followerImage}</div>
                        <div className='follower-name'>{mainData.followerName}</div>
                        <div className='follower-positon'>{mainData.followerPosition}</div>
                        <div className='followers-count'>{mainData.followersCount}</div>
                        <div className='following-or-not'>{mainData.followingOrNot}</div>
                    </div>
                )))
                
            }
        </div>
    </div>
  )
}

export default FollowersPage