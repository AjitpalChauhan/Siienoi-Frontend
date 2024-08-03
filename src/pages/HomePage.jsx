import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Highlight from '../components/Navbar/Highlight'
import Landing from '../components/Home/Landing'
import ProductCard from '../components/Home/ProductCard'
import VideoScroller from '../components/Home/VideoScroller'
import Why from '../components/Home/Why'
import HomeVideoBanner from '../components/Home/HomeVideoBanner'
import Models from '../components/Home/Models'

function Home() {
  return (
    <div className='w-full bg-white'>
      <Landing/>
      <ProductCard/>
      <VideoScroller/>
      <Why/>
      <HomeVideoBanner/>
      <Models/>
    </div>
  )
}

export default Home