import React from 'react'
import { Link } from "react-router-dom"  
import { XMarkIcon, UserIcon, LockClosedIcon } from '@heroicons/react/24/solid'

const Login = () => {
  return (
    <div className='fixed inset-0 backdrop-blur-sm flex justify-center items-center drop-shadow-2xl'>
      <div className='bg-[#31363F] rounded w-full sm:w-11/12 lg:w-2/4 h-full sm:h-auto pb-2'>
        <div className='bg-[#76ABAE] h-10 p-2 w-full rounded rounded-b-none justify-center flex'>
          <div className='flex-grow'></div>
          <XMarkIcon className='hover:text-[#D2042D]'/>
        </div>
        <div className='flex flex-col sm:flex-row justify-center h-auto w-full  '>
          <div className='w-full sm:w-1/2 h-auto p-2'> 
            <div className='flex justify-center'>
              Hello
            </div>
          </div>
          <div className='w-full sm:w-1/2 h-auto p-4'> 
            <form className='pr-10 pl-10 pb-5 pt-4'>
              <div className='flex items-center mb-4 mt-4'>
                <UserIcon className='h-6 w-6 text-[#EEEEEE] pr-1'/>
                <input type='text' name='username' placeholder='Username' className='border-b border-gray-400 focus:outline-none focus:border-blue-500 bg-transparent pl-2 text-white w-full'/><br />
              </div>
              <div className='flex items-center mb-4'>
                <LockClosedIcon className='h-6 w-6 text-[#EEEEEE] pr-1'/>
                <input type='password' name='password' placeholder='Password' className='border-b border-gray-400 focus:outline-none focus:border-blue-500 bg-transparent pl-2 text-white w-full'/>
              </div>
              <div className='flex items-center mb-4 mt-10'>
                <button type='submit' className='border-[#EEEEEE] border-2 p-1 rounded-full w-full hover:bg-gray-200 hover:border-gray-300 hover:text-[#31363F] transition duration-300 ease-in-out text-white'>Login</button>
              </div>
              <p className='text-[13.1px] text-white'>
                Don't have an Account? <Link className='hover:text-[#76ABAE]'>Register Now</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
