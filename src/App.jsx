import React from 'react'
import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return (
    <div className='m-0 overflow-x-hidden overflow-y-auto parallex'>
      <div className='w-full h-[1300px] flex flex-col background items-center layer layer1 relative'>
      </div>
      
      <div className='w-full flex flex-col layer layer2 absolute top-0 items-center gap-y-10'>
      <div className='heading bg-gradient-to-r from-white/70 to-pink-500/60 rounded-lg w-[90%] m-8 mt-6 p-4 text-center text-5xl font-extrabold font-mono text-sky-950 shadow-lg shadow-pink-800'>Random GIFs</div>
          <Random></Random>
          <Tag></Tag>
      </div>
    </div>
  )
}


