import Head from 'next/head'
import React from 'react'
import Herro from '../Component/Herro'
import Navbar from '../Component/Navbar'

const about = () => {
  return (
    <div>
         <Head> 
        <title>About codder</title>
        <meta name="description" content="Generated by create next app" />
    
      </Head>
        <Navbar/> 
        <Herro headding='About me' message='somthing is happning '/> 
        <div className='container mx-auto py-10  mb-24'>
            <h1 className='text-3xl text-center font-bold '>About Me</h1>
            <div className=' mx-auto w-1/2 py-4 text-justify'>   
               <p>Lorem 
                ipsum dolor sit amet, consectetur adipisicing elit. In unde voluptatibus architecto beatae ipsam sit aperiam excepturi, deleniti ipsum, cumque magni, tempore officiis autem quam. Facere itaque quae modi sed.</p>
                    <br/>
                <p> Lorem <i> ipsum dolor sit amet consectetur </i> adipisicing elit. Cumque placeat, velit facere molestiae architecto quidem sunt porro delectus impedit blanditiis laborum. Alias inventore vero voluptatem nam illo repudiandae maxime ullam.</p>
               <p>Lorem 
                ipsum dolor sit amet, consectetur adipisicing elit. In unde voluptatibus architecto beatae ipsam sit aperiam excepturi, deleniti ipsum, cumque magni, tempore officiis autem quam. Facere itaque quae modi sed.</p>
                    <br/>
                <p> Lorem <i> ipsum dolor sit amet consectetur </i> adipisicing elit. Cumque placeat, velit facere molestiae architecto quidem sunt porro delectus impedit blanditiis laborum. Alias inventore vero voluptatem nam illo repudiandae maxime ullam.</p>
            </div>
         
        </div>
    </div>
  )
}

export default about