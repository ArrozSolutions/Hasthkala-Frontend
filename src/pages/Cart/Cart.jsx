import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Header2 from '../../components/Header2/Header2'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import CartCard from '../../components/CartCard/CartCard'
import './Cart.css';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from '../../actions/Cart/CartAction'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [cartItems, setCartItems] = useState(null);
    const auth = useSelector(state => state.user.user);
    const auth2 = useSelector(state => state.user);
    const cart = useSelector(state => state.cart.cart);
    const [cartTotal,setCartTotal] = useState(null);

    useEffect(() => {
        if (auth) {
            dispatch(getCartData(auth._id))
        }else{
            navigate('/login')
        }
    },[auth,dispatch,navigate])

    useEffect(() => {
        if (cart) {
            setCartItems(cart);
            let totalPrice=0;
            for (let i=0;i<cart?.length;i++){
                totalPrice = totalPrice + ((cart[i].productid.price) * cart[i].quantity)
            }
            setCartTotal(totalPrice)
        }

    }, [cart])

    const handleCheckout=()=>{
        if(auth2?.authenticate){
            navigate('/billing',{
                state:{
                    total:cartTotal,
                    discount:0
                }
            })
        }
    }


    return (
        <div className='flex flex-col'>
            <Header />
            <Header2 />
            <div className='flex flex-col sm:flex-row w-full h-screen'>
                <div className='h-full w-full sm:pl-10 sm:pr-10 sm:pt-10 pl-4 pr-4 pt-5 pb-10'>
                    <div className='h-full w-full border border-[#1a1a1d3f] rounded flex flex-col justify-between pt-5 pb-5'>
                        <div className='scrollbar flex flex-col max-w-full '>
                 {
                    cartItems?.map((c,key)=>(
                        <CartCard key={key} item={c} />
                    ))
                 }

                        </div>
                        <div className='pl-5 mt-5 hidden sm:flex'>
                            <Link to={'/'}><button className='w-[150px] h-8 text-white text-sm bg-darkred rounded flex items-center justify-center'><AiOutlineArrowLeft className='mr-[3px] font-semibold' size={14} />&nbsp;Back to shop</button></Link>
                        </div>                        
                        <div className='pl-3 mt-5 flex sm:hidden'>
                            <Link to={'/'}><button className='w-[45px] h-8 text-white text-sm bg-darkred rounded flex items-center justify-center'><AiOutlineArrowLeft className='mr-[3px] font-semibold' size={14} /></button></Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col h-full sm:min-w-[400px] max-w-[400px] sm:pt-14 sm:pr-20 sm:pl-5 pl-3 pr-3'>
                    <div className='border w-full rounded border-[#1a1a1d37] pt-2 pl-4 pr-4 pb-3'>
                        <p >Have a coupon?</p>
                        <div className='flex justify-between items-center mt-2'>
                            <input type="text" placeholder='Add coupon' className='border  border-[#1a1a1d37] rounded-tl rounded-bl text-sm pl-3 h-9' />
                            <button className='flex items-center justify-center text-red font-semibold h-9 border  border-[#1a1a1d37] w-full border-l-0 rounded-tr rounded-br'>Apply</button>
                        </div>
                    </div>
                    <div className='h-4'></div>
                    <div className='border w-full rounded border-[#1a1a1d37] pt-5 pl-4 pr-4 pb-3'>
                        <p className='font-dmsans'>Price Details</p>
                        <div className='flex flex-col mt-5'>
                            <div className='flex justify-between items-center w-full'>
                                <p>Price</p><p>₹{cartTotal}</p>
                            </div>
                            <div className='flex justify-between items-center w-full mt-2'>
                                <p>Discount</p><p className='text-[#00B517] font-semibold'>₹{0}</p>
                            </div>
                            {/* <div className='flex justify-between items-center w-full mt-2'>
                                <p>Deliver Charges</p><p className='text-[#ff1818] font-semibold'>Na</p>
                            </div> */}
                        </div>
                        <div className='w-full h-[1px] bg-[#1a1a1d31] mt-5 mb-5'>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-xl font-dmsans'>Total:</p>
                            <p className='text-xl font-semibold'>Rs {cartTotal}</p>
                        </div>
                        <div className='mt-5 mb-4'>
                            <button className='text-white w-full flex items-center justify-center h-9 bg-[#00B517] rounded-md ' onClick={handleCheckout}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart