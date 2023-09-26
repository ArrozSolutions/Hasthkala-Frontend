import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quantityEdit, removeCartData, saveProductForLater } from '../../actions/Cart/CartAction';
import { useEffect } from 'react';
import { BiSave, BiTrash } from 'react-icons/bi';

const CartCard = ({ item }) => {
    const auth = useSelector(state => state.user.user);
    const [userId, setUserId] = useState(null);
    const [qm, setqm] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth) {
            setUserId(auth?._id)
        }
    }, [auth])

    const removeItem = () => {
        const cid = item?._id
        dispatch(removeCartData(cid, item?.productid?.quantity)).then(() => {
            window.location.reload()
        })
    }
    const saveForLater = () => {
        const pid = item?.productid?._id;
        const uid = userId;
        dispatch(saveProductForLater(pid, uid)).then((res) => {
            console.log(res)
        })
        removeItem();
    }

    useEffect(() => {
        const qtyMap = [];
        for (let i = 1; i <= item?.productid?.quantity; i++) {
            qtyMap.push(`Qty: ${i}`)
        }
        if (qtyMap.length > 1) {
            setqm(qtyMap)
            // console.log(qm)
        }
    }, [item])

    const handleChange = (e) => {
        const qnt = e.target.value;
        const cid = item?._id
        dispatch(quantityEdit(cid, qnt)).then(() => {
            window.location.reload()
        })
    }

    return (
        <div className='flex flex-col sm:flex-row w-full h-[140px] sm:h-[130px] pl-3 sm:pl-10 justify-between mb-20 sm:mb-10'>
            <div className='flex'>
                <div className='h-full w-[88px] sm:w-[130px] mr-3 sm:mr-6 border border-[#1a1a1d3c] p-2 sm:p-5 rounded'><img className='h-full w-full' src={item?.productid?.images[0]?.img} alt="" /></div>
                <div className='flex flex-col '>
                    <p className='font-semibold font-dmsans uppercase text-[#1a1a1d] text-[12px] sm:text-[15px]'>{item?.productid?.name}</p>
                    <p className='text-gray text-xs sm:text-sm'>Size: medium, <br /> Color:blue,<br /> Material:Plastic</p>
                    <div className='hidden  sm:flex mt-3 sm:mt-4'>
                        <button className='h-6 sm:h-8 border w-[85px] sm:w-[110px] rounded text-[10.5px] sm:text-[13px] text-[#3c3cff] border-[#1a1a1d3e] font-dmsans' onClick={saveForLater}>Save For Later</button>
                        <button className='h-9 text-[14px] ml-10 text-red font-dmsans' onClick={removeItem}>Remove</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-row-reverse sm:flex-col sm:pr-5 sm:items-end justify-end sm:justify-start mt-3 sm:mt-0'>
                <h1 className='text-xl font-semibold'>₹ {item?.productid?.price}</h1>
                <p className='text-sm mt-[6px] mb-[6px] flex-row-reverse sm:flex-row font-dmsans items-start'>
                    <span className='line-through text-[#1a1a1dc2] text-[18px] sm:text-lg mr-1 sm:mr-0'>₹ 549</span>
                    <span className='text-[#00B517] ml-1 text-[17px] mr-2 sm:mr-0'>36% off</span></p>
                <select name="" id="" className='h-8 text-xs sm:text-[14px] font-dmsans sm:h-9 border border-[#1a1a1d5b] rounded w-[89px] sm:w-[130px] sm:pl-2 mr-2 sm:mr-0' onChange={handleChange}>
                    <option value="default" selected disabled>Qty: {item?.quantity}</option>
                    {
                        qm?.map((q, key) => (
                            <option value={key + 1}>{q}</option>
                        ))
                    }
                </select>
            </div>
            <div className='flex sm:hidden mt-3 sm:mt-4 justify-between pr-4'>
                <button className='h-9 sm:h-8 border w-[150px] sm:w-[110px] rounded text-[13px]  font-semibold text-gray-800 sm:text-[13px] text-gray sm:text-[#3c3cff] border-[#1a1a1d3e] flex justify-center items-center' onClick={saveForLater}><BiSave className='mr-2' size={17} color='gray' /> Save For Later</button>
                <button className='h-9 border text-[13px] text-red font-dmsans border-[#1a1a1d3e] rounded w-[150px] flex justify-center items-center' onClick={removeItem}><BiTrash className='mr-2' color='gray' size={17}/> Remove</button>
            </div>
        </div>
    )
}

export default CartCard