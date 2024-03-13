import React from 'react'

const Header = () => {
  return (
  <div className='flex bg-slate-600 h-14 items-center'>
    <h1 className="text-black text-4xl font-bold text-left pl-4">Welcome</h1>
    <div className="flex-grow"></div>
    <a className='text-center text-2xl float-end mr-2 bg-slate-200 rounded-md p-0.5 w-20'>Login</a>
  </div>
  )
} 

export default Header