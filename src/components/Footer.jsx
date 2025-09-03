import React from 'react'
import mainLogo from '../assets/images/mian-logo.png'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
    
    
    
    <section id='footer' className='bg-[#EEEFFB]'>
        <div className="container">
            <div id='footer-row' className='flex justify-center  gap-[95px] pt-[95px] pb-[103px]'>

                {/* ---------------- */}
                <div>

                <Link to={'/'}><img src={mainLogo} alt="footer-logo" /></Link>
                <div className='w-[377px] bg-white mt-[31px] mb-[25px]  flex justify-between'>
                    <input className='text-[16px] border-none outline-none w-[60%] pl-[20px] font-normal font-lato text-[#8A8FB9]' type="text" placeholder='Enter Email Address' />
                    <button className='w-[135px] text-[16px] mr-[2px] font-medium font-lato text-[#EEEFFB] bg-primary pt-[11px] my-[3px] pb-[9px] rounded-[3px]'>Sign Up</button>
                </div>
                    <p className='text-[16px] font-normal font-lato text-[#8A8FB9]'>Contact Info</p>
                    <div className='mt-[10px]'>
                    <p className='text-[16px] font-normal font-lato text-[#8A8FB9]'>17 Princess Road, London, Greater London NW1 8JR, UK</p>

                    </div>

                </div>
{/* ----------------- */}
                <div>
                    <h2 className='text-[22px] font-semibold font-lato text-[#000]'>Catagories</h2>
                    <div className='mt-[38px]'>
                        <ul className='flex flex-col gap-[21px]'>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>Laptops & Computers</Link></li>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>Cameras & Photography</Link></li>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>Smart Phones & Tablets</Link></li>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>Video Games & Consoles</Link></li>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>Waterproof Headphones</Link></li>

                        </ul>
                        </div>
                </div>

                {/* ----------------- */}
                <div>
                    <h2 className='text-[22px] font-semibold font-lato text-[#000]'>Customer Care</h2>
                    <div className='mt-[38px]'>
                        <ul className='flex flex-col gap-[21px]'>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>My Account</Link></li>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>Discount</Link></li>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>Returns</Link></li>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>Orders History</Link></li>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>Order Tracking</Link></li>

                        </ul>
                        </div>
                </div>


{/* ----------------- */}
                <div>
                    <h2 className='text-[22px] font-semibold font-lato text-[#000]'>Pages</h2>
                    <div className='mt-[38px]'>
                        <ul className='flex flex-col gap-[21px]'>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>Blog </Link></li>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>Browse the Shop</Link></li>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>Category</Link></li>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>Pre-Built Pages</Link></li>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>Visual Composer Elements</Link></li>
                            <li className='text-[16px] font-normal font-lato text-[#8A8FB9]'><Link to={'/'}>WooCommerce Pages</Link></li>

                        </ul>
                        </div>
                </div>


     </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Footer