import React from 'react'
import logo from '../img/logo/logo1.png'
const Home = () => {
  return (
    <div className='w-full bg-white'>
        <div className='flex justify-between items-center max-w-screen-xl m-auto'>
          <div className='flex items-center justify-items-center gap-1'>
            <img src={logo} width={'130px'}/>
            <div className='text-center'>
                <p className='text-red-700 text-xl'><b>Ông già Noel</b></p>
                <b className='text-yellow-400 text-3xl'>084.349.8333</b>
            </div>
          </div>
          <div>
            <ul className='flex justify-between items-center gap-5 uppercase cursor-pointer pl-5 text-xl font-bold'>
                <i className="fa-solid fa-phone"></i> <li className='hover:text-red-600 duration-75'>Phone: +084 349 8333</li>
                <i className="fa-solid fa-magnifying-glass"></i>
                <li className='hover:text-red-600 duration-75'>Blog</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Home
