import React from 'react'
import Logo from '../../assets/logo.png';
import { BiCompass, BiHome, BiHomeAlt, BiHomeAlt2, BiSolidCart, BiSolidCompass, BiSolidHeart, BiSolidHome, BiSolidHomeSmile, BiSolidUser } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = ({ show }) => {
    const navigate = useNavigate();
    return (
        <div className={`transition-all pt-12 duration-300 absolute w-[300px] shadow-2xl h-full bg-[#f3f3f4] z-[51] ${show ? 'flex' : 'hidden'} sm:hidden flex flex-col`}>
            <Link to={'/'}><div className='mb-5 w-full h-[50px] pl-5 flex items-center text-white text-[13px] font-dmsans bg-darkred justify-between pr-5' >
                <span className='flex'><BiSolidHome className='mr-2' size={18} />Home</span>
                <span className='w-10 h-10'><img className='h-full w-full' src={Logo} alt="" /></span>
            </div></Link>
            <div className='pl-5'>
                <ul className='text-gray'>
                    <Link to={'/orders'}><li className='flex text-[#404040] items-center mb-3'><BiSolidCompass size={20} className='mr-2'/> My Orders</li></Link>
                    <Link to={'/cart'}><li className='flex text-[#404040] items-center mb-3'><BiSolidCart size={20} className='mr-2'/> My Cart</li></Link>
                    <Link to={'/wishlist'}><li className='flex text-[#404040] items-center mb-3'><BiSolidHeart size={20} className='mr-2'/> My Wishlist</li></Link>
                    <Link to={'/profile'}><li className='flex text-[#404040] items-center mb-3'><BiSolidUser size={20} className='mr-2'/> My Account</li></Link>
                </ul>
            </div>
            <div className='w-full border '>
            </div>
            <div className='pl-5 mt-2'>
                <ul className='text-gray'>
                    <li onClick={
                        ()=>{navigate('/footer-pages', {
                                state: {
                                    type: "return&refund"
                                }
                            })}
                    }  className='flex text-[#404040] items-center mb-3'>Help Centre</li>
                    <li onClick={
                        ()=>{navigate('/footer-pages', {
                                state: {
                                    type: "privacypolicy"
                                }
                            })}
                    } className='flex text-[#404040] items-center mb-3'>Privacy Policy</li>
                </ul>
            </div>
            <div className='w-full border '>
            </div>
        </div>
    )
}

export default Navbar