import React from 'react'
import brandImg from '../assets/images/brandImg.png'
import { Link } from 'react-router'

const Login = () => {
  return (
    <>
    
    <section id='login' className='pb-[109px]'>
        <div className="container">
            <div id='login-row' className=' flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>

{/* ------------- login-part */}
                <div className='w-[544px] h-[474px] mt-[120px] mb-[109px] shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)] '>

                    <div className='py-[50px] px-[55px]'>
                        <div className='text-center'>

                    <h2 className='text-[32px] font-bold font-lato text-[#000]'>Login</h2>
                    <p className='text-[17px] font-normal font-lato text-[#9096B2]'>Please login using account detail bellow.</p>
                        </div>

                    <div className='w-[432px] mt-[37px] border rounded-[2px] border-[#9096B2] pt-[15px] pb-[18px] px-[13px]'><input className='w-[90%] text-[16px] font-normal font-lato text-[#9096B2] outline-none' type="email" placeholder='Email Address' /></div>
                    <div className='w-[432px] mt-[23px] mb-[13px] border rounded-[2px] border-[#9096B2] pt-[15px] pb-[18px] px-[13px]'><input className='w-[90%] text-[16px] font-normal font-lato text-[#9096B2] outline-none' type="password" placeholder='Password' /></div>
                    <Link to={'/'} className='text-[17px] font-normal font-lato text-[#9096B2]'>Forgot your password?</Link>
                    <button className= 'w-[432px] mt-[23px] mb-[28px] bg-primary rounded-[3px] text-[17px] font-bold font-lato text-[#fff] py-[14px]'>Sign In</button>

                    <div className='text-center'>
                    <p className='text-[17px] font-normal font-lato text-[#9096B2]'>Don’t have an Account? <Link to={'/'} >Create account</Link></p>

                    </div>

                    </div>


                </div>

                {/* ----------- brand-img */}

                <Link to={'/'} ><img src={brandImg} alt="brand-img" /></Link>

                </div>

            </div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Login