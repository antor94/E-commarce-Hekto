import React from 'react'
import blogCommonBig from '../../assets/images/blogBig1.png'
import { FaPenNib } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { Link } from 'react-router';

const BlogCommon = ({blogImg , blogH2 , blogP}) => {
  return (



    <div>

        <div><img src={blogImg} alt="big-img" /></div>

        <div className='flex gap-[27px] mt-[27px] items-center'>
            <div className='flex items-center gap-[15px]'>
                <FaPenNib className='text-primary' />
                <div className='w-[160px] bg-[#FFE7F9] rounded-[2px] flex justify-center'><p className='text-[14px] font-normal font-lato text-main py-[4px]'>Surf Auxion</p></div>

            </div>
                        <div className='flex items-center gap-[15px]'>
                <SlCalender className='text-[#FFA454]' />
                <div className='w-[160px] bg-[#FFECE2] rounded-[2px] flex justify-center'><p className='text-[14px] font-normal font-lato text-main py-[4px]'>Aug 09 2020</p></div>

            </div>
        </div>

        <div className='mt-[28px]'>
            <h2 className='text-[30px] font-bold font-main text-main'>{blogH2}</h2>
            <div className='w-[852px] mt-[23px] mb-[31px]'><p className='text-[16px] font-normal font-lato text-main2'>{blogP}</p></div>

            <Link className='text-[18px] flex items-center gap-[3px] font-semibold font-lato text-main'  to={'/'}>Read More <span className=' inline-block w-[5px] h-[5px] rounded-full bg-primary'></span></Link>
        </div>


















    </div>
  )
}

export default BlogCommon