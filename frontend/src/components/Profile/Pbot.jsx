import React, { useState } from 'react'
import './Pbot.css'
import profile from '../../images/Ellipse 24.svg'
import pen from "../../images/image 35.svg"

const Pbot = () => {
  const [allValues, setAllValues]=useState({
    name:"",
    phone:"",
    farmerId:"",
    accountNo:""
  });
  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };
  return (
    <div className='p-bot'>
        <div className='pb-img'>
            <img src={profile} alt="" />
            <button className='pb-btn'>Change Photo</button>
            <p>Farmer</p>
        </div>
        <div>
          <form className='pb-form'>
           <div className='pb-input'>
              <label>Name :</label>
              <input type="text" name="name" value={allValues.name} onChange={changeHandler} />
              <img src={pen} alt="" srcset="" />
           </div>
           <div className='pb-input'>
              <label>Phone :</label>
              <input type="text" name="name" value={allValues.phone} onChange={changeHandler} />
              <img src={pen} alt="" srcset="" />
           </div>
           <div className='pb-input pb-fid'>
              <label>Farmer ID :</label>
              <input type="text" name="name" value={allValues.farmerId} onChange={changeHandler} />
              <img src={pen} alt="" srcset="" />
           </div>
           <div className='pb-input pb-acn'>
              <label>Account Number :</label>
              <input type="text" name="name" value={allValues.accountNo} onChange={changeHandler} />
              <img src={pen} alt="" srcset="" />
           </div>
          </form>
          <div className='pb-save'>
            <button className='pb-btn'>Save Changes</button>
          </div>
        </div>
    </div>
  )
}

export default Pbot