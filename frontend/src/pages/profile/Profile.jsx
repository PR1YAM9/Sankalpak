import React from 'react'
import './profile.css'
import Ptop from '../../components/Profile/Ptop'
import HomeFooter from '../../components/HomeComponents/HomeFooter'
import Pbot from '../../components/Profile/Pbot'
const Profile = () => {
  return (
    <div>
        <Ptop/>
        <Pbot/>
        <HomeFooter/>
    </div>
  )
}

export default Profile