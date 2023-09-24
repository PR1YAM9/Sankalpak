import React from 'react'
import { Route, Routes } from "react-router-dom"
import Login from './pages/logIn/login'
import FarmerHome from './pages/home/FarmerHome'
import './App.css'
import Profile from './pages/profile/Profile'

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/farmerhome" element={<FarmerHome />} />
    <Route path="/profile" element={<Profile />} />
    </Routes>
    
    </>
  )
}

export default App;
