import React, { useState } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import { BiSolidBell, BiSearch, BiSolidDownArrow, BiX, BiMenu} from 'react-icons/bi';
import { useSelector } from 'react-redux';
import UserImage from '../../assets/lamp.jpg';
import { ToastContainer, toast } from 'react-toastify';

const ChangePassword = () => {

  const errorToast=(msg)=>{
    toast(`${msg}`,{position:toast.POSITION.TOP_CENTER})
  }

  const auth = useSelector(state => state.user);

  const [oldPassword,setOldPassword] = useState(null);
  const [newPassword,setNewPassword] = useState(null);
  const [confirmPassword,setConfirmPassword] = useState(null);

  const onSubmitHandler=(e)=>{
    e.preventDefault();
    if(newPassword !== confirmPassword){
      errorToast("Passwords does'nt matched!");
    }
  }
  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  }

  return (
    <div>
      <div className='flex'>
        <SideBar name={"change-pass"} show={hamburger}/>

        <div className='flex flex-col w-full h-screen justify-start items-center sm:pl-10 sm:pr-5 pr-5 pl-5'>

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
        <div className='w-full h-[500px] flex items-center justify-center'>
            <form className='border border-[#4a4a5318] shadow-xl w-[600px] h-[330px] sm:h-[390px] rounded-2xl flex flex-col sm:pl-20 sm:pr-20 pl-5 pr-5' onSubmit={onSubmitHandler}>
              <div className='w-full text-pink font-dmsans text-lg sm:text-[27px] h-24 flex items-center'>Change Password</div>
              <input type="password" placeholder='Old Password' className='border border-gray rounded font-dmsans sm:text-sm pl-5 text-xs h-9 sm:h-12 mb-4' onChange={(e)=>{setOldPassword(e.target.value)}} />
              <input type="password" placeholder='New Password' className='border border-gray rounded font-dmsans sm:text-sm text-xs pl-5 h-9 sm:h-12 mb-4' onChange={(e)=>{setNewPassword(e.target.value)}}/>
              <input type="password" placeholder='Confirm Password' className='border border-gray rounded font-dmsans text-xs sm:text-sm pl-5 h-9 sm:h-12 mb-4' onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
              <button className='w-full rounded h-9 sm:h-12 bg-darkred text-white font-dmsans text-sm' type='submit'>Change Password</button>
            </form>
        </div>
        {/* MODAL  */}


        </div>
      </div>

      <ToastContainer/>
    </div>
  )
}

export default ChangePassword