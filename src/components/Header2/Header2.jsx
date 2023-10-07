import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';
import { useSelector } from 'react-redux';
import { BiChevronDown, BiChevronRight, BiDownArrow, BiDownArrowAlt } from 'react-icons/bi'

const Header2 = () => {
  const [current, setCurrent] = useState(null);
  const [category, setCategory] = useState(null);
  const categories = useSelector(state => state.initialData.allcategory);

  useEffect(() => {
    if (categories) {
      setCategory(categories);
    }
  }, [categories]);


  const toggleCurrent = (id) => {
    setCurrent(id);
  }


  return (
    <div className='splide1 bg-darkred h-11 mt-1 sm:mt-0 sm:h-12 flex items-center justify-center z-50 pl-10'>
      <ul className='flex relative justify-center'>
        {
          category?.map((c, key) => (
            <li key={key} className='text-white font-dmsans mr-16 cursor-pointer flex items-center h-12' onMouseEnter={() => { toggleCurrent(c?._id) }} onMouseLeave={()=>{toggleCurrent(null)}}>
              {c?.name}
              {c?.children?.length > 0 && <div className='ml-2'><BiChevronDown size={15} /></div>}
              {c?._id == current && c?.children?.length > 0 &&
                <div className='absolute bg-white shadow-xl rounded w-[300px] min-h-[100px] top-12 pl-5 pt-5 pb-5 '>
                  {
                    c?.children?.map((c, key) => (
                      <p className='text-black text-sm mb-2 cursor-pointer flex items-center  hover:text-blue-500'>
                        {c?.name}
                        {c?.children?.length > 0 && <div><BiChevronRight /></div>}
                      </p>
                    ))
                  }
                </div>}
            </li>
          ))

        }
      </ul>
    </div>

  )
}

export default Header2