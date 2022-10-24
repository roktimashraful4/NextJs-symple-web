import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AiOutlineAlignRight, AiOutlineClose} from 'react-icons/ai';
const Navbar = () => {
    const [Nav, setNav] = useState(false);
    const [color, setcolor] = useState("transparent");
    const [textColor, settextColor] = useState("white");
    useEffect(()=>{
        const changeColoro = ()=>{
            if (window.scrollY >= 90) {
                
             setcolor("#fff");
             settextColor( "#000")
        }else{
            
            setcolor("transparent");
            settextColor("#fff")
        }
    }
    window.addEventListener('scroll', changeColoro);
    },[])
    const handelNav = ()=>{
        setNav(!Nav);
    }
  return (
    <div style={{"background": `${color}`,  }} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
              
                <Link href='/'>
                    <h1 style={{"color": `${textColor}`}} className='font-bold text-3xl'>{"</Coder.>"}</h1>
                </Link>
                <ul className='hidden sm:flex' style={{"color": `${textColor}`}}>
                    <li className='p-4'>
                        <Link href='/' >Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/about' >About</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/#gallary' >Gellary</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/project' >Project </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contact' >Contact</Link>
                    </li>
                </ul>
            

                {/* ** Mobile Menu ** */}
                <div onClick={handelNav} className='block sm:hidden z-10'>
                   { Nav ? <AiOutlineClose   size={30}/> : <AiOutlineAlignRight style={{"color": `${textColor}`}}  size={30}/> }
                </div>
                    {/* Modile Menu here */}
                <div className={Nav ? 'sm:hidden absolute top-0 left-[0] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300':'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                <ul>
                    <li  onClick={handelNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/' >Home</Link>
                    </li>
                    <li  onClick={handelNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/about' >About</Link>
                    </li>
                    <li  onClick={handelNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/#gallary' >Gellary</Link>
                    </li>
                    <li  onClick={handelNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/project' >Project </Link>
                    </li>
                    <li  onClick={handelNav} className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/contact' >Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
       
            
    </div>
    
  )
}

export default Navbar