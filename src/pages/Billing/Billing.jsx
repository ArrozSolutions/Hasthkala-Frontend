import React from 'react';
import Header from '../../components/Header/Header';
import Header2 from '../../components/Header2/Header2';
import OrderSummaryCard from '../../components/OrderSummaryCards/OrderSummaryCard';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { orderItem } from '../../actions/Order/OrderAction';
import { api } from '../../helpers/baseUrl'
import axios from '../../helpers/axios';

const Billing = () => {
    const navigate = useNavigate();
    const errorToast = (msg) => {
        toast(`${msg}`, { position: 'top-center' })
    }

    const location = useLocation();

    const auth = useSelector(state => state.user.user);
    const cart = useSelector(state => state.cart.cart);

    const [totalPrice, setTotalPrice] = useState(null);
    const [tax, setTax] = useState(null);
    const [discount, setDiscount] = useState(null);
    const [shipping, setShipping] = useState(null);

    const [paymentMode, setPaymentMode] = useState(null);
    const [cod, setCod] = useState(false);
    const [cardPayment, setCardPayment] = useState(false);

    const [cartdata, setCartData] = useState(null);
    const [cartItem, setCartItem] = useState(null);
    const [firstname, setFirstName] = useState(null);
    const [lastname, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [country, setCountry] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [zipcode, setZipCode] = useState(null);

    useEffect(() => {
        if (auth) {
            setFirstName(auth?.fullname?.split(" ")[0]);
            setLastName(auth?.fullname?.split(" ")[1]);
            setEmail(auth?.email);
            setPhone(auth?.phone);
            setCity(auth?.city);
            setState(auth?.state);
            setAddress(auth?.address);
            setCountry(auth?.country);
            setZipCode(auth?.zipcode);
        }
        if (location) {
            setTotalPrice(location.state.total)
            let tempTax = (location.state.total * 18) / 100
            setTax(tempTax);
            setDiscount(location.state.discount);
        }
    }, [auth,location])

    useEffect(() => {
        if (cod) {
            setShipping(79);
        } else {
            setShipping(0);
        }
    }, [cod])

    useEffect(() => {
        if (cart) {
            setCartItem(cart)
            setCartData(cart)
        }
    }, [cart])


    const handleCod = () => {
        setCod(true);
        setCardPayment(false);
        setPaymentMode("cod");
    }
    const handleCardPayment = () => {
        setCardPayment(true);
        setCod(false);
        setPaymentMode("online");
    }
    const dispatch = useDispatch();
    const handlePlaceOrder = () => {
        if (firstname && lastname && country && state && city && email && phone && address && zipcode) {
            const orderby = {
                fullname: firstname + " " + lastname,
                country,
                state,
                city,
                email,
                phone,
                address,
                zipcode,
            }
            dispatch(orderItem(orderby, cartdata, paymentMode, parseFloat((totalPrice + tax + shipping) - discount).toFixed(2))).then(() => {
                errorToast("Order Created Successfully");
                navigate("/");
            })
            // cartid:id,
            // paymentMode,
            // totalprice:buyPrice
        } else {
            errorToast("Fill all the unoptional fields")
        }
    }


    const handleOpenRazorpay = (data) => {

        const options = {
            key: 'rzp_test_QjwunCBCAXXLPv',
            amount: Number(data.amount),
            currency: data.currency,
            order_id: data.id,
            name: 'HasthKala',
            description: 'Test Transaction',
            handler: function (response) {
                console.log(response, "34")
                axios.post(`${api}/verify-payment`, { response: response })
                    .then(res => {
                        console.log(res, "37")
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }

        }
        const rzp = new window.Razorpay(options)
        rzp.open()

    }

    const handlePayment = (amount) => {
        const _data = { amount: amount }
        axios.post(`${api}/checkout`, _data)
            .then(res => {
                console.log(res.data, "29")
                handleOpenRazorpay(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className='flex flex-col'>
            <Header />
            <Header2 />
            <div className='flex min-h-screen'>
                <div className='h-full w-full pl-10 pr-20 pt-14'>
                    <div className='h-full w-full'>
                        <p className='font-dmsans'>Billing Information</p>
                        <form action="" className='flex flex-col pl-9'>

                            <span className='h-5'></span>

                            <div className='flex'>
                                <div className='flex flex-col mr-3'>
                                    <label htmlFor="" className='text-sm font-dmsans mb-[3px]'>User name</label>
                                    <input type="text" placeholder={firstname ? firstname : `First name`} className=' tracking-wide pl-3 text-xs h-9 w-[250px] border rounded border-[#1a1a1d43]' />
                                </div>
                                <div className='flex flex-col mr-3'>
                                    <label htmlFor="" className='text-sm font-dmsans mb-[3px] text-white'>.</label>
                                    <input type="text" placeholder={lastname ? lastname : 'Last name'} className='tracking-wide pl-3 text-xs h-9  w-[250px] border rounded border-[#1a1a1d43]' />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label htmlFor="" className='text-sm font-dmsans mb-[3px]'>Company Name <span className='text-gray'>(Optional)</span></label>
                                    <input type="text" className='h-9 border max-w-full min-w-full rounded border-[#1a1a1d43]' />
                                </div>

                            </div>

                            <span className='h-4'></span>

                            <div className='flex flex-col'>
                                <label htmlFor="" className='text-sm font-dmsans mb-[3px]'>Address</label>
                                <input type="text" className='h-9 border rounded border-[#1a1a1d43] pl-3 text-[14px]' placeholder={address ? address : ''} />
                            </div>

                            <span className='h-4'></span>
                            <div className='flex w-full'>
                                <div className='flex flex-col mr-3 w-1/4'>
                                    <label htmlFor="" className='text-sm font-dmsans mb-[3px]'>Country</label>
                                    <input type="text" className='h-9  border rounded border-[#1a1a1d43]' onChange={(e) => { setCountry(e.target.value) }} placeholder={country ? country : ''} />
                                </div>
                                <div className='flex flex-col mr-3 w-1/4'>
                                    <label htmlFor="" className='text-sm font-dmsans mb-[3px] '>Region/State</label>
                                    <input type="text" className='h-9  border rounded border-[#1a1a1d43] text-xs pl-2' placeholder={state ? state : ""} />
                                </div>
                                <div className='flex flex-col mr-3 w-1/4'>
                                    <label htmlFor="" className='text-sm font-dmsans mb-[3px]'>City</label>
                                    <input type="text" className='h-9 border  rounded border-[#1a1a1d43] text-xs pl-2' placeholder={city ? city : ''} />
                                </div>
                                <div className='flex flex-col w-1/4'>
                                    <label htmlFor="" className='text-sm font-dmsans mb-[3px]'>Zip Code</label>
                                    <input type="text" className='h-9 border  rounded border-[#1a1a1d43] text-xs pl-2' onChange={(e) => { setZipCode(e.target.value) }} placeholder={zipcode ? zipcode : ''} />
                                </div>

                            </div>

                            <span className='h-4'></span>
                            <div className='flex w-full'>
                                <div className='flex flex-col mr-3 w-1/2'>
                                    <label htmlFor="" className='text-sm font-dmsans mb-[3px]'>Email</label>
                                    <input type="text" className='h-9 border rounded border-[#1a1a1d43] text-xs pl-2' placeholder={email ? email : ''} />
                                </div>
                                <div className='flex flex-col mr-3 w-1/2'>
                                    <label htmlFor="" className='text-sm font-dmsans mb-[3px] '>Phone Number</label>
                                    <input type="text" className='h-9 border rounded border-[#1a1a1d43] text-xs pl-2' placeholder={phone ? phone : ''} />
                                </div>
                            </div>
                            <div className='flex mt-3'>
                                <input type="checkbox" className='mr-2'
                                />
                                <p className='text-xs'>Ship into different address</p>
                            </div>
                        </form>
                    </div>


                    <div className='min-h-[220px] w-full border border-[#1a1a1d3f] rounded pt-5 mt-5 pr-5 mb-10'>
                        <p className='font-dmsans ml-2'>Payment Option</p>
                        <form action="" className='flex flex-col pl-9 pt-5 '>
                            <div className='pl-10 h-[100px] w-full border pt-2 pb-2 rounded border-[#1a1a1d4a] flex'>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className='text-2xl font-semibold text-darkred'>₹</p>
                                    <p className='mt-1 mb-2 text-xs font-dmsans'>Cash on Delivery</p>
                                    <input type="radio" className='h-[14px] w-[14px]' value={true} onClick={handleCod} checked={cod ? true : false} />
                                </div>
                                <div className='h-full w-[1px] bg-[#1a1a1d4a] ml-5 mr-5'></div>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className='text-2xl font-semibold text-darkred'>₹</p>
                                    <p className='mt-1 mb-2 text-xs font-dmsans'>Debit/Credit Card</p>
                                    <input type="radio" className='h-[14px] w-[14px]' onClick={handleCardPayment} checked={cardPayment ? true : false} />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className='h-full max-w-[400px] min-w-[445px] pr-20 pt-14'>
                    <div className='flex flex-col w-full h-[430px] border rounded border-[#1a1a1d47] pl-4 pt-3 pr-4'>
                        <h1 className='font-dmsans'>Order Summary</h1>
                        <div className='w-full min-h-[140px] overflow-y-scroll max-h-[140px] order-scrollbar mt-3 mb-4'>
                            {
                                cartItem?.map((item, key) => (
                                    <OrderSummaryCard key={key} item={item} />
                                ))
                            }
                        </div>
                        <div className='flex justify-between text-[13px] font-dmsans'>
                            <p className=' text-gray '>Sub-total</p>
                            <p>₹{parseFloat(totalPrice - tax).toFixed(2)}</p>
                        </div>
                        <span className='h-1'></span>
                        <div className='flex justify-between text-[13px] font-dmsans'>
                            <p className=' text-gray '>Shippping</p>
                            <p>₹{shipping}</p>
                        </div>
                        <span className='h-1'></span>
                        <div className='flex justify-between text-[13px] font-dmsans'>
                            <p className=' text-gray '>Discount</p>
                            <p>₹{discount}</p>
                        </div>
                        <span className='h-1'></span>
                        <div className='flex justify-between text-[13px] font-dmsans'>
                            <p className=' text-gray '>Tax</p>
                            <p>₹{parseFloat(tax).toFixed(2)}</p>
                        </div>
                        <div className='mt-4 mb-4'>
                            <div className='w-full bg-[#1a1a1d2c] h-[1px]'></div>
                        </div>
                        <div className='flex justify-between text-[16px] font-dmsans'>
                            <p>Total</p>
                            <p>₹{parseFloat((totalPrice + shipping) - discount).toFixed(2)}</p>
                        </div>
                        <div className='mt-4'>
                            <button className='bg-darkred text-white uppercase w-full h-10 rounded text-[14px] font-dmsans flex items-center justify-center' onClick={cod ? handlePlaceOrder : handlePayment}>Place order<AiOutlineArrowRight size={18} className='ml-2' /></button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Billing