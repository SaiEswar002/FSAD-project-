import React from 'react'
// import "./Main.css"
import {Route, Routes } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import Header from './home/Header'
import Navbar from './home/Navbar'
import AboutUsCombined from './AboutUsCombined';



function Main() {
  return (
    <>
    <div className='header'>
        <Header />
        </div>
    <div className="nav">
        <Navbar />
    </div>
   
    <div className="main">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUsCombined/>} />
        </Routes>
    </div>
    </>
  )
}

export default Main
