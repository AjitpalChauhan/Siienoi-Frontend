import React from 'react'

function HomeVideoBanner() {
  return (
    <div className='w-full h-auto mt-20 flex justify-center items-center'>
      <div className='w-3/5 h-auto m-20 '>
      <video
                autoPlay
                muted
                loop
                src="https://videos.pexels.com/video-files/4659830/4659830-uhd_2732_1440_25fps.mp4"
                alt=""
                className='object-cover h-full w-full rounded-lg'
              />
      </div>
      
    </div>
  )
}

export default HomeVideoBanner