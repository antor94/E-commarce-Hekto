import React from 'react'
import mainLogo from '../assets/images/mian-logo.png'
import { Link } from 'react-router'
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
    
    <nav id='navbar' className='py-[19px]'>
        <div className="container">
            <div id='navbar-row' className='flex justify-center gap-[400px]  items-center'>
                <div className='flex gap-[88px]  items-center'>

                {/* -------------- logo */}
                <Link  to={'/'}><img src={mainLogo} alt="brand-Logo" /></Link>

                {/* ----------- nav-items */}
                <div>
                    <ul className='flex items-center gap-[35px]'>
                        <li className='text-[16px] font-normal font-lato text-[#0D0E43] hover:text-primary duration-[.4s]'>  <Link to={'/'} >Home</Link> </li>
                        <li className='text-[16px] font-normal font-lato text-[#0D0E43] hover:text-primary duration-[.4s]'>  <Link to={'/'} >Pages</Link> </li>
                        <li className='text-[16px] font-normal font-lato text-[#0D0E43] hover:text-primary duration-[.4s]'>  <Link to={'/allProduct'} >Products</Link> </li>
                        <li className='text-[16px] font-normal font-lato text-[#0D0E43] hover:text-primary duration-[.4s]'>  <Link to={'/blog'} >Blog</Link> </li>
                        <li className='text-[16px] font-normal font-lato text-[#0D0E43] hover:text-primary duration-[.4s]'>  <Link to={'/shop'} >Shop</Link> </li>
                        <li className='text-[16px] font-normal font-lato text-[#0D0E43] hover:text-primary duration-[.4s]'>  <Link to={'/contact'} >Contact</Link> </li>
                    </ul>
                </div>
                
                </div>


            {/* ------------ search-items */}
            <div className='w-[317px] h-[40px] border border-[#E7E6EF] flex justify-between'>
                <input className='w-[80%] px-[10px] outline-none' type="text" />
                <button className='w-[51px] flex justify-center bg-primary py-[8px]'><LuSearch className='text-[24px] text-[#fff]' /></button>
            </div>
            </div>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar