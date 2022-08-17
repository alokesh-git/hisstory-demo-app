import React,{useState} from 'react'
import {useRouter} from "next/router"

const Header = () => {
    const router = useRouter();
  const [hidden, sethidden] = useState("hidden")
  const [Class, setClass] = useState("Class")
  return (
    <div style={{background:'url(img/gradient.png)'}} className="w-full z-40 sticky top-0 lg:h-[10%] h-[10%] rounded-b-2xl shadow-md shadow-zinc-900 lg:p-5 py-5  flex flex-row justify-evenly lg:justify-end items-center">
     <input className='px-4 w-[60%]  lg:w-[50%] py-2 rounded-lg lg:mr-10 shadow-md shadow-zinc-900 outline-none text-sm lg:text-xl font-medium'  type="text" placeholder='Serching for ...' />
     <div className='relative select-none cursor-pointer'>
     <h1 onClick={()=>{sethidden("block")}} className="lg:w-32 w-16 text-center py-2 bg-white rounded-lg shadow-md shadow-zinc-900 outline-none text-sm lg:text-xl font-medium">{Class}</h1>
     <div className={`${hidden} absolute z-50 w-full`}>
     <h1 onClick={()=>{sethidden("hidden");
          setClass("Class")
      }} className="max-w-full cursor-pointer z-50 text-center bg-white py-2 rounded-lg shadow-md shadow-zinc-900 outline-none text-sm lg:text-xl font-medium">Class</h1>
      <h1 onClick={()=>{sethidden("hidden");
          setClass("Class-6")
      }} className="max-w-full cursor-pointer z-50 text-center bg-white py-2 rounded-lg shadow-md shadow-zinc-900 outline-none text-sm lg:text-xl font-medium">Class-6</h1>
      <h1 onClick={()=>{sethidden("hidden");
          setClass("Class-7")
      }} className="max-w-full cursor-pointer z-50 text-center bg-white py-2 rounded-lg shadow-md shadow-zinc-900 outline-none text-sm lg:text-xl font-medium">Class-7</h1>
      <h1 onClick={()=>{sethidden("hidden");
          setClass("Class-8")
      }} className="max-w-full cursor-pointer z-50 text-center bg-white py-2 rounded-lg shadow-md shadow-zinc-900 outline-none text-sm lg:text-xl font-medium">Class-8</h1>
      <h1 onClick={()=>{sethidden("hidden");
          setClass("Class-9")
      }} className="max-w-full cursor-pointer z-50 text-center bg-white py-2 rounded-lg shadow-md shadow-zinc-900 outline-none text-sm lg:text-xl font-medium">Class-9</h1>
      <h1 onClick={()=>{sethidden("hidden");
          setClass("Class-10")
      }} className="max-w-full cursor-pointer z-50 text-center bg-white py-2 rounded-lg shadow-md shadow-zinc-900 outline-none text-sm lg:text-xl font-medium">Class-10</h1>
     </div>
    </div>
    </div>
  )
}

export default Header