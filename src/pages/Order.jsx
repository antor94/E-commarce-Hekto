import React from 'react'
import task from '../assets/images/task.png'
import clock from '../assets/images/clock.png'
import checklist from '../assets/images/checklist.png'
import brandImg from '../assets/images/brandImg.png'
import { Link } from 'react-router'

const Order = () => {
  return (
    <>
    
    
    <section id='order' className='pb-[84px] relative'>
        <div className="container">
            <div id='order-row' className='text-center   pt-[181px]'>

                <div className='border-dashed border-b border-l relative mb-[116px] pb-[30px]'>
                    <div className='flex justify-center'><img src={task} alt="task" /></div>
                    <h2 className='text-[36px] font-bold font-lato text-[#101750]'> Your Order Is Completed! </h2>
                    <div className='text-center flex justify-center '>
                    <div className='w-[640px] flex justify-center mt-[21px] pb-[40px] text-center'><p className='text-[16px] font-semibold font-lato text-[#8D92A7]'>Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</p></div>

                    </div>
                    <button className='w-[208px] py-[15px] text-[16px] font-semibold font-lato text-[#fff] bg-primary'>Continue Shopping</button>
                </div>

                <div className=' absolute top-[141px] left-[125px]'><img src={clock} alt="clock" /></div>
                <div className=' absolute bottom-[265px] right-[146px]'><img src={checklist} alt="checkout" /></div>

<div className='text-center flex  justify-center'>
                <Link to={'/'} ><img src={brandImg} alt="brand-img" /></Link>

</div>

            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Order