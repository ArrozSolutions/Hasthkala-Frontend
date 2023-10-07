import React, { useEffect, useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { useDispatch, useSelector } from 'react-redux';
import SavedProductCard from '../../components/ProductCard/SavedProductCard';
import { BiSolidBell, BiSearch, BiSolidDownArrow, BiMenu, BiCross, BiX } from 'react-icons/bi';
import UserImage from '../../assets/lamp.jpg';
import { getSavedProducts } from '../../actions/Cart/CartAction';
import Spinner from '../../components/Spinner/Spinner';

const Saved = () => {
  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  }
  const auth = useSelector(state => state.user);

  const [savedproducts, setSavedProducts] = useState(null);
  const products = useSelector(state => state.cart.saved);

  const dispatch = useDispatch();
  useEffect(() => {
    if (auth) {
        dispatch(getSavedProducts(auth?.user?._id)).then((res) => {
        })
    }
}, [auth,dispatch])

  useEffect(() => {
    if (products) {
      setSavedProducts(products);
    }
  }, [products])

  return (
    <div>
      <div className='flex'>
        <SideBar name={"saved"} show={hamburger}/>
        <div className='flex flex-col w-full h-full pl-5 pr-4'>
          <div className='flex justify-between w-full h-20 sm:h-16 items-center'>
            <div className='flex mt-2 sm:mt-0 justify-between items-center w-full'>
              <div className='z-50' onClick={toggleHamburger}>
                {
                  hamburger ? <BiX size={23} /> : <BiMenu size={23} />
                }
              </div>
              <div className='hidden relative sm:flex items-center'>
                <span className='absolute ml-3 mt-1'><BiSearch color='gray' size={20} /></span>
                <input className='bg-[#7a7a8314] h-10 pl-9 w-[300px] rounded-full' type="text" placeholder='Search' />
              </div>
              <div className='flex justify-center items-center'>
                <div className='h-10 w-10 rounded-md flex items-center justify-center mr-4 bg-[#1a1a1d12]'><BiSolidBell size={20} color='gray' /></div>
                <div className='flex border border-[#1a1a1d32] rounded-md'>
                  <div className='h-10 w-10'><img className='h-full w-full rounded-bl-md rounded-tl-md' src={UserImage} alt="" /></div>
                  <div className='flex flex-col text-xs font-semibold ml-3 mt-1'>
                    <p>{auth.user?.fullname}</p>
                  </div>
                  <div className='flex justify-center items-center ml-5 mr-2 mb-1 text-gray '><BiSolidDownArrow size={13} /></div>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:pt-14 pt-8  sm:pl-10'>
            <h1 className='font-dmsans  sm:text-xl'>Saved For Later</h1>
            {savedproducts ? <div className='flex flex-col min-h-full'>
              <div className='flex flex-col justify-between'>
                <div className='min-h-full pt-8 max-w-full grid grid-cols-2 sm:grid-cols-5 gap-y-8'>
                  {
                    savedproducts?.map((product, key) => (
                      <SavedProductCard key={key} name={product?.pid.name} img={product?.pid.images[0].img} price={product?.pid.price} slug={product.pid.slug} id={product?._id} />
                    ))
                  }
                </div>
              </div>
            </div> : <Spinner/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Saved