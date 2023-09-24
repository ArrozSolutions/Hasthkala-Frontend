import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GoldenStar from '../../assets/goldenstar.png';
import GrayStar from '../../assets/graystar.png';
import { getSavedProducts, removeSavedData } from '../../actions/Cart/CartAction';
import { useDispatch, useSelector } from 'react-redux';

const SavedProductCard = ({ slug, name, price, img, id }) => {
    const [userId,setUserId] = useState(null);
    const auth = useSelector(state => state.user.user);

    useEffect(()=>{
        if(auth){
          setUserId(auth?._id);
        }
      },[auth])

    const dispatch = useDispatch();

    const removeSavedItem = () => {
        const sid = id
        dispatch(removeSavedData(sid)).then(() => {
            dispatch(getSavedProducts(userId)).then(()=>{
            })
        })
    }

    return (
        <div className='relative flex flex-col  w-[225px] sm:w-[225px] min-h-[260px] h-[340px]'>
            <div className='absolute right-3 top-3 font-dmsans text-white bg-[#1a1a1d33] w-5 h-5 flex items-center justify-center rounded-full hover:shadow-lg hover:scale-110 transition-all duration-300 hover:bg-[#1a1a1dab] z-10 cursor-pointer' onClick={removeSavedItem}>X</div>
            <Link to={`/product/${slug}`} className='z-0'>
                <div className='flex flex-col shadow-xl w-full h-[340px] rounded-xl  sm:rounded-bl-xl sm:rounded-br-xl mr-10 border border-[#1a1a1d2e] relative'>
                    <div className='w-full h-[115px] min[392px]:h-[140px] sm:h-[190px]'>
                        <img className='h-full w-full rounded-tr-lg rounded-tl-lg sm:rounded-tr-xl sm:rounded-tl-xl' src={img} alt="Image1" />
                    </div>
                    <div className='w-full flex flex-col sm:pl-5 sm:pr-5 pl-1 pr-1'>
                        <p className='mb-1 mt-2 font-semibold font-alegreya text-sm sm:text-[14.5px]'>{name}</p>
                        <p className='flex mb-3 text-xs sm:text-sm'>
                            <span className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></span>
                            <span className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></span>
                            <span className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></span>
                            <span className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GoldenStar} alt="" /></span>
                            <span className='h-3 w-3 mr-[2px]'><img className='h-full w-full' src={GrayStar} alt="" /></span>
                        </p>
                        <p className='mb-2 text-xs sm:text-sm'><span className='font-semibold mr-3 text-red '>₹ {price}.00</span><span className='text-xs line-through'>3200.00</span></p>
                        <div className='w-full h-7 mt-1 mb-2'><button className='h-full w-full flex items-center justify-center text-xs font-dmsans border rounded border-darkred hover:scale-110 transition-all duration-300'>Add To Cart</button></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SavedProductCard