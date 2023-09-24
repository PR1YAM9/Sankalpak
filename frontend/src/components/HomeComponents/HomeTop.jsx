import React from 'react'
import logo from '../../images/image 114.svg';
import './homeTop.css';

const HomeTop = () => {
  return (
    <>
        <div className="HTcontainer">
            <div className="HTsection1">
                <div className="HTlogo"><img src={logo} alt="Oon mitr" /></div>
                <div className="HTheader">Home</div>
                <div className="Htprofile">Profile</div>
            </div>
        </div>
    </>
  )
}

export default HomeTop