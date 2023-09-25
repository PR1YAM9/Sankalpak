import React from 'react'
import './HomeFooter.css'
import HomeImg from '../../images/homeImg.svg'
import TruckImg from '../../images/TruckImg.svg'
import PhoneImg from '../../images/PhoneImg.svg'
import { Link } from 'react-router-dom'


const HomeFooter = () => {
  return (
    <>
        <div className="HFcontainer">
          <div className="HFinner">
              <div className="HFhome HFlogo"><img src={HomeImg} alt="" /></div>
              <div className="HFTrack HFlogo"><Link to="/your-listings"><img src={TruckImg} alt="" /></Link></div>
              <div className="HFCall HFlogo"><img src={PhoneImg} alt="" /></div>
          </div>
        </div>
    </>
  )
}

export default HomeFooter