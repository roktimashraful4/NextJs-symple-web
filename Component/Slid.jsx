import Image from 'next/image'
import React, {useState} from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Slid = ({data}) => {
  const [curent, setcurent] = useState(0);
  const  length = data.length;
  const nextSild = ()=> {
    setcurent(curent === length -1 ? 0: curent+1)
  }
  const previousSlid = ()=> {
    setcurent(curent === 0 ? length-1 : curent-1)
  }
  if(!Array.isArray(data) || data.length <= 0){
    return null;
  }
  return (
    <div className='' id='gallary'>
        <h1 className='text-4xl font-bold text-center py-7 '> My Photo Gellary </h1>
        <div className='   flex items-center justify-center'>
              {data.map((img, index)=>{
                    return <div key={index} className={index === curent ? 'opacity-[1] relative ease-out p-8 shadow-md duration-1000': 'opacity-0'} >
                      <AiFillCaretLeft size={30} className=" absolute top-[50%] left-[30px] text-white/70 select-none cursor-pointer z-[2] hover:text-white/100  "  onClick={previousSlid}/>
                    <AiFillCaretRight size={30} className=" absolute top-[50%] right-[30px] text-white/70 select-none cursor-pointer z-[2] hover:text-white/100   "  onClick={nextSild}/>
                    
                      {index === curent && <Image className='shadow-md' width={1000}  height="400" objectFit='cover' src={img.image}/> }

                    </div>
            })}
        </div>
       
    </div>
  )
}

export default Slid