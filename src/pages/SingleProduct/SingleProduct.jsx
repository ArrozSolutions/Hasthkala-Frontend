import React from 'react';
import Header from '../../components/Header/Header';
import Header2 from '../../components/Header2/Header2';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from "../../helpers/axios";
import SimilarProducts from '../../components/Carousel/SimilarProducts';
import { ToastContainer, toast } from 'react-toastify';
import { addItemToCart } from '../../actions/Cart/CartAction';
import GoldenStar from '../../assets/goldenstar.png';
import GrayStar from '../../assets/graystar.png';
const SingleProduct = () => {

    const auth = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const successToast = (msg) => {
        toast(`${msg}`, { position: toast.POSITION.TOP_CENTER })
    }

    const [product, setProduct] = useState(null);
    // const [outOfStock, setOutofStock] = useState(false);
    const params = useParams();
    const [quantity, setQuantity] = useState(1);




    useEffect(() => {
        const getSingleProduct = async () => {
            try {
                const { data } = await axios.get(`/single-product/${params.slug}`)
                setProduct(data?.product);
            } catch (error) {
                console.log(error);
            }
        }
        if (params?.slug) {
            getSingleProduct();
        }
    }, [params])


    useEffect(() => {

    }, [product])


    // console.log(product?.images[0]?.img)

    const incQuantity = () => {
        if (quantity < product?.quantity) {
            let qty = quantity + 1;
            setQuantity(qty);
        }
    }

    const decQuantity = () => {
        if (quantity > 1) {
            let qty = quantity - 1;
            setQuantity(qty);
        }
    }

    return (
        <>
            {product &&
                <div className='flex flex-col'>
                    <Header />
                    <Header2 />
                    <div className='flex min-h-[800px]'>
                        <div className='w-1/2 h-full'>
                            <div className='flex items-center justify-center w-full h-[600px]'>
                                <div className='flex flex-col'>
                                    {
                                        product?.images.map((img, key) => (
                                            <div className='h-[85px] w-[85px] border border-[#1a1a1d30] shadow mb-8  active:border-red'><img className='h-full w-full' src={img.img} alt="" /></div>
                                        ))
                                    }
                                </div>
                                <div className='h-[390px] w-[390px] ml-20'><img className='rounded h-full w-full' src={product?.images[0]?.img} alt="" /></div>
                            </div>
                        </div>
                        <div className='w-1/2 h-full pl-20 pr-40 pt-14'>
                            <div className='text-[31px] uppercase font-dmsans w-full font-semibold'>{product?.name}</div>
                            <div className='flex mt-3 items-center'>
                                <span className='w-4 h-4 mr-[4px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                <span className='w-4 h-4 mr-[4px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                <span className='w-4 h-4 mr-[4px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                <span className='w-4 h-4 mr-[4px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                <span className='w-4 h-4 mr-[4px]'><img className='w-full h-full' src={GrayStar} alt="" /></span>
                                &nbsp;. 4 ratings</div>
                            <div className='flex mt-5'>
                                <div className='text-3xl font-dmsans font-semibold mr-2'>₹{product?.price}</div>
                                <div className='flex flex-col'>
                                    <div className='flex text-sm'>
                                        <p className=' line-through mr-1'>₹ 549</p>
                                        <p className='text-[#20992c]'>36% off</p>
                                    </div>
                                    <p className='text-xs text-gray'>Inclusive of all taxes</p>
                                </div>
                            </div>
                            <ul className='list-disc pl-7 mt-5 text-sm'>
                                <li>This product will be shipped using our courier partners</li>
                                <li>Products will be shipped within 5-6 days of order placement</li>
                            </ul>
                            <div className='mt-5 text-lg'>Deliver To</div>
                            <div className='flex justify-between mt-4'>
                                <input type="text" placeholder='Pincode' className='h-9 w-[400px] pl-3 rounded border border-[#1a1a1d53]' />
                                <button className='h-9 rounded w-24 font-dmsans text-s flex items-center justify-center bg-[#659ddc72]'>Check</button>
                            </div>
                            {
                                product?.quantity < 1 &&
                                <div className='mt-5 mb-2 text-lg'>Out of stock :(</div>
                            }
                            {
                                product?.quantity > 0 &&
                                <div className='flex border border-[#1a1a1d47] w-[120px] mt-8 mb-8 h-9'>
                                    <div className='h-full flex w-1/3 justify-center items-center border-r border-[#1a1a1d47] text-4xl pb-2 cursor-pointer' onClick={decQuantity}>-</div>
                                    <div className='h-full flex w-1/3 justify-center items-center border-r border-[#1a1a1d47] text-xl'>{quantity}</div>
                                    <div className='h-full flex w-1/3 justify-center items-center text-2xl pb-1 cursor-pointer' onClick={incQuantity}>+</div>
                                </div>
                            }
                            <div className='flex mt-5 justify-between'>
                                <button className='w-[250px] h-8 rounded font-dmsans text-sm border border-[#1a1a1d43]' onClick={(e) => {
                                    console.log("Add to cart");
                                    const uid = auth?._id;
                                    const pid = product?._id;
                                    dispatch(addItemToCart(pid, uid, quantity, product?.quantity)).then((success) => {
                                        successToast("Item Added To Cart");
                                    })
                                }}>Add to Cart</button>
                                <button className='w-[250px] h-8 rounded font-dmsans text-sm bg-darkred text-white'>Buy Now</button>
                            </div>
                            <div className='flex mt-5 flex-col text-[15px]'>
                                <div className='flex uppercase'><p className='font-dmsans'>SKU:&nbsp;</p><p className='text-gray'> IUS000113_VC00099</p></div>
                                <div className='flex uppercase'><p className='font-dmsans'>CATEGORIES:&nbsp;</p><p className='text-gray'>{product?.category?.name}</p></div>
                            </div>
                            <div className='mt-5'>
                                <h1 className='font-dmsans text-lg'>Product Details</h1>
                                <h2 className='font-dmsans text-sm mt-5'>Product Description:</h2>
                                <p className='text-gray text-xs'>{product?.description}</p>
                                <h2 className='font-dmsans text-sm mt-5'>Dimensions:</h2>
                                <p className='text-gray text-xs'>{product?.dimension}</p>
                                <p className='text-gray text-xs mt-5'>Time required to dispatch 6-7 working days</p>
                                <h2 className='font-dmsans text-sm mt-5'>Additional Information:</h2>
                                <ul className='list-disc pl-5'>
                                    <li className='text-xs text-gray mt-1'>{product?.additionalinfo}</li>
                                    {/* <li className='text-xs text-gray mt-1'>Art Forms - Thikri (Mirror in-lay)</li> */}
                                </ul>
                                <h2 className='font-dmsans text-sm mt-5'>Country of Origin: {product?.countryoforigin}</h2>
                            </div>
                        </div>
                    </div>


                    <div className='mt-14 mb-10 font-alegreya text-2xl w-full h-10 flex justify-center items-center'>Recommended For Your</div>
                    <div><SimilarProducts /></div>


                </div>
            }
            <ToastContainer />
        </>
    )
}

export default SingleProduct