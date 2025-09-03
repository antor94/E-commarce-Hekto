import React from 'react'
import BreadCrum from '../components/Common/BreadCrum'
import blogBig1 from '../assets/images/blogBig1.png'
import blogBig2 from '../assets/images/blogBig2.png'
import blogBig3 from '../assets/images/blogBig3.png'

import offer1 from '../assets/images/offer1.png'
import offer2 from '../assets/images/offer2.png'
import offer3 from '../assets/images/offer3.png'
import offer4 from '../assets/images/offer4.png'
import recent1 from '../assets/images/recent1.png'
import recent2 from '../assets/images/recent2.png'
import recent3 from '../assets/images/recent3.png'
import recent4 from '../assets/images/recent4.png'
import sale1 from '../assets/images/sale1.png'
import sale2 from '../assets/images/sale2.png'
import sale3 from '../assets/images/sale3.png'
import BlogCommon from '../components/Common/BlogCommon'
import { LuSearch } from "react-icons/lu";


const Blog = () => {
  return (
    <>
    
    
    
    
    <section id='blog'>
        <BreadCrum breadContent={'Blog Page'} />
        <div className="container">
            <div id='blog-row' className='flex'>
                {/* ------------- left side */}
                <div>
                <BlogCommon blogImg={blogBig1} blogH2={'Mauris at orci non vulputate diam tincidunt nec.'} blogP={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.'} />
                <BlogCommon blogImg={blogBig2} blogH2={'Aenean vitae in aliquam ultrices lectus. Etiam.'} blogP={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.'} />
                <BlogCommon blogImg={blogBig3} blogH2={'Sit nam congue feugiat nisl, mauris amet nisi. '} blogP={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.'} />

                {/* --------------- pagination */}
                <div className='flex justify-center gap-[36px] my-[72px]'>
                    <button className='w-[32px] h-[24px] border border-[#E0D3F5] text-[16px] font-semibold font-lato text-[#E0D3F5] hover:bg-primary hover:border-none duration-[.4s]'>1</button>
                    <button className='w-[32px] h-[24px] border border-[#E0D3F5] text-[16px] font-semibold font-lato text-[#E0D3F5] hover:bg-primary hover:border-none duration-[.4s]'>2</button>
                    <button className='w-[32px] h-[24px] border border-[#E0D3F5] text-[16px] font-semibold font-lato text-[#E0D3F5] hover:bg-primary hover:border-none duration-[.4s]'>3</button>
                </div>
                </div>

                {/* ------------ right-side */}

                <div>
                    <h2 className='text-[22px] font-semibold font-lato text-main'>Search</h2>
                    <div className='w-[270px] flex justify-around border rounded-[2px] border-[#BDBDD8]'>
                        <input className='w-[80%] text-[14px] border-none outline-none py-[12px] font-normal font-lato text-[#15187558]' type="text" placeholder='Search For Posts' />
                        <button><LuSearch /></button>
                    </div>

                    <div className='w-[254px]'>
                        <h2 className='text-[22px] font-semibold font-lato  text-main'>Categories</h2>

                       

                 <div className='flex mt-[21px] flex-wrap'>

                            <button className='w-[122px] rounded-[3px]  hover:bg-primary text-[14px] font-normal hover:text-white font-lato text-[#3F509E]  py-[8px]'>Women (21)</button>
                            <button className='w-[122px] rounded-[3px]  hover:bg-primary text-[14px] font-normal hover:text-white font-lato text-[#3F509E]  py-[8px]'>Women (21)</button>
                            <button className='w-[122px] rounded-[3px]  hover:bg-primary text-[14px] font-normal hover:text-white font-lato text-[#3F509E]  py-[8px]'>Women (21)</button>
                       
                            <button className='w-[122px] rounded-[3px]  hover:bg-primary text-[14px] font-normal hover:text-white font-lato text-[#3F509E]  py-[8px]'>Women (21)</button>
                            <button className='w-[122px] rounded-[3px]  hover:bg-primary text-[14px] font-normal hover:text-white font-lato text-[#3F509E]  py-[8px]'>Women (21)</button>
                            <button className='w-[122px] rounded-[3px]  hover:bg-primary text-[14px] font-normal hover:text-white font-lato text-[#3F509E]  py-[8px]'>Women (21)</button>
                 </div>
                            
                   
                    </div>




                </div>




            </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default Blog