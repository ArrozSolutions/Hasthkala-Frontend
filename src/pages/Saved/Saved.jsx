import React, { useEffect, useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import { useSelector } from 'react-redux';
import SavedProductCard from '../../components/ProductCard/SavedProductCard';

const Saved = () => {

  const [savedproducts,setSavedProducts] = useState(null);
  const products = useSelector(state => state.cart.saved);

  useEffect(()=>{
    if(products){
      setSavedProducts(products);
    }
    console.log(products)
  },[products])

  return (
    <div>
      <div className='flex'>
        <SideBar name={"saved"} />
        <div className='w-full h-full'>
          <div className='pt-14 pl-10'>
            <h1 className='font-dmsans text-xl'>Saved For Later</h1>
            <div className='flex flex-col min-h-full'>
              <div className='flex flex-col justify-between'>
                <div className='min-h-full pt-8 max-w-full grid grid-cols-5 gap-y-8'>
                  {
                    savedproducts?.map((product, key) => (
                    <SavedProductCard key={key} name={product?.pid.name} img={product?.pid.images[0].img} price={product?.pid.price} slug={product.pid.slug} id={product?._id}/>
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

export default Saved