import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/Admin/SideBar/AdminSidebar';
import AdminTopbar from '../../components/Admin/TopBar/AdminTopbar';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const auth = useSelector(state => state.user);

  useEffect(() => {
    if (!(auth?.user?.isAdmin)) {
      navigate('/');
    }
  }, [auth,navigate])

  return (
    <>
      <div className='flex w-full h-screen'>
        <AdminSidebar name={'dashboard'} />
        <div className='flex flex-col w-full h-screen '>
          <AdminTopbar />
        </div>
      </div>
    </>
  )
}

export default AdminDashboard