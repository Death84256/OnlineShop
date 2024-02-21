import React from 'react';
import { useState } from 'react'
import '../App.css';
const Home = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <div className='w-full border-2 border-b-white border-t-transparent border-l-transparent border-r-transparent h-18'>
            <h1 className="text-5xl text-black font-bold text-left p-4">Welcome</h1>
        </div>  
        <div  className="flex flex-col items-center justify-around mt-4">
        <form className='mt-2 border-white border-2 rounded-md border-solid p-2 w-96'action="">
            <label>Welome</label><br/><br />
            <label>Username</label><br />
            <input type="text" className='w-2/3 h-10 rounded-md p-2' name='Username' placeholder='Username'/><br/>
            <label>Password</label><br />
            <input type="password" className='w-2/3 h-10 rounded-md p-2' name='Password' placeholder='Password'/><br/>
        </form>
      </div>
    </div>
  )
}

export default Home