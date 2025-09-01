import React from 'react'
import bannerR8Img from '../assets/images/bannerr8img.png'
import bannerPosi from '../assets/images/bannerposimg.png'

const Banner = () => {
  return (
    <>

    <section id='banner' className='bg-[#F2F0FF] relative'>
        <div className="container">
            <div id='banner-row' className='flex gap-[22px] justify-center items-center'>
{/* ------------- left-side */}
        {/* ------------- heading */}
        <div>
            <p className='text-[16px] font-bold font-lato text-primary'>Best Furniture For Your Castle....</p>
            <div className='w-[644px] py-[12px]'>  <h2 className='text-[53px] font-bold font-lato text-[#000]'>New Furniture Collection Trends in 2020</h2>  </div>
            <div className='w-[560px]'> <p className='text-[16px] font-bold font-lato text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>  </div>

            <button className='w-[163px] mt-[27px] pt-[16px] pb-[14px] rounded-[2px] text-[17px] font-semibold font-lato text-[#fff] bg-primary'>Shop Now</button>

        </div>
        {/* ------------- right-side */}
        <div className='pt-[39px] pb-[36px]'><img src={bannerR8Img} alt="bannerImg" /></div>
            </div>
            {/* ---------- position img */}
            <div  className=' absolute top-0 left-[-51px]'><img src={bannerPosi} alt="position-img" /></div>
        </div>
    </section>



    </>
  )
}

export default Banner