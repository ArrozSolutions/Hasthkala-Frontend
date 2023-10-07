import React from 'react';
import Header from '../../components/Header/Header';
import Header2 from '../../components/Header2/Header2';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from "../../helpers/axios";
import SimilarProducts from '../../components/Carousel/SimilarProducts';
import { ToastContainer, toast } from 'react-toastify';
import { addItemToCart, removeSavedData, saveProductForLater } from '../../actions/Cart/CartAction';
import GoldenStar from '../../assets/goldenstar.png';
import GrayStar from '../../assets/graystar.png';
import { BiHeart, BiMenu, BiSolidHeart, BiX } from 'react-icons/bi';
import Navbar from '../../components/Navbar/Navbar';
import Spinner from '../../components/Spinner/Spinner';
const SingleProduct = () => {

    const auth = useSelector(state => state.user.user);
    const sid = useSelector(state => state.cart.currentSaved);
    const [msg, setMsg] = useState(null);
    const message = useSelector(state => state.cart.message)
    const dispatch = useDispatch();

    useEffect(() => {
        if (message) {
            setMsg(message);
        }
    }, [message])

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
    const [hamburger, setHamburger] = useState(false);

    const toggleHamburger = () => {
        setHamburger(!hamburger);
    }

    const [saved, setSaved] = useState(false);
    const toggleSaved = () => {
        setSaved(!saved);
        if (saved) {
            dispatch(removeSavedData(sid));
        }
        if (!saved) {
            dispatch(saveProductForLater(product?._id, auth?._id))
        }
    }
    const navigate = useNavigate();
    const buyNow=()=>{
        navigate('/buy-now',{
            state:{
                total:(product?.discountprice || product?.price),
                discount:0,
                quantity:quantity,
                data:product,
            }
        })
    }

    return (
        <>
            
                <div className='flex flex-col'>
                    <div className='absolute block sm:hidden top-4 left-6 z-[60]' onClick={toggleHamburger}>
                        {
                            hamburger ? <BiX color='darkred' size={22} /> :
                                <BiMenu size={22} color='#1a1a1d' />

                        }
                    </div>
                    <Navbar show={hamburger} />
                    <Header />
                    <div className='hidden sm:block'>
                        <Header2 />
                    </div>
                    {product ?<div className='flex flex-col sm:flex-row min-h-[800px]'>
                        <div className='w-full sm:w-1/2 h-full'>
                            <div className='flex flex-col-reverse sm:flex-row items-center relative justify-center w-full h-[400px] sm:h-[600px]'>
                            <div className='block lg:hidden absolute right-4 top-4 cursor-pointer' onClick={toggleSaved}>{
                                saved ? <BiSolidHeart size={30} color='darkred' /> : <BiHeart size={30} color='gray' />
                            }
                            </div>
                                <div className='flex flex-col'>
                                    {
                                        product?.images.map((img, key) => (
                                            <div key={key} className='sm:h-[85px] h-[75px] w-[75-x] sm:w-[85px] border border-[#1a1a1d30] shadow mb-8  active:border-red'><img className='h-full w-full' src={img.img} alt="" /></div>
                                        ))
                                    }
                                </div>
                                <div className='h-[350px] mt-20 sm:mt-0 mb-3 sm:mb-0 sm:h-[390px] w-full sm:w-[390px] sm:ml-20'><img className='rounded h-full w-full' src={product?.images[0]?.img} alt="" /></div>
                            </div>
                        </div>
                        <div className='w-full sm:w-1/2 h-full pl-3 sm:pl-20 pr-5 sm:pr-40 pt-14 mt-5 sm:mt-0 relative'>
                            <div className='hidden lg:block absolute right-20 cursor-pointer' onClick={toggleSaved}>{
                                saved ? <BiSolidHeart size={35} color='darkred' /> : <BiHeart size={35} color='gray' />
                            }
                            </div>
                            <div className='text-sm sm:text-[31px] uppercase font-dmsans w-full font-semibold sm:leading-10'>{product?.name}</div>
                            <div className='flex mt-1 sm:mt-3 items-center text-xs sm:text-sm'>
                                <span className='sm:w-4 sm:h-4 w-3 h=3 mr-[1px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                <span className='sm:w-4 sm:h-4 w-3 h=3 mr-[1px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                <span className='sm:w-4 sm:h-4 w-3 h=3 mr-[1px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                <span className='sm:w-4 sm:h-4 w-3 h=3 mr-[1px]'><img className='w-full h-full' src={GoldenStar} alt="" /></span>
                                <span className='sm:w-4 sm:h-4 w-3 h=3 mr-[1px]'><img className='w-full h-full' src={GrayStar} alt="" /></span>
                                &nbsp; 4 ratings</div>
                            <div className='flex mt-5'>
                                <div className='text-2xl sm:text-3xl font-dmsans font-semibold mr-2'>₹{product?.price}</div>
                                <div className='flex flex-col'>
                                    <div className='flex text-xs sm:text-sm'>
                                        <p className=' line-through mr-1 font-dmsans'>₹ 549</p>
                                        <p className='text-[#20992c] font-dmsans'>36% off</p>
                                    </div>
                                    <p className='text-[11px] sm:text-xs text-gray'>Inclusive of all taxes</p>
                                </div>
                            </div>
                            <ul className='list-disc pl-5 sm:pl-7 mt-5 sm:text-sm text-xs' >
                                <li>This product will be shipped using our courier partners</li>
                                <li>Products will be shipped within 5-6 days of order placement</li>
                            </ul>
                            <div className='mt-5 text-sm font-dmsans sm:text-lg'>Deliver To</div>
                            <div className='flex justify-between sm:mt-4 mt-3'>
                                <input type="text" placeholder='Pincode' className='h-8 sm:h-9 w-[250px] sm:w-[400px] pl-3 rounded border border-[#1a1a1d53] mr-1 sm:mr-0 text-sm' />
                                <button className='h-8 sm:h-9 rounded w-24 font-dmsans text-sm flex items-center justify-center bg-[#659ddc72]'>Check</button>
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
                            <div className='flex mt-3 sm:mt-5 justify-between'>
                                <button className=' w-[162px] sm:w-[250px] h-8 rounded font-dmsans text-sm border border-[#1a1a1d43]' onClick={(e) => {
                                    const uid = auth?._id;
                                    const pid = product?._id;
                                    dispatch(addItemToCart(pid, uid, quantity, product?.quantity)).then((success) => {
                                        successToast("Item Added To Cart");
                                    })
                                }}>Add to Cart</button>
                                <button className='w-[162px] sm:w-[250px] h-8 rounded font-dmsans text-sm bg-darkred text-white' onClick={buyNow}>Buy Now</button>
                            </div>
                            <div className='flex mt-5 flex-col text-[13px] sm:text-[15px]'>
                                <div className='flex uppercase'><p className='font-dmsans'>SKU:&nbsp;</p><p className='text-gray'> IUS000113_VC00099</p></div>
                                <div className='flex uppercase'><p className='font-dmsans'>CATEGORIES:&nbsp;</p><p className='text-gray'>{product?.category?.name}</p></div>
                            </div>
                            <div className='mt-5'>
                                <h1 className='font-dmsans text-[14px] sm:text-lg'>Product Details</h1>
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
                    </div>:<Spinner/> }


                    <div className='mt-14 mb-10 font-alegreya text-2xl w-full h-10 flex justify-center items-center'>Recommended For Your</div>
                    <div><SimilarProducts /></div>


                </div>
            
            <ToastContainer />
        </>
    )
}

export default SingleProduct