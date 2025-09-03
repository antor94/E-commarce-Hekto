import React from 'react'
import BreadCrum from '../components/Common/BreadCrum'
import { MdMenu, MdWindow } from 'react-icons/md'
import { LuSearch } from "react-icons/lu";
import ShopCommon from '../components/Common/ShopCommon';

const Shop = () => {
  return (
    <>
    
    

    <section id='shop'>
        <BreadCrum breadContent={'Shop List'} />
        <div className="container">
             <div id='shop-row'>

                {/* ------------- heading part */}
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


                                <div className='flex justify-center gap-[40pxgi]'>



                                {/* ------------ left-side */}
                                <div>


{/* ----------- product */}


                    <div>
                 <h2 className='w-[135px] text-[20px] border-b font-bold font-lato text-main'>Product Brand</h2>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> Coaster Furniture </label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> Fusion Dot High Fashion </label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> Unique Furnitture Restor </label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> Dream Furnitture Flipping </label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> Young Repurposed </label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> Green DIY furniture </label>
                  </div>



                    </div>

{/* -------------- discount */}
                    <div className='mt-[44px]'>
                 <h2 className='w-[135px] text-[20px] border-b font-bold font-lato text-main'>Discount Offer</h2>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> 20% Cashback </label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> 5% Cashback Offer </label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> 25% Discount Offer </label>
                  </div>

   

                    </div>


{/* ------------ category */}
                    <div className='mt-[44px]'>
                 <h2 className='w-[135px] text-[20px] border-b font-bold font-lato text-main'>Categories</h2>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> Prestashop </label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> Magento </label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> Bigcommerce</label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> osCommerce </label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> 3dcart </label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> Bags </label>
                  </div>
                     <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> Accessories </label>
                  </div>
                     <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> Jewellery </label>
                  </div>
                     <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> Watches </label>
                  </div>



                    </div>



{/* ------------ price filter */}
                    <div className='mt-[44px]'>
                 <h2 className='w-[135px] text-[20px] border-b font-bold font-lato text-main'>Price Filter</h2>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> $0.00 - $150.00 </label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> $150.00 - $350.00 </label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> $150.00 - $504.00 </label>
                  </div>

                    <div className="mt-[24px] flex items-center gap-[12px] mb-[16px]">
                    <input id="cat-men1" className="w-[20px]  h-[20px] "  type="checkbox"  />
                    <label  htmlFor="cat-men1" className="cursor-pointer text-[16px] font-normal font-lato text-[#7E81A2]  "> $450.00 + </label>
                  </div>
                    </div>


                    {/* ------------- color chnage */}
                    <div className='w-[203px] flex justify-center gap-[50px] mt-[18px] mb-[50px] items-center h-[31px] border border-[#BCBDDB]'>
                        <input className='w-[60%] outline-none text-[12px] font-normal font-lato text-[#15187580]' type="number" placeholder='$10.00 - 20000$' />
                        <LuSearch className='text-[#BCBDDB]' />
                    </div>

{/* -------------- color select */}
                    <div>
                 <h2 className='w-[135px] text-[20px] border-b font-bold font-lato text-main'>Filter By Color</h2>

                 <div className='w-[225px] mt-[9px] flex gap-[15px] flex-wrap '>

                    <div className='flex gap-[8px] items-center'>
                        <button className='w-[14px] h-[14px] rounded-full bg-[#5E37FF]'></button>
                        <p  className='text-[15px] font-normal font-lato text-[#7E81A2]'>Blue</p>
                    </div>
                                        <div className='flex gap-[8px] items-center'>
                        <button className='w-[14px] h-[14px] rounded-full bg-[#FF9437]'></button>
                        <p  className='text-[15px] font-normal font-lato text-[#7E81A2]'>Orange</p>
                    </div>
                                        <div className='flex gap-[8px] items-center'>
                        <button className='w-[14px] h-[14px] rounded-full bg-[#FFBF95]'></button>
                        <p  className='text-[15px] font-normal font-lato text-[#7E81A2]'>Brown</p>
                    </div>
                                        <div className='flex gap-[8px] items-center'>
                        <button className='w-[14px] h-[14px] rounded-full bg-[#33D221]'></button>
                        <p  className='text-[15px] font-normal font-lato text-[#7E81A2]'>Green</p>
                    </div>
                                        <div className='flex gap-[8px] items-center'>
                        <button className='w-[14px] h-[14px] rounded-full bg-[#E248FF]'></button>
                        <p  className='text-[15px] font-normal font-lato text-[#7E81A2]'>Purple</p>
                    </div>
                                        <div className='flex gap-[8px] items-center'>
                        <button className='w-[14px] h-[14px] rounded-full bg-[#26CBFF]'></button>
                        <p  className='text-[15px] font-normal font-lato text-[#7E81A2]'>Sky</p>
                    </div>
         

                 </div>


                    </div>

                                </div>

                        {/* -------------- right-side */}

                        <div>
                            <ShopCommon />
                            <ShopCommon />
                            <ShopCommon />
                            <ShopCommon />
                            <ShopCommon />
                            <ShopCommon />
                        </div>

                                </div>

             </div>
        </div>
    </section>
    
    
    
    
    
    
    
    </>
  )
}

export default Shop