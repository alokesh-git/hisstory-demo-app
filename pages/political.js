import React from 'react'

const Poltical = () => {
  return (
    <div className="w-full lg:w-[90%] float-right">
    <div className="w-full h-max  overflow-x-scroll bg-transparent py-4 lg:py-4 scrollbar">
      <div className="w-max">
      <span className="px-2 py-1 w-max text-sm lg:text-lg bg-white font-medium lg:mx-5 mx-2 shadow-zinc-500 shadow-md cursor-pointer hover:scale-105 rounded-lg self-center ">chapter-1</span>
      <span className="px-2 py-1 w-max text-sm lg:text-lg bg-white font-medium lg:mx-5 mx-2 shadow-zinc-500 shadow-md cursor-pointer hover:scale-105 rounded-lg self-center ">chapter-2</span>
      <span className="px-2 py-1 w-max text-sm lg:text-lg bg-white font-medium lg:mx-5 mx-2 shadow-zinc-500 shadow-md cursor-pointer hover:scale-105 rounded-lg self-center ">chapter-3</span>
      <span className="px-2 py-1 w-max text-sm lg:text-lg bg-white font-medium lg:mx-5 mx-2 shadow-zinc-500 shadow-md cursor-pointer hover:scale-105 rounded-lg self-center ">chapter-4</span>
      <span className="px-2 py-1 w-max text-sm lg:text-lg bg-white font-medium lg:mx-5 mx-2 shadow-zinc-500 shadow-md cursor-pointer hover:scale-105 rounded-lg self-center ">chapter-5</span>
        {/* {data && data.map((elem, index) => <span key={index} onClick={() => { setstate(elem) }} className="px-2 py-1 w-max text-sm lg:text-lg bg-white font-medium mx-5 shadow-zinc-500 shadow-md cursor-pointer hover:scale-105 rounded-lg self-center nav">{elem}</span>)} */}
      </div>
    </div>
  </div>
  )
}

export default Poltical