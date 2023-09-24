import React from 'react';
import { BiHeart, BiCart, BiUserCircle, BiMenu, BiSearch } from 'react-icons/bi';
import Logo from '../../assets/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getSearchedProducts } from '../../actions/Product/ProductAction';

const Header = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState(null);

    const handleSearch = () => {
        if (value != null) {
            dispatch(getSearchedProducts(value,1)).then((result) => {
                navigate('/listing');
            })
        }
    }

    const navigate = useNavigate();
    const auth = useSelector(state => state.user);
    const userNav = () => {
        if (auth?.authenticate === false) {
            navigate('/login');
        } else {
            navigate('/profile')
        }
    }

    return (
        <>
            <div className='flex h-14 sm:h-20 items-center justify-between pl-4 sm:pl-20 sm:pr-20 pr-4' >
                <div className='flex h-full w-[180px] sm:w-[200px] items-center justify-start'>
                    <div className='block sm:hidden mr-6 cursor-pointer'><BiMenu size={23} /></div>
                    <Link to={'/'}><div className='w-[175px] max-h-[46px]'><img className='h-full w-full' src={Logo} alt="" /></div></Link>
                </div>
                <div className='relative items-center hidden lg:flex'>
                    <span onClick={handleSearch} className=' cursor-pointer absolute right-3'><BiSearch color='gray' size={19} /></span>
                    <input onChange={(e) => { setValue(e.target.value) }} type="text" placeholder='Search your favorites' className='border border-[#1a1a1d3a] shadow text-gray rounded-md h-9 w-[450px] pl-4 text-sm'
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />
                </div>
                <div className='flex '>
                    <span className='mr-6 cursor-pointer hover:scale-105 transition-all'><Link to={'/wishlist'}><BiHeart size={23} /></Link></span>
                    <span className='mr-6 cursor-pointer hover:scale-105 transition-all'><Link to={'/cart'}><BiCart size={23} /></Link></span>
                    <span className=' cursor-pointer hover:scale-105 transition-all' onClick={userNav}><Link><BiUserCircle size={23} /></Link></span>
                </div>
            </div>

            <div className='relative h-14 items-center flex ml-5 mr-5 sm:hidden'>
                <span onClick={handleSearch} className=' cursor-pointer absolute right-0 bg-darkred pt-[7px] pb-[7px] pl-2 pr-2 rounded-lg'><BiSearch color='white' size={19} /></span>
                <input onChange={(e) => setValue(e.target.value)} type="text" placeholder='Search your favorites' className='border border-[#1a1a1d3a] shadow text-gray rounded-md h-9 w-[450px] pl-4 text-sm' />
            </div>
        </>
    )
}

export default Header