import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Highlight from '../components/Navbar/Highlight'
import Landing from '../components/Home/Landing'
import ProductCard from '../components/Home/ProductCard'
import VideoScroller from '../components/Home/VideoScroller'
import Why from '../components/Home/Why'
import HomeVideoBanner from '../components/Home/HomeVideoBanner'
import Models from '../components/Home/Models'
import Footer from '../components/Footer/Footer'

function AdminHome() {
  return (
    <div className='w-full bg-white'>
      <div>Admin Home</div>
      <Navbar/>
      <Highlight/>
      <Landing/>
      <ProductCard/>
      <VideoScroller/>
      <Why/>
      <HomeVideoBanner/>
      <Models/>
      <Footer/>
    </div>
  )
}

export default AdminHome
