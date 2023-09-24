import React from 'react'
import { BiMenu } from 'react-icons/bi'
import Img1 from '../../../assets/blog1.jpg'

const AdminTopbar = () => {
  return (
    <div className='h-20 w-full flex  relative justify-between items-center border-b'>
        <p className=' pl-10 flex items-center justify-center'><BiMenu size={24} color='darkred'/></p>
        <div className='pr-5'>
            <div className='w-9 h-9'><img className='h-full w-full rounded-full' src={Img1} alt="" /></div>
        </div>
    </div>
  )
}

export default AdminTopbar