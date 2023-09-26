import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';

const Header2 = () => {
  return (
    <div className='splide1 bg-darkred h-11 mt-1 sm:mt-0 sm:h-12 flex items-center justify-evenly z-50'>
      <Splide aria-label="Header 2 Carousel" className='pl-2 pr-2 sm:pl-20 sm:pr-20 h-full w-full flex items-center text-white font-alegreya'>
        {/* <div className='ml-4 block sm:hidden'></div> */}
        <SplideSlide className='min-w-[50px] max-w-[80px] sm:max-w-[160px] h-14 flex justify-center items-center'>
          <div className='w-full h-full flex items-center justify-center cursor-pointer'>
            <Link to={'/'}>Home</Link>
          </div>
        </SplideSlide>
        <div className='mr-1'></div>
        <SplideSlide className='min-w-[100px] max-w-[120px] sm:max-w-[160px] h-14 flex justify-center items-center '>
          <div className='h-full w-full flex justify-center items-center'>
            Art On The Wall
          </div>
        </SplideSlide>
        <div className='mr-1'></div>
        <SplideSlide className='min-w-[130px] max-w-[140px] sm:max-w-[160px] h-14 flex justify-center items-center '>
          <div className='h-full w-full flex justify-center items-center'>
            Brass Artefacts
          </div>
        </SplideSlide>
        <div className='mr-1'></div>
        <SplideSlide className='min-w-[150px] max-w-[160px] sm:max-w-[180px] h-14 flex justify-center items-center '>
          <div className='h-full w-full flex justify-center items-center'>
            Lamps And Lights
          </div>
        </SplideSlide>
        <div className='mr-1'></div>
        <SplideSlide className='min-w-[100px] max-w-[160px] h-14 flex justify-center items-center '>
          <div className='h-full w-full flex justify-center items-center'>
            Furniture & Accessories
          </div>
        </SplideSlide>
        <div className='mr-1'></div>
        <SplideSlide className='min-w-[90px] max-w-[120px] h-14 flex justify-center items-center '>
          <div className='h-full w-full flex justify-center items-center'>
            More
          </div>
        </SplideSlide>
        <div className='mr-1'></div>
        <SplideSlide className='min-w-[50px] max-w-[50px] sm:max-w-[100px] h-14 flex justify-center items-center '>
          <div className='h-full w-full flex justify-center items-center'>
            Offer
          </div>
        </SplideSlide>
        <div className='mr-1'></div>
        <SplideSlide className='min-w-[100px] max-w-[160px] h-14 flex justify-center items-center'>
          <div className='h-full w-full flex justify-center items-center'>
            Customized Gifts
          </div>
        </SplideSlide>        
        <div className='mr-[200px] hidden sm:block'></div>
        <SplideSlide className='min-w-[100px] max-w-[160px] h-14 flex justify-center items-center '>
          <div className='h-full w-full flex justify-center items-center'>
          </div>
        </SplideSlide>

      </Splide>
    </div>

  )
}

export default Header2