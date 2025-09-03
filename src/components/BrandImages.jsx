import React from 'react'
import brandImg from '../assets/images/brandImages.png'
import { Link } from 'react-router'

const BrandImages = () => {
  return (
    <>
    
    
    
    <section id='brandImages' className='py-[96px]'>
        <div className="container">
            <div id='brandImages-row' className='text-center flex justify-center'>
                <Link to={'/'}><img src={brandImg} alt="brandImg" /></Link>

            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default BrandImages