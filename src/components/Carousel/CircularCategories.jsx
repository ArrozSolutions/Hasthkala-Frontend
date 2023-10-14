import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './NewlyAddedCarousel.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFilteredProducts, getSearchedProducts } from '../../actions/Product/ProductAction';

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
        dispatch(getFilteredProducts(value,[0,4999],1)).then((res)=>{
            navigate(`/listing`)
        })
    }


    return (
        <div className='splide5 relative'>
            <Splide aria-label="My Favorite Images" className='pl-2 pr-2 sm:pl-20 sm:pr-20' options={{
                arrows:false,
                pagination:true,
                perPage:4,
            }}>

        {
            category?.map((c,key)=>(
                <SplideSlide  key={key} className='h-[100px] max-w-[90px] sm:h-[270px] sm:max-w-[230px]  bg-transparent pl-1 pr-1'>
                    <div className='relative flex flex-col w-full h-[100px] sm:h-[280px] items-center justify-center hover:scale-95 cursor-pointer  transition-all duration-500'
                    onClick={()=>{handleCategoryClick(c?._id)}}>
                        <span className='bg-red h-[60px] w-[60px] sm:h-[190px] sm:w-[190px] rounded-full overflow-hidden'>
                            <img className='min-h-full w-full' src={c?.images[0]?.img} alt="" />
                        </span>
                        <br className='hidden sm:block' />
                        <p className='text-[10px] font-dmsans sm:text-lg mt-1 sm:mt-0'>{c.name}</p>
                    </div>
                </SplideSlide>      
            ))
        }
                

            </Splide>
        </div>
    )
}

export default CircularCategories