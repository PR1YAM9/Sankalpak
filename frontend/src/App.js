import React from 'react'
import { Route, Routes } from "react-router-dom"
import FarmerHome from './pages/home/FarmerHome'
import './App.css'
import Profile from './pages/profile/Profile'
import Login from "./pages/Log/Login"
import Edu from './pages/edu/Edu'
import YourList from './pages/yourList/YourList'

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/farmerhome" element={<FarmerHome />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/edu" element={<Edu />} />
    <Route path="/your-listings" element={<YourList/>}  />
    </Routes>
   
    </>
  )
}

export default App;
