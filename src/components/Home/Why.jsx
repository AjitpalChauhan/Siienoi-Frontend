import React from 'react'

function Why() {
  return (
      <div className='w-full mt-20 h-auto'>
        <div className='w-full h-[40px]'>
        <h1 className='w-full font-["UntitledTTF"] text-2xl text-center'>Why Siienoi?</h1> 
        </div>
        <div className='h-auto w-full px-10 mt-10 grid sm:grid-cols-3 gap-8'>
          <div className='h-[15vw] bg-gray-200 flex justify-center items-center'>
            <h1>Because</h1>
          </div>
          <div className='h-[15vw] bg-gray-200 flex justify-center items-center'>
            <h1>I am your</h1>
          </div>
          <div className='h-[15vw] bg-gray-200 flex justify-center items-center'>
            <h1>Dad</h1>
          </div>
        </div>
      </div>
  )
}

export default Why