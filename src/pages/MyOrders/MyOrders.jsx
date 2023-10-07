import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { BiSolidBell, BiSearch, BiSolidDownArrow, BiX, BiMenu, BiRightArrow, BiLeftArrowAlt } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import UserImage from '../../assets/lamp.jpg';
import { ToastContainer } from 'react-toastify';
import Map from '../../assets/map.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import { getOrders } from '../../actions/Order/OrderAction';
import { useNavigate } from 'react-router-dom';
import OrderCard from '../../components/MyOrderCards/OrderCard';
import { getUserData } from '../../actions/User/UserAction';

const MyOrders = () => {
  const [uid, setUid] = useState(null);
  const [orders, setOrders] = useState(null);
  const auth = useSelector(state => state.user);
  const [hamburger, setHamburger] = useState(false);
  const userorders = useSelector(state => state.user.orders);

  useEffect(() => {
    if (auth) {
      setUid(auth?.user?._id);
    }
  }, [auth])

  useEffect(() => {
    if (uid) {
      dispatch(getOrders(uid));
    }
  }, [uid])

  useEffect(() => {
    if (userorders) {
      setOrders(userorders);
    }
  }, [userorders])

  useEffect(() => {
    if (uid) {
      dispatch(getUserData(uid));
    }
  }, [uid])


  const toggleHamburger = () => {
    setHamburger(!hamburger);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div className='flex'>
        <SideBar name={"orders"} show={hamburger} />

        <div className='flex flex-col w-full h-screen justify-start items-center sm:pl-10 pl-0 sm:pr-5 pr-0'>

          {/* PROFILE HEADER  */}
          <div className='flex justify-between w-full h-16 items-center'>
            <div className='flex justify-between items-center w-full'>
              <div className='flex sm:hidden z-50 pl-5' onClick={toggleHamburger}>
                {
                  hamburger ? <BiX size={23} /> : <BiMenu size={23} />
                }
              </div>
              <div className='hidden sm:block' onClick={() => { navigate('/') }}>
                <BiLeftArrowAlt size={28} />
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

          <div className='flex flex-col h-full w-full bg-gray-100 pt-2 pl-4 pr-4'>
            {/* ORDER CARD  */}
            {orders?.map((order, key) => (
              <OrderCard cartdata={order?.cartdata} price={order?.totalprice} paymentmode={order?.paymentmode} />
            ))
            }
            {/* ORDER CARD  */}
          </div>



        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default MyOrders