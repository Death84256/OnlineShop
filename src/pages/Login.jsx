import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { XMarkIcon, UserIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import Pic from '../assets/loginpic.png';
import Icon from '@mdi/react';
import { mdiFacebook, mdiGoogle, mdiTwitter } from '@mdi/js';

export default function Login({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === 'container') onClose();
  };
  if (!visible) return null;
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3001/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
      }
      // Pass the logged UserId back to the home page
      onClose(data.userId);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div onClick={handleOnClose} id='container' className='fixed inset-0 backdrop-blur-sm flex justify-center items-center drop-shadow-2xl'>
      <div className='bg-[#31363F] rounded w-full sm:w-11/12 lg:w-2/4 h-full sm:h-auto pb-2'>
        <div className='bg-[#76ABAE] h-10 p-2 w-full rounded rounded-b-none justify-center flex'>
          <div className='flex-grow'></div>
          <XMarkIcon onClick={onClose} className='hover:text-[#D2042D]' />
        </div>
        <div className='flex flex-col sm:flex-row justify-center h-auto w-full  '>
          <div className='w-full sm:w-1/2 h-auto p-2'>
            <div className='flex justify-center '>
              <img src={Pic} alt="" />
            </div>
          </div>
          <div className='w-full sm:w-1/2 h-auto p-4'>
            <form className='pr-10 pl-10 pb-5 pt-4' onSubmit={handleSubmit}>
              <div className='flex items-center mb-4 mt-4'>
                <UserIcon className='h-6 w-6 text-[#EEEEEE] pr-1' />
                <input type='text' name='username' placeholder='Username' value={formData.username} onChange={handleChange} className='border-b border-gray-400 focus:outline-none focus:border-blue-500 bg-transparent pl-2 text-white w-full' required /><br />
              </div>
              <div className='flex items-center mb-4'>
                <LockClosedIcon className='h-6 w-6 text-[#EEEEEE] pr-1' />
                <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} className='border-b border-gray-400 focus:outline-none focus:border-blue-500 bg-transparent pl-2 text-white w-full' required />
              </div>
              <div className='flex items-center mb-4 mt-10'>
                <button type='submit' disabled={isSubmitting} className='border-[#EEEEEE] border-2 p-1 rounded-full w-full hover:bg-gray-200 hover:border-gray-300 hover:text-[#31363F] transition duration-300 ease-in-out text-white'>
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              </div>
              <p className='text-[13.1px] text-white'>
                Don't have an Account? <Link className='hover:text-[#76ABAE] underline'>Register Now</Link>
              </p>
            </form>
            <div className='flex items-center pr-10 pl-10'>
              <hr className='flex-grow border-t-2 border-[#EEEEEE]' />
              <span className='mx-2 text-white'>Or</span>
              <hr className='flex-grow border-t-2 border-[#EEEEEE]' />
            </div>
            <div className='flex items-center justify-center pr-10 pl-10'>
              <Icon path={mdiFacebook} color="white" className='w-6 h-6 m-2 hover:opacity-75 transition duration-300 ease-in-out' />
              <Icon path={mdiGoogle} color="white" className='w-6 h-6 m-2 hover:opacity-75 transition duration-300 ease-in-out' />
              <Icon path={mdiTwitter} color="white" className='w-6 h-6 m-2 hover:opacity-75 transition duration-300 ease-in-out' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
