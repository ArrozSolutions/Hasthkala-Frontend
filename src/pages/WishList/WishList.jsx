import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SavedProductCard from '../../components/ProductCard/SavedProductCard';
import Header from '../../components/Header/Header';
import Header2 from '../../components/Header2/Header2';
import { getSavedProducts } from '../../actions/Cart/CartAction';
import { BiHeart } from 'react-icons/bi';

const Wishlist = () => {
  const dispatch = useDispatch();
  const [userId,setUserId] = useState(null);
  const [savedproducts,setSavedProducts] = useState(null);
  const products = useSelector(state => state.cart.saved);
  const auth = useSelector(state => state.user.user);

  useEffect(()=>{
    if(products){
      setSavedProducts(products);
    }
    console.log(products)
  },[products])   
  
  useEffect(()=>{
    if(auth){
      setUserId(auth?._id);
    }
  },[auth]) 

  useEffect(()=>{
    if(userId){
      dispatch(getSavedProducts(userId))
    }
  },[userId,dispatch])
  


  return (
    <div>
      <div className='flex flex-col'>
    <Header/>
    <Header2/>
      

        <div className='w-full h-full'>
          <div className='pt-9 pl-5 sm:pl-20 pb-10 pr-5 sm:pr-20'>
            <h1 className='font-dmsans text-xl flex items-center'><BiHeart className='mr-2'/>WishList</h1>
            <div className='flex flex-col min-h-full'>
              <div className='flex flex-col justify-between'>
                <div className='min-h-full pt-8 max-w-full grid grid-cols-2 lg:grid-cols-5 sm:gap-y-10'>
                  {
                    savedproducts?.map((product, key) => (
                    <SavedProductCard key={key} name={product?.pid.name} img={product?.pid.images[0].img} price={product?.pid.price} slug={product.pid.slug}  id={product?._id}/>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Wishlist