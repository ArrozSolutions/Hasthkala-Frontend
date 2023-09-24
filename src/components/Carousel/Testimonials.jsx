import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Lamp from '../../assets/lamp.jpg';
import './Testimonials.css'
import GoldenStar from '../../assets/goldenstar.png';
import GrayStar from '../../assets/graystar.png';

const Testimonials = () => {
    return (
        <div className='bg-darkred pt-5 pb-5 sm:pt-14 sm:pb-14 splide3'>
            <div className='w-full text-lg sm:text-3xl mb-5 sm:mb-14 text-[#ffffff] flex justify-center font-alegreya'>Testimonials</div>
            <Splide aria-label="My Favorite Images" className='pl-5 pr-5 sm:pl-8 sm:pr-8 pt-2 pb-2'>

                <SplideSlide className='h-[210px] max-w-[200px] sm:h-[370px] sm:max-w-[370px] shadow-md bg-[#ffffff] rounded-lg border border-[#1a1a1d21] '>
                    <div className='flex flex-col w-full h-full'>
                        <div className='flex w-full h-[100px] sm:h-[200px] items-end justify-between'>
                            <div className='flex flex-col pl-2 pr-2 sm:pl-10 sm:pr-10'>
                                <div className='h-[65px] sm:h-[110px] sm:w-[110px] w-[65px] border border-4 rounded-full sm:rounded-lg border-[#1a1a1d2e]'>
                                    <img src={Lamp} alt="" className='h-full w-full rounded-full sm:rounded-lg' />
                                </div>
                                <span className='w-full flex justify-start mt-2 sm:mt-3 ml-1 sm:scale-100'>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GrayStar} alt="" /></span>
                                </span>
                            </div>
                            <div className='flex justify-center items-center h-full w-1/2 text-7xl sm:text-9xl text-[#6060655e] font-serif'>,,</div>
                        </div>
                        <div className='font-semibold ml-2 sm:ml-10 mt-4 sm:mt-7 font-alegreya text-sm'>Nice Service Thanks, HasthKala</div>

                        <div className='flex mt-4 sm:mt-10 pl-2 sm:pl-10 pr-2 sm:pr-10'>
                            <div className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full'><img className='rounded-full h-full w-full' src={Lamp} alt="" /></div>
                            <div className='flex flex-col ml-4 items-start justify-center'>
                                <p className='text-xs sm:text-sm font-semibold font-dmsans'>Denny Hilguston</p>
                                <p className='text-xs sm:text-sm text-gray'>28/09/2023</p>
                            </div>
                        </div>
                    </div>
                </SplideSlide>

                <div className='mr-3 sm:mr-6'></div>

                <SplideSlide className='h-[210px] max-w-[200px] sm:h-[370px] sm:max-w-[370px] shadow-md bg-[#ffffff] rounded-lg border border-[#1a1a1d21] '>
                    <div className='flex flex-col w-full h-full'>
                        <div className='flex w-full h-[100px] sm:h-[200px] items-end justify-between'>
                            <div className='flex flex-col pl-2 pr-2 sm:pl-10 sm:pr-10'>
                                <div className='h-[65px] sm:h-[110px] sm:w-[110px] w-[65px] border border-4 rounded-full sm:rounded-lg border-[#1a1a1d2e]'>
                                    <img src={Lamp} alt="" className='h-full w-full rounded-full sm:rounded-lg' />
                                </div>
                                <span className='w-full flex justify-start mt-2 sm:mt-3 ml-1 sm:scale-100'>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GrayStar} alt="" /></span>
                                </span>
                            </div>
                            <div className='flex justify-center items-center h-full w-1/2 text-7xl sm:text-9xl text-[#6060655e] font-serif'>,,</div>
                        </div>
                        <div className='font-semibold ml-2 sm:ml-10 mt-4 sm:mt-7 font-alegreya text-sm'>Nice Service Thanks, HasthKala</div>

                        <div className='flex mt-4 sm:mt-10 pl-2 sm:pl-10 pr-2 sm:pr-10'>
                            <div className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full'><img className='rounded-full h-full w-full' src={Lamp} alt="" /></div>
                            <div className='flex flex-col ml-4 items-start justify-center'>
                                <p className='text-xs sm:text-sm font-semibold font-dmsans'>Denny Hilguston</p>
                                <p className='text-xs sm:text-sm text-gray'>28/09/2023</p>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <div className='mr-3 sm:mr-6'></div>

                <SplideSlide className='h-[210px] max-w-[200px] sm:h-[370px] sm:max-w-[370px] shadow-md bg-[#ffffff] rounded-lg border border-[#1a1a1d21] '>
                    <div className='flex flex-col w-full h-full'>
                        <div className='flex w-full h-[100px] sm:h-[200px] items-end justify-between'>
                            <div className='flex flex-col pl-2 pr-2 sm:pl-10 sm:pr-10'>
                                <div className='h-[65px] sm:h-[110px] sm:w-[110px] w-[65px] border border-4 rounded-full sm:rounded-lg border-[#1a1a1d2e]'>
                                    <img src={Lamp} alt="" className='h-full w-full rounded-full sm:rounded-lg' />
                                </div>
                                <span className='w-full flex justify-start mt-2 sm:mt-3 ml-1 sm:scale-100'>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GrayStar} alt="" /></span>
                                </span>
                            </div>
                            <div className='flex justify-center items-center h-full w-1/2 text-7xl sm:text-9xl text-[#6060655e] font-serif'>,,</div>
                        </div>
                        <div className='font-semibold ml-2 sm:ml-10 mt-4 sm:mt-7 font-alegreya text-sm'>Nice Service Thanks, HasthKala</div>

                        <div className='flex mt-4 sm:mt-10 pl-2 sm:pl-10 pr-2 sm:pr-10'>
                            <div className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full'><img className='rounded-full h-full w-full' src={Lamp} alt="" /></div>
                            <div className='flex flex-col ml-4 items-start justify-center'>
                                <p className='text-xs sm:text-sm font-semibold font-dmsans'>Denny Hilguston</p>
                                <p className='text-xs sm:text-sm text-gray'>28/09/2023</p>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                <div className='mr-3 sm:mr-6'></div>

                <SplideSlide className='h-[210px] max-w-[200px] sm:h-[370px] sm:max-w-[370px] shadow-md bg-[#ffffff] rounded-lg border border-[#1a1a1d21] '>
                    <div className='flex flex-col w-full h-full'>
                        <div className='flex w-full h-[100px] sm:h-[200px] items-end justify-between'>
                            <div className='flex flex-col pl-2 pr-2 sm:pl-10 sm:pr-10'>
                                <div className='h-[65px] sm:h-[110px] sm:w-[110px] w-[65px] border border-4 rounded-full sm:rounded-lg border-[#1a1a1d2e]'>
                                    <img src={Lamp} alt="" className='h-full w-full rounded-full sm:rounded-lg' />
                                </div>
                                <span className='w-full flex justify-start mt-2 sm:mt-3 ml-1 sm:scale-100'>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                    <span className='w-3 h-3 mr-[2px]'><img className='w-full h-full' src={GrayStar} alt="" /></span>
                                </span>
                            </div>
                            <div className='flex justify-center items-center h-full w-1/2 text-7xl sm:text-9xl text-[#6060655e] font-serif'>,,</div>
                        </div>
                        <div className='font-semibold ml-2 sm:ml-10 mt-4 sm:mt-7 font-alegreya text-sm'>Nice Service Thanks, HasthKala</div>

                        <div className='flex mt-4 sm:mt-10 pl-2 sm:pl-10 pr-2 sm:pr-10'>
                            <div className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full'><img className='rounded-full h-full w-full' src={Lamp} alt="" /></div>
                            <div className='flex flex-col ml-4 items-start justify-center'>
                                <p className='text-xs sm:text-sm font-semibold font-dmsans'>Denny Hilguston</p>
                                <p className='text-xs sm:text-sm text-gray'>28/09/2023</p>
                            </div>
                        </div>
                    </div>
                </SplideSlide>


            </Splide>
        </div>
    )
}

export default Testimonials