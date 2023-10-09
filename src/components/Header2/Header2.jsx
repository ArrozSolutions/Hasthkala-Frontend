import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';
import { useSelector } from 'react-redux';
import './Header2.css';
import { BiChevronDown, BiChevronRight, BiDownArrow, BiDownArrowAlt } from 'react-icons/bi'

const Header2 = () => {
  const [current, setCurrent] = useState(null);
  const [current2, setCurrent2] = useState(null);
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
  const toggleCurrent2 = (id) => {
    setCurrent2(id);
  }

  return (
    <div className='splide1 bg-darkred h-11 mt-1 sm:mt-0 sm:h-12 flex items-center justify-center z-50 pl-10'>
      <ul className='flex relative justify-center'>
        {
          category?.map((c, key) => (
            <li key={key} className='text-white font-dmsans mr-16 cursor-pointer flex items-center h-12' onMouseEnter={() => { toggleCurrent(c?._id) }} onMouseLeave={() => { toggleCurrent(null) }}>
              {c?.name}
              {c?.children?.length > 0 && <div className='ml-2'><BiChevronDown size={15} /></div>}
              {c?._id == current && c?.children?.length > 0 &&
                <div className='absolute bg-white ml-[-5px] shadow-xl rounded min-w-[160px] min-h-[100px] max-h-[300px] top-12 pl-5 pt-5 pb-5 pr-5 z-[1000]'>
                  {
                    c?.children?.map((child, key) => (
                      <div key={key} className='z-[100] text-black text-sm mb-2  cursor-pointer justify-center  hover:text-red-600 text-left'  onMouseEnter={() => { toggleCurrent2(child?._id) }} onMouseLeave={() => { toggleCurrent2(null) }}>
                        <div >
                          <p className='flex '>{child?.name}
                            {child?.children?.length > 0 && <div><BiChevronRight /></div>}
                            {child?._id == current2 && child?.children?.length > 0 && 
                              <div className='w-[200px] min-h-[100px] bg-white shadow-2xl absolute left-40  pl-5 pr-5 pb-5 pt-5'>
                                {
                                  child?.children?.map((subchild,key)=>(<p className='text-[#383838] mb-1 hover:text-red-600'>{subchild?.name}</p>))
                                }
                              </div>
                            }
                          </p>
                        </div>
                      </div>
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