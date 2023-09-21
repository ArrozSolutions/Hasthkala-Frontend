import React from 'react';
import ProdImage from '../../assets/prodimage.jpg';
import { Link } from 'react-router-dom';

const ProductCard = ({slug, name, price, img }) => {
    return (
        <Link to={`/product/${slug}`}>
            <div className='flex flex-col w-[240px] sm:w-[300px] min-h-[400px] shadow-xl rounded-3xl  sm:rounded-bl-3xl sm:rounded-br-3xl mr-10 border border-[#1a1a1d2e]'>
                <div className='w-full h-[115px] min[392px]:h-[140px] sm:h-[300px]'>
                    <img className='h-full w-full rounded-tr-lg rounded-tl-lg sm:rounded-tr-3xl sm:rounded-tl-3xl' src={img} alt="Image 1" />
                </div>
                <div className='w-full flex flex-col sm:pl-5 sm:pr-5 pl-1 pr-1'>
                    <p className='mb-2 mt-2 font-semibold font-alegreya text-sm sm:text-[16.5px]'>{name}</p>
                    <p className='flex justify-between mb-2 text-xs sm:text-sm'><span>Stars</span><span className='flex justify-center w-[70px]  h-[15px] sm:h-[25px] sm:w-[120px] items-center text-[7px] sm:text-xs bg-[#087e1c] text-[#ffffff] sm:pl-2 sm:pt-1 sm:pb-1 rounded sm:pr-2 '>Same Day Delivery</span></p>
                    <p className='mb-2 text-xs sm:text-sm'><span className='font-semibold mr-3 text-red '>₹ {price}.00</span><span className='text-xs line-through'>3200.00</span></p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard