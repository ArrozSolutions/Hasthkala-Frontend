import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Header2 from '../../components/Header2/Header2';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts, getFilteredProducts } from '../../actions/Product/ProductAction';
import Slider from '@material-ui/core/Slider';
import './Listing.css';

const Listing = () => {
    const [checked, setChecked] = useState([]);
    const [value, setValue] = useState([0, 4999]);
    const dispatch = useDispatch();
    const allproducts = useSelector(state => state.initialData.products);
    const allcategories = useSelector(state => state.initialData.categories);
    const searchedProducts = useSelector(state => state.products.searchedProducts);
    const filteredProducts = useSelector(state => state.products.filteredproducts);
    // 0 - all products
    // 1 - searched products
    // 2 - filtered products
    const [pType, setPType] = useState(0);
    const [page, setPage] = useState(2);

    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        dispatch(getFilteredProducts(checked, value, page));
        setPType(2);
    }

    function handleFilter(value, id) {
        let all = [...checked];
        if (value) {
            all.push(id)
        } else {
            all = all.filter(c => c !== id)
        }
        setChecked(all);
    }

    useEffect(() => {
        if (searchedProducts !== "") {
            setPType(1)
        }
    }, [searchedProducts])

    useEffect(() => {
        console.log(pType);
        if (checked.length > 0) {
            setPType(2);
            dispatch(getFilteredProducts(checked, value, page));
        } else {
            setPType(0);
        }
    }, [checked,dispatch,pType,page,value])
    console.log(pType)

    const handlePage = () => {
        let newPage = page + 1;
        setPage(newPage);
        console.log(page);
        if (pType === 0) {
            dispatch(getAllProducts(page));
        }
    }



    return (
        <>
            <div className='flex flex-col'>
                <Header />
                <Header2 />
                <div className='flex min-h-full h-[1400px]'>
                    <div className='flex flex-col items-end min-h-full min-w-[340px] max-w-[340px] pt-10 '>
                        <p className='text-sm font-semibold tracking-wide'>Showing 1-20 <span className='text-gray font-normal '>out of 2,356 products</span></p>
                        <div className='pt-4 pl-4 pr-4 w-[250px] min-h-[250px] mt-6 border rounded border-[#1a1a1d36]'>
                            <p className='font-semibold'>Prices</p>
                            <div className='flex justify-between items-center'>
                                <p className='text-sm mt-3 font-dmsans'>Range</p>
                                <p className='text-xs font-dmsans mt-3'>Rs {value[0]} - Rs {value[1]}</p>
                            </div>
                            <span className='w-full flex justify-center items-center h-14'>
                                <Slider
                                    value={value}
                                    min={0}
                                    max={4999}
                                    onChange={rangeSelector}
                                    valueLabelDisplay="auto"
                                />
                            </span>
                            <p className='font-semibold mb-4'>Filters</p>
                            {
                                allcategories.map((category, key) => (
                                    <div className='mb-2 flex items-center'><input className='h-[15px] w-[15px]'  onChange={(e) => { handleFilter(e.target.checked, category._id) }} type="checkbox"  /><p className='text-[13px] ml-3'>{category.name}</p></div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='flex flex-col min-h-full'>
                        <p className='mt-10 h-5 w-full flex justify-end text-sm text-gray font-dmsans pr-10'><span>Sort by:&nbsp;</span><span className='font-dmsans text-[#000]'>New Arrivals</span></p>
                        <div className='flex flex-col justify-between'>
                            <div className='min-h-full pt-8 pl-14 max-w-full grid grid-cols-3 gap-y-8'>
                                {pType === 0 && allproducts.map((product, key) => (
                                    <ProductCard key={key} name={product?.name} img={product?.images[0].img} price={product?.price} slug={product.slug} />
                                ))}
                                {
                                    pType === 1 && searchedProducts && searchedProducts.map((product, key) => (
                                        <ProductCard key={key} name={product?.name} img={product?.images[0].img} price={product?.price} slug={product.slug} />
                                    ))
                                }                            {
                                    pType === 2 && filteredProducts?.map((product, key) => (
                                        <ProductCard key={key} name={product?.name} img={product?.images[0].img} price={product?.price} slug={product.slug} />
                                    ))
                                }
                            </div>
                            <div className='w-full h-20 flex justify-end items-start' onClick={handlePage}><button className='bg-red text-white w-[120px] h-[32px] font-dmsans mb-20'>Load More</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listing