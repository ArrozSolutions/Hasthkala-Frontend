import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { BiSolidBell, BiSearch, BiSolidDownArrow, BiX, BiMenu} from 'react-icons/bi';
import { useSelector } from 'react-redux';
import UserImage from '../../assets/lamp.jpg';
import { ToastContainer } from 'react-toastify';
import Map from '../../assets/map.jpg';
import { useState } from 'react';

const ContactUs = () => {
 
  const auth = useSelector(state => state.user);
  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  }
  return (
    <div>
      <div className='flex'>
        <SideBar name={"contact-us"} show={hamburger}/>

        <div className='flex flex-col w-full h-screen justify-start items-center sm:pl-10 pl-5 pr-5'>

        {/* PROFILE HEADER  */}
          <div className='flex justify-between w-full h-16 items-center'>
            <div className='flex justify-between items-center w-full'>
            <div className='z-50' onClick={toggleHamburger}>
                {
                  hamburger ? <BiX size={23} /> : <BiMenu size={23} />
                }
              </div>
              <div className='hidden relative sm:flex items-center'>
                <span className='absolute ml-3 mt-1'><BiSearch color='gray' size={20} /></span>
                <input className='bg-[#7a7a8314] h-10 pl-9 w-[300px] rounded-full' type="text" placeholder='Search' />
              </div>
              <div className='flex justify-center items-center'>
                <div className='h-10 w-10 rounded-md flex items-center justify-center mr-4 bg-[#1a1a1d12]'><BiSolidBell size={20} color='gray' /></div>
                <div className='flex border border-[#1a1a1d32] rounded-md'>
                  <div className='h-10 w-10'><img className='h-full w-full rounded-bl-md rounded-tl-md' src={UserImage} alt="" /></div>
                  <div className='flex flex-col text-xs font-semibold ml-3 mt-1'>
                    <p>{auth.user?.fullname}</p>
                  </div>
                  <div className='flex justify-center items-center ml-5 mr-2 mb-1 text-gray '><BiSolidDownArrow size={13} /></div>
                </div>
              </div>
            </div>
          </div>
        {/* PROFILE HEADER  */}

        {/* MODAL  */}
        <div className='w-full h-[600px] flex items-center justify-center'>
            <div className='w-full sm:w-[900px] h-[400px] sm:h-[470px] rounded-2xl shadow-xl border border-[#4d4d5517] flex relative'>
              <div className='h-full w-full flex flex-col font-semibold  font-dmsans text-xl sm:text-3xl sm:pl-20 pt-10 sm:pr-60 pl-3 pr-3'>
                  <div>Get in <span className='text-darkred'>Touch</span></div>
                  <p className='text-[11px] sm:text-xs font-dmsans mt-2 leading-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, quos corrupti aliquam tenetur rerum voluptates!</p>
                  <input type="text" placeholder='Name*' className='pl-2 mt-5 w-full h-10 text-xs font-sans font-normal text-gray border border-[#1a1a1d48]'/>
                  <input type="email" placeholder='Email*'  className='pl-2 mt-3 w-full h-10 text-xs font-sans font-normal text-gray border border-[#1a1a1d48]' />
                  <input type="text" placeholder='Phone Number*'  className='pl-2 mt-3 w-full h-10 text-xs font-sans font-normal text-gray border border-[#1a1a1d48]' />
                  <select name=""  className='pl-2 mt-3 font-semibold w-full h-10 text-xs font-sans  text-gray border border-[#1a1a1d48]' id="">
                    <option value="">How did you find us?</option>
                  </select>
                  <button className='w-full h-10 bg-darkred mb-5 sm:mb-0 mt-4 text-white text-xs uppercase'>send</button>
              </div>
              <div className='absolute flex items-center justify-center h-full w-[350px] right-20'>
              <div className='hidden sm:block h-[400px] w-[310px] shadow-xl'>
                <img className='h-full w-full' src={Map} alt="" />
              </div>
              </div>
              <div className='hidden sm:block h-full w-[350px] rounded-br-2xl rounded-tr-2xl bg-grayblue'></div>
            </div>
        </div>
        {/* MODAL  */}


        </div>
      </div>

      <ToastContainer/>
    </div>
  )
}

export default ContactUs