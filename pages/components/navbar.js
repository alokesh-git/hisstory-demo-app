import React from 'react'
import { AiFillHome,AiFillFilePdf } from "react-icons/ai"
import {MdOutlineOndemandVideo,MdDocumentScanner} from "react-icons/md"
import { FaUser } from "react-icons/fa"
import Link from "next/link"
import {useRouter} from "next/router"

const Navbar = () => {
   const router = useRouter();
   const {route} = router;
   return (
      <div className='w-[90%] px-3 fixed bg-white z-50 bottom-0 lg:left-16 shadow-zinc-500 left-[50%] translate-x-[-50%] lg:top-[50%] translate-y-[-50%] lg:h-[80vh] flex flex-row lg:flex-col items-center lg:w-min lg:p-2 justify-evenly shadow-lg rounded-xl'>
         <Link href={"/"} >
            <div className={`lg:text-3xl p-2 lg:px-0 text-xl ${(route === "/")? "text-pink-800":"text-zinc-700"} font-medium flex flex-col items-center cursor-pointer justify-center`}>
               <AiFillHome />
               <h2 className="leading-6 lg:leading-8 text-xs lg:text-lg">Home</h2>
            </div>
         </Link>
         <Link href={"/geography"} >
            <div className={`lg:text-3xl p-2 lg:px-0 text-xl ${(route === "/geography")? "text-pink-800":"text-zinc-700"} font-medium flex flex-col items-center cursor-pointer justify-center`}>
               <MdDocumentScanner />
               <h2 className="leading-6 lg:leading-8 text-xs lg:text-lg">Articals</h2>
            </div>
         </Link>
         <Link href={"/economic"} >
            <div className={`lg:text-3xl p-2 lg:px-0 text-xl ${(route === "/economic")? "text-pink-800":"text-zinc-700"} font-medium flex flex-col items-center cursor-pointer justify-center`}>
               <AiFillFilePdf />
               <h2 className="leading-6 lg:leading-8 text-xs lg:text-lg">PDF</h2>
            </div>
         </Link>
         <Link href={"/history"} >
            <div className={`lg:text-3xl p-2 lg:px-0 text-xl ${(route === "/history")? "text-pink-800":"text-zinc-700"} font-medium flex flex-col items-center cursor-pointer justify-center`}>
               <MdOutlineOndemandVideo />
               <h2 className="leading-6 lg:leading-8 text-xs lg:text-lg">Video</h2>
            </div>
         </Link>
         <Link href={"/political"} >
            <div className={`lg:text-3xl p-2 lg:px-0 text-xl ${(route === "/political")? "text-pink-800":"text-zinc-700"} font-medium flex flex-col items-center cursor-pointer justify-center`}>
               <FaUser />
               <h2 className="leading-6 lg:leading-8 text-xs lg:text-lg">Account</h2>
            </div>
         </Link>
      </div>
   )
}

export default Navbar