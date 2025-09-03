import React from 'react'
import { Link } from 'react-router'

const BreadCrum = ({breadLink , breadContent}) => {
  return (
    <>
    
    
    
    
    
    
    <div className='bg-[#F6F5FF] pt-[97px] pb-[126px] pl-[375px]'>

        <h2 className='text-[35px] font-bold font-lato text-main'>{breadContent}</h2>
<Link className='text-[16px] font-medium font-lato text-[#000]' to={'/'}>Home </Link>
.
<Link className='text-[16px] font-medium font-lato text-[#000]' to={'/'}>Pages </Link>

<Link className='text-[16px] font-medium font-lato text-primary' to={breadLink}>.{ breadContent}</Link>


    </div>
    
    
    
    
    </>
  )
}

export default BreadCrum