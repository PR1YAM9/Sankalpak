import React from 'react'
import './YourList.css'
import { Link } from 'react-router-dom'

const YourList = () => {
  return (
    <div className='your-list'>
        <div className='yl-top'>
            <p>Your Listings</p>
        </div>
        <p className='yl-back'><Link>Back</Link></p>
        <div className="yl-bottom">
            <div className="yl-btns">
                <button className='pb-btn'>Delete</button>
                <button className='pb-btn'>Add New</button>
            </div>
        </div>
    </div>
  )
}

export default YourList