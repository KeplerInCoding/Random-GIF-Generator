import React from 'react'
import { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
    const [tag, setTag] = useState('hello')
    const {gif, fetchData, loading} = useGif(tag);

  return (
    <div className='bg-gradient-to-br w-[800px] h-full from-black/70 to-cyan-700/90 shadow-black shadow-md flex flex-col place-content-between items-center rounded-3xl'>
        <h1 className='font-extrabold text-white text-xl m-2'>Random {tag} GIF</h1>
        
        { 
        loading ? (<Spinner/>):(<img className='bg-black mx-28 h-[300px]' alt="loading..." src={gif}/>)
        }
        <input className='text-lg font-extrabold m-2 mt-4 p-2 rounded-lg w-80' type="text" value={tag} onChange={(e)=>setTag(e.target.value)}/>
        <button onClick={()=>{fetchData(tag)}} className="p-5 font-extrabold text-white text-2xl mb-7 mt-3 rounded-full bg-gradient-to-tl from-pink-900 to-zinc-700 hover:from-zinc-600 hover:to-pink-800 hover:scale-[1.2] shadow-lg shadow-black hover:shadow-2xl hover:shadow-black duration-200">Generate</button>
    </div>
  )
}

export default Tag