import React from 'react'
import latestBaner from '../assets/images/LeatestBanner.png'

const Leatest = () => {
  return (
    <>
    
    
    
    
    <section     style={{
          background: `URL(${latestBaner})`,

          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }} id='Leatest'>
        <div className="container">
            <div id='Leatest-row' className='pt-[174px] pb-[103px] text-center'>
                <div className='text-center flex justify-center'>
                <div className='w-[526px] mb-[28px] text-center'><h2 className='text-[35px] font-bold font-lato text-main'>Get Leatest Update By Subscribe 0ur Newslater</h2></div>

                </div>
                <button className='w-[173px] bg-primary py-[13px] rounded-[2px] text-[17px] font-normal font-lato text-[#fff] '>Shop Now</button>

            </div>
        </div>
    </section>
    

    
    
    </>
  )
}

export default Leatest