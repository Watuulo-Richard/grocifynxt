import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";

export default function Button() {
  return (
    <div className='flex justify-center items-center'>   
        <a href="#" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-green-900 rounded-lg group bg-gradient-to-br from-green-600 to-green-500 group-hover:from-green-600 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="flex items-center font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Start Ordering Now <FaArrowDownLong /><FaArrowDownLong />
        </span>
        </a>
    </div>
  )
}
