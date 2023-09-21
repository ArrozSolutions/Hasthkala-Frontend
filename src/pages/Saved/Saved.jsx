import React from 'react'
import SideBar from '../../components/SideBar/SideBar'

const Saved = () => {
  return (
    <div>
        <div className='flex'>
            <SideBar name={"saved"}/>
            <div className='w-full h-full'>
                <div className='pt-14 pl-10'>
                    <h1 className='font-dmsans text-xl'>Saved For Later</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Saved