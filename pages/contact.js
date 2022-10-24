import React from 'react'
import Herro from '../Component/Herro'

const contact = () => {
  return (
    <div>
     <Herro headding='Contact us ' message='Contact me anytime you went'/>
     <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center p-4'> work together</h1>
        <form className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border rounded-lg shadow-lg p-3' type="text" placeholder='Name' />
                <input className='border rounded-lg shadow-lg p-3' type="email" placeholder='Email' />
            </div>
            <input  className='border rounded-lg  shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
            <textarea className='border rounded-lg shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
            <button className='border font-bold rounded-lg shadow-lg p-3 w-full mt-2 hover:bg-black hover:text-white'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default contact