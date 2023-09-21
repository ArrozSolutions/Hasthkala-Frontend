import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Cat1 from '../../assets/cat1.jpg';
import Cat2 from '../../assets/cat2.jpg';
import Cat3 from '../../assets/cat3.jpg';
import Cat4 from '../../assets/cat4.jpg';
import Cat5 from '../../assets/cat5.jpg';
import Cat6 from '../../assets/cat6.jpg';
import './NewlyAddedCarousel.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSearchedProducts } from '../../actions/Product/ProductAction';

const CircularCategories = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [category,setCategory] = useState(null);
    const allcategories = useSelector(state => state.initialData.categories)

    useEffect(()=>{
        if(allcategories){
            setCategory(allcategories);
        }
    },[allcategories])

    const handleCategoryClick=(value)=>{
        dispatch(getSearchedProducts(value,1)).then((res)=>{
            navigate(`/listing/${value}`)
        })
    }


    return (
        <div className='splide1 '>
            <Splide aria-label="My Favorite Images" className='pl-5 pr-5 sm:pl-20 sm:pr-20 pt-2 pb-2'>

        {
            category?.map((c,key)=>(
                <SplideSlide className='h-[100px] max-w-[100px] sm:h-[270px] sm:max-w-[230px]  bg-[#ffffff]   pl-1 pr-1 pt-1 '>
                    <div className='relative flex flex-col w-full h-[100px] sm:h-[280px] items-center justify-center hover:scale-95 cursor-pointer  transition-all duration-500'
                    onClick={()=>{handleCategoryClick(c?.name)}}>
                        <span className='bg-red h-[60px] w-[60px] sm:h-[190px] sm:w-[190px] rounded-full overflow-hidden'>
                            <img src={c?.images[0]?.img} alt="" />
                        </span>
                        <br className='hidden sm:block' />
                        <p className='text-xs sm:text-lg mt-1 sm:mt-0'>{c.name}</p>
                    </div>
                </SplideSlide>      
            ))
        }
                

            </Splide>
        </div>
    )
}

export default CircularCategories