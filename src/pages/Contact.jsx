import React from 'react'
import BreadCrum from '../components/Common/BreadCrum'
import contactImg from '../assets/images/contactImg.png'

const Contact = () => {
  return (
    <>
    
    
    
    <section id='contact' className=''>
            <BreadCrum breadContent={'Contact Us'} />
        <div className="container">
            <div id='contact-row' className='flex gap-[100px] justify-center pt-[120px] pb-[239px]'>
                {/* ----------- left-side */}
                <div>
                    <div>

                <div>
                    <h2 className='text-[36px] font-bold font-lato text-main'>Information About us</h2>
                    <div className='w-[550px] mt-[13px] mb-[70px]'><p className='text-[16px] font-semibold font-lato text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p></div>
                </div>
                <div className='flex gap-[14px]'>
                    <button className='w-[25px] h-[25px] rounded-full bg-[#5625DF]'></button>
                    <button className='w-[25px] h-[25px] rounded-full bg-primary '></button>
                    <button className='w-[25px] h-[25px] rounded-full bg-[#37DAF3]'></button>
                    
                </div>


                    </div>

{/* ------------- information */}
                    <div className='mt-[176px]'>
                        <h2 className='text-[36px] font-bold font-lato text-main'>Get In Touch</h2>
                        <div className='w-[550px] mt-[20px] mb-[47px] '><p className='text-[16px] font-normal font-lato text-main2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p></div>
                        <div className='flex gap-[24px]'>
                            <div className='w-[255px] border border-[#A4B6C8] rounded-[3px] pl-[20px]'><input className='w-[90%] border-none outline-none  text-[16px] py-[13px] font-normal font-lato text-main2' type="text" placeholder='Your Name*' /></div>
                             <div className='w-[255px] border border-[#A4B6C8] rounded-[3px] pl-[20px]'><input className='w-[90%] border-none outline-none  text-[16px] py-[13px] font-normal font-lato text-main2' type="email" placeholder='Your E-mail' /></div>
                        </div>
                         <div className='w-[534px] mt-[34px] mb-[47px] border border-[#A4B6C8] rounded-[3px] pl-[20px]'><input className='w-[90%] border-none outline-none  text-[16px] py-[13px] font-normal font-lato text-main2' type="text" placeholder='Subject*' /></div>
                         <textarea  placeholder='Type Your Messege*' className='w-[534px] h-[166px] px-[10px] pt-[17px] border border-[#A4B6C8] rounded-[3px] text-[16px] font-normal font-lato text-main2'></textarea>


                    </div>
                          <button className='w-[157px] mt-[33px] rounded-[3px] bg-primary text-[16px] font-normal font-lato text-[#fff] py-[9px]'>Send Mail</button>
                </div>

            {/* ---------- right-side */}
            <div>
                <h2 className='text-[36px] font-bold font-lato text-main'>Contact Way</h2>

            <div className='flex mt-[26px] gap-[49px]'>

                            <div >
                            <div className='flex gap-[15px] items-center'> 
                                <div className='w-[45px] h-[45px] rounded-full bg-[#5726DF]'></div>
                                <div>

                                <p className='text-[16px] font-semibold font-lato text-main2'>Tel: 877-67-88-99</p>
                                <p className='text-[16px] font-semibold font-lato text-main2'>E-Mail: shop@store.com</p>
                                </div>
                            </div>
                                <div className='flex gap-[15px] mt-[50px] items-center'> 
                                <div className='w-[45px] h-[45px] rounded-full bg-primary'></div>
                                <div>

                                <p className='text-[16px] font-semibold font-lato text-main2'>Tel: 877-67-88-99</p>
                                <p className='text-[16px] font-semibold font-lato text-main2'>E-Mail: shop@store.com</p>
                                </div>
                            </div>

                            </div>

                            <div className=''>
                            <div className='flex gap-[15px] items-center'> 
                                <div className='w-[45px] h-[45px] rounded-full bg-[#FFB265]'></div>
                                <div>

                                <p className='text-[16px] font-semibold font-lato text-main2'>20 Margaret st, London</p>
                                <p className='text-[16px] font-semibold font-lato text-main2'>Great britain, 3NM98-LK</p>
                                </div>
                            </div>
                                <div className='flex gap-[15px] mt-[50px] items-center'> 
                                <div className='w-[45px] h-[45px] rounded-full bg-[#1BE982]'></div>
                                <div>

                                <p className='text-[16px] font-semibold font-lato text-main2'>Free standard shipping</p>
                                <p className='text-[16px] font-semibold font-lato text-main2'>on all orders.</p>
                                </div>
                            </div>

                            </div>
            </div>

            <div className='mt-[120px]'><img src={contactImg} alt="contact-img" /></div>





            </div>







            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Contact