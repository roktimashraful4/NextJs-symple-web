import Head from 'next/head'
import Herro from '../Component/Herro'
import Slid from '../Component/Slid'
import { SliderData } from '../Component/silderData'
import InstragramSection from '../Component/instragramSection'
export default function Home() {
  return (
    <>
      <Head>
        <title>Codder .</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      
      <Herro headding="The day in Programmer" message="The better life for better coding.."/> 
      <Slid data={SliderData}/> 
      <InstragramSection/> 
      
    </>
  )
}
