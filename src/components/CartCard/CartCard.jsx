import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quantityEdit, removeCartData, saveProductForLater } from '../../actions/Cart/CartAction';
import { useEffect } from 'react';

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
        <div className='flex w-full h-[130px] pl-10 justify-between mb-10'>
            <div className='flex'>
                <div className='h-full w-[130px] mr-6 border border-[#1a1a1d3c] p-5 rounded'><img className='h-full w-full' src={item?.productid?.images[0]?.img} alt="" /></div>
                <div className='flex flex-col '>
                    <p className='font-semibold font-dmsans uppercase text-[#1a1a1d]'>{item?.productid?.name}</p>
                    <p className='text-gray text-sm'>Size: medium, Color:blue, Material:Plastic</p>
                    <p className='text-gray text-sm'>Seller: Artel Market</p>
                    <div className='flex mt-4'>
                        <button className='h-8 border w-[110px] rounded text-[13px] text-[#3c3cff] border-[#1a1a1d3e] font-dmsans' onClick={saveForLater}>Save For Later</button>
                        <button className='h-9 text-[14px] ml-10 text-red font-dmsans' onClick={removeItem}>Remove</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col pr-5 items-end'>
                <h1 className='text-xl font-semibold'>₹ {item?.productid?.price}</h1>
                <p className='text-sm mt-[6px] mb-[6px]'><span className='line-through text-gray'>₹ 549</span><span className='text-[#00B517] ml-1'>(36% off)</span></p>
                <select name="" id="" className=' h-9 border border-[#1a1a1d5b] rounded w-[130px] pl-2 ' onChange={handleChange}>
                    <option value="default" selected disabled>Qty: {item?.quantity}</option>
                    {
                        qm?.map((q, key) => (
                            <option value={key + 1}>{q}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default CartCard