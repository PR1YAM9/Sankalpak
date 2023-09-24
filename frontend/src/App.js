import React from 'react'
import { Route, Routes } from "react-router-dom"
import Login from './pages/login/login'
import FarmerHome from './pages/home/FarmerHome'
import './App.css'

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/farmerhome" element={<FarmerHome />} />
    </Routes>
    
    </>
  )
}

export default App;
