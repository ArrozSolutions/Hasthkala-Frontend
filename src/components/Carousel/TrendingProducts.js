import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './TrendingProducts.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const TrendingProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState(null);
    const trendingProducts = useSelector(state => state.products.trendingProducts);

    useEffect(() => {
        if (trendingProducts) {
            setProducts(trendingProducts);
        }
    }, [trendingProducts])

    return (
        <div className='relative splide2'>
            <div className='w-full text-lg sm:text-2xl mb-5 font-alegreya pl-5 sm:pl-20'>Trending Products</div>
            <Splide aria-label="My Favorite Images" className='pl-5 pr-5 sm:pl-20 sm:pr-20 pt-2 pb-2'>

                {
                    products?.map((p, key) => (
                            <SplideSlide className='slides h-[220px] sm:h-[400px] max-w-[140px] sm:max-w-[320px] shadow-xl bg-[#ffffff] rounded-lg border border-[#1a1a1d21] cursor-pointer'
                            onClick={()=>{
                                navigate(`/product/${p?.slug}`)
                            }}>
                                <div className='flex flex-col w-full h-full'>
                                    <div className='w-full max-h-[120px] sm:max-h-[300px] overflow-hidden'>
                                        <img className='h-full w-full rounded-tr-md rounded-tl-md hover:scale-110 transition-all duration-500' src={p?.images[0]?.img} alt="Image1" />
                                    </div>
                                    <div className='w-full flex flex-col sm:pl-5 sm:pr-5 pl-1 pr-1'>
                                        <p className='mb-2 mt-2 font-semibold font-alegreya text-sm sm:text-[16.5px]'>{p?.name}</p>
                                        <p className='flex justify-between mb-2 text-xs sm:text-sm'><span>Stars</span><span className='flex justify-center w-[70px]  h-[15px] sm:h-[25px] sm:w-[120px] items-center text-[7px] sm:text-xs bg-[#087e1c] text-[#ffffff] sm:pl-2 sm:pt-1 sm:pb-1 rounded sm:pr-2 '>Same Day Delivery</span></p>
                                        <p className='mb-2 text-xs sm:text-sm'><span className='font-semibold mr-3 text-red '>₹ {p?.price}.00</span><span className='text-xs line-through'>3200.00</span></p>
                                    </div>
                                </div>
                            </SplideSlide>
                    ))

                }


            </Splide>
        </div>
    )
}

export default TrendingProducts

