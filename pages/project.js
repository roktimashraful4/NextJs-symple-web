import Head from 'next/head'
import Herro from '../Component/Herro'
import PRotfolio from '../Component/PRotfolio'

export default function Home() {
  return (
    <>
      <Head>
        <title>Project coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      
      <Herro headding="My  Projects  " message="Show my projects with clint "/> 
      
      <PRotfolio/> 
    </>
  )
}
