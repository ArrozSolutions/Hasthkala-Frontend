import React from 'react'
import AdminSidebar from '../../components/Admin/SideBar/AdminSidebar';
import AdminTopbar from '../../components/Admin/TopBar/AdminTopbar';

const Inbox = () => {
  return (
    <>
      <div className='flex w-full h-screen'>
        <AdminSidebar name={'inbox'} />
        <div className='flex flex-col w-full h-screen '>
          <AdminTopbar />
        </div>
      </div>
    </>
  )
}

export default Inbox