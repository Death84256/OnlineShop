import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Login from './Login'

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = ()=> setShowModal(false)
  return (
  <div className='flex bg-slate-600 h-14 items-center'>
    <Bars3Icon className='w-10 h-10 hover:text-[#6AD4DD]'/>
    <h1 className="text-black text-4xl font-bold text-left pl-4">Welcome</h1>
    <Login onClose={handleClose} visible={showModal}/>
    <div className="flex-grow"></div>
    <a onClick={()=> setShowModal(true)} className='text-center text-2xl float-end mr-4 bg-slate-200 rounded-md p-1 w-30 hover:bg-slate-500'>Login</a>
  </div>
  )
} 

export default Header