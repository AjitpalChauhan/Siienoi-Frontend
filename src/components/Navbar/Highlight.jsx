import React from 'react';

function Highlight() {
  return (
    <div className=' w-full mt-10 flex justify-center items-center overflow-x-auto'>
      <div className='flex gap-10 px-2'>
        <div className='w-[12vw] h-[12vw] min-w-[4vw] min-h-[4vw] md:w-[6vw] md:h-[6vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-purple-500 border-[2px] border-purple-950'></div>
        <div className='w-[12vw] h-[12vw] min-w-[4vw] min-h-[4vw] md:w-[6vw] md:h-[6vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-red-500 border-[2px] border-purple-950'></div>
        <div className='w-[12vw] h-[12vw] min-w-[4vw] min-h-[4vw] md:w-[6vw] md:h-[6vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-yellow-500 border-[2px] border-purple-950'></div>
        <div className='w-[12vw] h-[12vw] min-w-[4vw] min-h-[4vw] md:w-[6vw] md:h-[6vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-purple-500 border-[2px] border-purple-950'></div>
        <div className='w-[12vw] h-[12vw] min-w-[4vw] min-h-[4vw] md:w-[6vw] md:h-[6vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-red-500 border-[2px] border-purple-950 hidden lg:block'></div>
        <div className='w-[12vw] h-[12vw] min-w-[4vw] min-h-[4vw] md:w-[6vw] md:h-[6vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-purple-500 border-[2px] border-purple-950 hidden lg:block'></div>
        <div className='w-[12vw] h-[12vw] min-w-[4vw] min-h-[4vw] md:w-[6vw] md:h-[6vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-yellow-500 border-[2px] border-purple-950 hidden lg:block'></div>
        <div className='w-[12vw] h-[12vw] min-w-[4vw] min-h-[4vw] md:w-[6vw] md:h-[6vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-purple-500 border-[2px] border-purple-950 hidden lg:block'></div>
        <div className='w-[12vw] h-[12vw] min-w-[4vw] min-h-[4vw] md:w-[6vw] md:h-[6vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-red-500 border-[2px] border-purple-950 hidden md:block'></div>
        <div className='w-[12vw] h-[12vw] min-w-[4vw] min-h-[4vw] md:w-[6vw] md:h-[6vw] lg:w-[4vw] lg:h-[4vw] rounded-full bg-yellow-500 border-[2px] border-purple-950 hidden md:block'></div>
      </div>
    </div>
  )
}

export default Highlight;
