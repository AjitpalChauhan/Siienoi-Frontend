import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
     <div className='m-2 rounded-lg bg-black text-white flex flex-row justify-between items-center p-2'>
      <div className='ml-2'>LOGO</div>
      <div className='flex flex-row justify-between p-5 gap-5 transition-transform ease-in-out'>
        <div className='hover:scale-110'>Dashboard</div>
        <div className='hover:scale-110'>Product</div>
        <div className='hover:scale-110'>Order</div>
        <div className='hover:scale-110'>Category</div>
      </div>
     </div>
    </div>
  )
}

export default Dashboard