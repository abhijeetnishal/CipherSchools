import React from 'react'
import '../styles/ProfilePage.css'

const ProfilePage = () => {
  return (
    <div className='main-container'>
      <div className='pf-user-box'>
        <div className='pf-user-back'>
          <div className='pf-user-content'>
            <div className='pf-user-profile-box'>
              <div className="MuiAvatar-root MuiAvatar-circular pf-user-profile">
                <img alt="user-profile" src="https://lh3.googleusercontent.com/a/AGNmyxaEH-FwxXOUbnu6I5nl-Omq2qHeXw1p4PLXJj5h=s96-c" className="MuiAvatar-img"/>
              </div>
              <div className="pf-user-profile-pencil"><svg viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="pf-profile-pencil-icon"><path d="M1.61176 17.6959L0.0393491 24.4821C-0.0148937 24.7301 -0.0130342 24.9872 0.0447916 25.2345C0.102617 25.4817 0.214949 25.713 0.37358 25.9112C0.532211 26.1095 0.733134 26.2699 0.961672 26.3806C1.19021 26.4913 1.44059 26.5495 1.69452 26.551C1.81284 26.563 1.93206 26.563 2.05038 26.551L8.87795 24.9786L21.9869 11.9194L14.671 4.62006L1.61176 17.6959Z" fill="var(--common-text-color)"></path><path d="M26.1082 5.38144L21.2255 0.498692C20.9045 0.179298 20.4701 0 20.0172 0C19.5644 0 19.13 0.179298 18.809 0.498692L16.0945 3.21317L23.402 10.5207L26.1165 7.80626C26.2754 7.6466 26.4012 7.45718 26.4868 7.24885C26.5723 7.04052 26.616 6.81735 26.6152 6.59213C26.6144 6.36691 26.5693 6.14405 26.4823 5.93631C26.3953 5.72856 26.2682 5.54001 26.1082 5.38144Z" fill="var(--common-text-color)"></path></svg></div>
            </div>
            <div className='pf-user-details'>
              <div className="pf-user-detail-box">
                <div id="pf-user-side">
                  <h2 className="pf-user-greeting">Hello,</h2>
                  <h1 className="pf-user-name">Abhijeet Kumar</h1>
                  <h2 className="pf-user-email">abhijeetkumar@jssateb.ac.in</h2>
                </div>
                <div className="pf-right-side">
                  <div className="pf-user-followers-count" title="Followers">
                    <span>0</span> Followers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        
      </div>
    </div>
  )
}

export default ProfilePage