import React from 'react'

const FollowersPage = () => {

    async function handleSubmit(){
        const response = await fetch('http://localhost:4000/profile/get-all-followers',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        });
        await response.json().then((res)=>{
            console.log(res);
        })

    }

  return (
    <div>
        <button onClick={handleSubmit}> Click</button>
    </div>
  )
}

export default FollowersPage