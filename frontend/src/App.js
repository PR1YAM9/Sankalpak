import React from 'react'
import { Route, Routes } from "react-router-dom"
// import Login from './pages/login/Login'
import FarmerHome from './pages/home/FarmerHome'
import './App.css'
import Profile from './pages/profile/Profile'
import Login from "./pages/Log/Login"

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
