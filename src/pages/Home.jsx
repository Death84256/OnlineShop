import React from 'react';
import { useState } from 'react'
import Header from './Header';
import Login from './Login';
const Home = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='bg-slate-500'>
        <Header/>
        <Login/>
    </div>
  )
}

export default Home