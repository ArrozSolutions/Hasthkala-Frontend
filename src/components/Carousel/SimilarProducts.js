import { Splide, SplideSlide } from '@splidejs/react-splide';
import Logo from '../../assets/logo.jpg';
import '@splidejs/react-splide/css';
import Lamp from '../../assets/lamp.jpg';
import ProdImage from '../../assets/prodimage.jpg';
import './NewlyAddedCarousel.css';
import { useSelector } from 'react-redux';
import { api } from '../../helpers/baseUrl';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const SimilarProducts = () => {
    const [products,setProducts] = useState(null);

    const similarProducts = useSelector(state => state.products.similarproducts);

    return (
        <div className='flex flex-col lg:flex-row w-full pl-5 pr-5 sm:pl-20 sm:pr-20 justify-center '>
{/* 
                <Link to={`/product/${products[0]?.slug}`}>
                    <div className='flex flex-col w-[245px] sm:w-[300px] h-full shadow-xl rounded-bl-lg rounded-br-lg  sm:rounded-bl-3xl sm:rounded-br-3xl '>
                        <div className='w-full h-[115px] min-[392px]:h-[140px] sm:h-[300px]'>
                            <img className='min-h-full min-w-full rounded-tr-lg rounded-tl-lg sm:rounded-tr-3xl sm:rounded-tl-3xl' src={products[0]?.images[0].img} alt="Image 1" />
                        </div>
                        <div className='w-full flex flex-col sm:pl-5 sm:pr-5 pl-1 pr-1'>
                            <p className='mb-2 mt-2 font-semibold font-alegreya text-sm sm:text-[16.5px]'>{products[0]?.name}</p>
                            <p className='flex justify-between mb-2 text-xs sm:text-sm'><span>Stars</span><span className='flex justify-center w-[70px]  h-[15px] sm:h-[25px] sm:w-[120px] items-center text-[7px] sm:text-xs bg-[#087e1c] text-[#ffffff] sm:pl-2 sm:pt-1 sm:pb-1 rounded sm:pr-2 '>Same Day Delivery</span></p>
                            <p className='mb-2 text-xs sm:text-sm'><span className='font-semibold mr-3 text-red '>₹ {products[1]?.price}</span><span className='text-xs line-through'>3200.00</span></p>
                        </div>
                    </div>
                </Link> */}
        </div>
    )
}

export default SimilarProducts