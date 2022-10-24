
const Herro = (props) => {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed mb-12 bg-cover custom-bg'>
        <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] "/> 
       
       <div className=" p-5 text-white z-[2]">
        <h1 className="text-5xl font-bold"> {props.headding}</h1>
        <p className="py-5 text-xl ">{props.message}</p>
        
        <button className="px-8 py-2 border">Book </button>
       </div>
    </div>
  )
}

export default Herro