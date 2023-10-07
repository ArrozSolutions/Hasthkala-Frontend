import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderCard = ({ cartdata, price, paymentmode }) => {
    const navigate = useNavigate();
    return (
        <>
            {cartdata.length > 1 ?
                (cartdata?.map((c, key) => (
                        <div onClick={() => {
                            navigate(`/product/${c?.productid?.slug}`)
                        }} key={key} className='flex bg-white w-full cursor-pointer h-[100px]  sm:h-[150px] items-center pl-2 sm:pl-5 justify-between sm:pr-10 pr-4 shadow-lg mb-2'>
                            <div className='flex items-center'>
                                <div className='sm:w-24 sm:h-24 w-16 h-16 mr-5'>
                                    <img className='rounded h-full w-full mr-3' src={c?.productid?.images[0]?.img} alt="" />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='font-dmsans block sm:hidden text-[13px] mb-[5px] sm:mb-0 sm:text-[16px]'>Deliverd on Sep 15</h1>
                                    <h1 className='text-[#333337]  text-[14px] sm:text-[16px]'>{c?.productid?.name}</h1>
                                    <p className='text-[#787878] text-[11px] sm:text-xs'>Color: Cream Size: 22x24cm</p>
                                </div>
                            </div>
                            <div className='h-full pt-10'>
                                <p className='font-dmsans '>Mode:&nbsp;<span className='text-green-500 font-dmsans'>{paymentmode}</span></p>
                                <p className='font-dmsans'>₹ {price}</p>
                            </div>
                            <div className='hidden sm:flex flex-col items-end h-full pt-8'>
                                <h1 className='font-dmsans'>Deliverd on Sep 15</h1>
                            </div>
                        </div>
                    ))
                ) : (<div onClick={() => {
                            navigate(`/product/${cartdata?.slug}`)
                        }} className='flex bg-white w-full cursor-pointer h-[100px]  sm:h-[150px] items-center pl-2 sm:pl-5 justify-between sm:pr-10 pr-4 shadow-lg mb-2'>
                            <div className='flex items-center'>
                                <div className='sm:w-24 sm:h-24 w-16 h-16 mr-5'>
                                    <img className='rounded h-full w-full mr-3' src={cartdata?.images[0]?.img} alt="" />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='font-dmsans block sm:hidden text-[13px] mb-[5px] sm:mb-0 sm:text-[16px]'>Deliverd on Sep 15</h1>
                                    <h1 className='text-[#333337]  text-[14px] sm:text-[16px]'>{cartdata?.name}</h1>
                                    <p className='text-[#787878] text-[11px] sm:text-xs'>Color: Cream Size: 22x24cm</p>
                                </div>
                            </div>
                            <div className='h-full pt-10'>
                                <p className='font-dmsans '>Mode:&nbsp;<span className='text-green-500 font-dmsans'>{paymentmode}</span></p>
                                <p className='font-dmsans'>₹ {price}</p>
                            </div>
                            <div className='hidden sm:flex flex-col items-end h-full pt-8'>
                                <h1 className='font-dmsans'>Deliverd on Sep 15</h1>
                            </div>
                        </div>)}
        </>
    )
}

export default OrderCard