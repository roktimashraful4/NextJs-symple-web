
import InstImg from './instImg';

import Img1 from '../public/img1.jpg';
import Img2 from '../public/img2.jpg';
import Img3 from '../public/img3.jpg';
import Img4 from '../public/img4.jpg';
import Img5 from '../public/img5.jpg';
import Img6 from '../public/img6.jpg';
const InstragramSection = () => {
    const img = [
        Img1,
        Img2,
        Img3,
        Img4,
        Img5,
        Img6,
    ]
   
    const uniquevalue = [] 
    function randNum(){
         const number =  Math.round(Math.random() * 5); 
         if( uniquevalue.indexOf(number) == -1 ){
            uniquevalue.push(number)
         }else{
            randNum();
         }
    }
    for (let index = 0; index < 6; index++) {
            randNum();     
        }
    
   
   

  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
    <p className='text-2xl font-bold'>Follow me on Instagram</p>
    <p className='pb-4'>@Captur</p>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4'>
        
       {uniquevalue.map((i, index)=>{
        return  <InstImg key={index} srcImg={img[i]} />
       })}
      
    </div>
</div>
  )
}

export default InstragramSection