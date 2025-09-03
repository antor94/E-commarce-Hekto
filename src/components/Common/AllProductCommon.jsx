import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { GrZoomIn } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router';


const AllProductCommon = () => {
  return (
    <>
    
    
    
    
    <div className='w-[270px] group relative ' >
        <div className='w-[270px] h-[280px] group-hover:bg-[#EBF4F3] relative flex justify-center items-center duration-[.3s] bg-[#F6F7FB] overflow-hidden'> <img className='flex items-center justify-center' src="#" alt="p-img" />  </div>
        <div className='flex flex-col gap-[10px] absolute top-[188px] left-[15px] '>
            <button className=' opacity-0 group-hover:opacity-100 duration-[.3s] hover:bg-white rounded-full hover:w-[30px]  hover:h-[30px] '>  <FiShoppingCart className='text-[16px] flex justify-center items-center' />  </button>
            <Link to={'/'} className=' opacity-0 group-hover:opacity-100 duration-[.3s] hover:bg-white rounded-full hover:w-[30px]  hover:h-[30px] ' >
            <GrZoomIn className='text-[16px]' />
            </Link>
            <button className=' opacity-0 group-hover:opacity-100 duration-[.3s] hover:bg-white rounded-full hover:w-[30px]  hover:h-[30px] '>
            <FaRegHeart className='text-[16px]' />

            </button>
            
        </div>
        <div className='text-center mt-[18px]'>
            <h2 className='text-[18px] font-bold font-lato text-main'>Vitae suspendisse sed</h2>
        <div className='flex justify-center mt-[8px] mb-[15px] gap-[8px]'>
        <button className='w-[10px] h-[10px] rounded-full bg-[#DE9034]'></button>
        <button className='w-[10px] h-[10px] rounded-full bg-[#EC42A2]'></button>
        <button className='w-[10px] h-[10px] rounded-full bg-[#8568FF]'></button>
        </div>
        <div className='flex justify-center gap-[10px]'> 
            <p className='text-[14px] font-normal font-lato text-main'>$26.00 </p>
            <p className='text-[14px] font-normal font-lato text-primary line-through'>$42.00 </p>
        </div>
        </div>
    </div>
    
    
    
    
    </>
  )
}

export default AllProductCommon