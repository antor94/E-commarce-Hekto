import React from 'react'
import BreadCrum from './Common/BreadCrum'
import { MdWindow } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import AllProductCommon from './Common/allProductCommon';
import BrandImages from './BrandImages';

const AllProduct = () => {
  return (
    <>
    

    <section id='allProduct' className=''>
        <BreadCrum breadContent={'Shop Grid Default'} />
        <div className="container">
            <div id='allProduct-row' className='mt-[124px]'>


                {/* ------------------ */}

                <div className='flex justify-center gap-[200px]'>

                    {/* --------- left-side */}
                    <div>

                    <h2 className='text-[22px] font-bold font-lato text-main'>Ecommerce Acceories & Fashion item </h2>
                    <p className='text-[12px] font-normal font-lato text-main2'>About 9,620 results (0.62 seconds)</p>
                    </div>
                    {/* ----------- right-side */}
                    <div className='flex gap-[27px] items-center'>

                        <div className='flex gap-[8px] '>
                        <p className='text-[16px] font-normal font-lato text-[#3F509E]'>Per Page:</p>
                        <div className='w-[55px] h-[25px] border border-[#E7E6EF]'> <input className='w-full' type="number" /> </div>
                        </div>

                        <div className='flex gap-[8px]'>
                            <p className='text-[16px] font-normal font-lato text-[#3F509E]'>Sort By:</p>
                            <div className='w-[96px] border border-[#E7E6EF] px-[10px] '><input className='w-[70%] border-none outline-none py-[5px] text-[12px] font-normal font-lato text-main2' type="text" placeholder='Best Match' /></div>
                        </div>
                        <div className='flex gap-[27px]'>
                            <p className='text-[16px] font-normal font-lato text-[#3F509E]'>View:</p>
                            <div className='flex gap-[5px] items-center'>

                            <MdWindow />
                            <MdMenu />
                            </div> 

                            
                             <input className='w-[162px] h-[30px] border border-[#E7E6EF]' type="text" />
                             
                             
                              </div>


                    </div>
                </div>


                <div className='mt-[144px] flex justify-center flex-wrap gap-[53px] '>
                <AllProductCommon />
                <AllProductCommon />
                <AllProductCommon />
                <AllProductCommon />
                <AllProductCommon />
                <AllProductCommon />
                <AllProductCommon />
                <AllProductCommon />
                <AllProductCommon />
                <AllProductCommon />
                <AllProductCommon />
                <AllProductCommon />

                </div>

                <BrandImages />









       

            </div>
        </div>
    </section>
    
    
    
    
    
    
    
    
    </>
  )
}

export default AllProduct