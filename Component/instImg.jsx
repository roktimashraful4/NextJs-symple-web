import Image from 'next/image'
import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
const InstImg = ({srcImg}) => {
  return (
    <div className='relative rounded '>
     <Image src={srcImg} 
     className='w-full h-full rounded-md'
     layout='responsive'
      
     /> 
      <div className=' rounded-md flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
      <p className='text-gray-300 hidden group-hover:block'>
        <AiFillInstagram size={30} className='z-10' />
      </p>
      </div>
    </div>
  )
}

export default InstImg