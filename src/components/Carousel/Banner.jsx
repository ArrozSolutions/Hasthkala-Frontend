import '@splidejs/react-splide/css';
import './NewlyAddedCarousel.css';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Banner1 from '../../assets/banner.jpg';
import Banner2 from '../../assets/banner2.jpg';
import Banner3 from '../../assets/banner3.jpg';
import './Banner.css';
const Banner = () => {

    return (
        <div className='relative w-full splide-4'>
            <Splide aria-label="My Favorite Images" className='pl-5 pr-5 pt-2 pb-2 h-full w-full flex justify-center'
                options={{
                    autoplay: true,
                    rewind: true,
                    pagination: false,
                    perPage: 1,

                }}>
                <SplideSlide className='h-full w-full shadow-xl bg-[#ffffff] rounded-lg border border-[#1a1a1d21] cursor-pointer'>
                    <div>
                        <img className='rounded-md h-full w-full' src={Banner1} alt="Banner 1" />
                    </div>
                </SplideSlide>
                <SplideSlide className='h-full w-full shadow-xl bg-[#ffffff] rounded-lg border border-[#1a1a1d21] cursor-pointer'>
                    <div><img className=' rounded-md h-full w-full' src={Banner2} alt="" /></div>
                </SplideSlide>
                <SplideSlide className='h-full w-full shadow-xl bg-[#ffffff] rounded-lg border border-[#1a1a1d21] cursor-pointer'>
                    <div><img className='rounded-md h-full w-full' src={Banner3} alt="" /></div>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Banner