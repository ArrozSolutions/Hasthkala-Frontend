import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginWithOTP, sendEmailVerification, sendotp, signup } from '../../actions/User/UserAction';
import Spinner from '../../components/Spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header';
import Header2 from '../../components/Header2/Header2';
import { BiSolidArrowToRight } from 'react-icons/bi'
import Google from '../../assets/google.svg';
import Apple from '../../assets/apple.svg';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {

  const [error, setError] = useState(null);
  const auth = useSelector(state => state.user);

  useEffect(() => {
    setError(auth?.error);
  }, [auth?.error])


  const successToast = () => {
    toast('Login Successfull', { position: toast.POSITION.TOP_CENTER })
  }

  const credentialsErrorToast = () => {
    toast(`Invalid Credentials`, { position: toast.POSITION.TOP_CENTER })
  }

  const internalErrorToast = () => {
    toast(`Internal Error`, { position: toast.POSITION.TOP_CENTER })
  }

  const invalidUserToast = () => {
    toast(`User Not Registered`, { position: toast.POSITION.TOP_CENTER })
  }

  const errorToast = (err) => {
    toast(`${err}`, { position: toast.POSITION.TOP_CENTER })
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fullname, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [phone, setPhone] = useState(null);
  const [verificationCode, setVerificationCode] = useState(null);
  const [emailVerificationCode, setEmailVerificationCode] = useState(null);
  const [loading, setLoading] = useState(false);

  const [signInWithMobile, setSignInWithMobile] = useState(true);
  const [signInWithEmail, setSignInWithEmail] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [otpScreen, setOtpScreen] = useState(false);
  const [emailVerifyScreen, setEmailVerifyScreen] = useState(false);

  const toggleEmailSignIn = () => {
    setSignInWithEmail(true);
    setSignInWithMobile(false);
    setSignUp(false);
    setOtpScreen(false);
    setEmailVerifyScreen(false);
  }

  const toggleMobileSignIn = () => {
    setSignInWithMobile(true);
    setSignInWithEmail(false);
    setSignUp(false);
    setOtpScreen(false);
    setEmailVerifyScreen(false);
  }

  const toggleSignUp = () => {
    setSignUp(true);
    setSignInWithEmail(false);
    setSignInWithMobile(false);
    setOtpScreen(false);
    setEmailVerifyScreen(false);
  }


  useEffect(() => {
    console.log(auth.user);
    if (auth?.authenticate) {
      navigate('/');
    }
  }, [])

  const loginUserWithMobileNumber = (e) => {
    e.preventDefault();
    setLoading(true);

    if(phone.length < 10){
      errorToast("Invalid Mobile Number");
      setLoading(false);
      return;
    }
    dispatch(sendotp(phone, "login"))
      .then((sendOtpRes) => {
        if (!sendOtpRes) {
          // Use the updated state variable
          setLoading(false);
          errorToast(auth?.error);
        } else {
          setLoading(false);
          toggleOtpScreen();
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        errorToast(auth?.error);
      });
  };

  const toggleOtpScreen = () => {
    setOtpScreen(true);
    setSignInWithEmail(false);
    setSignInWithMobile(false);
    setSignUp(false);
    setEmailVerifyScreen(false);
  }
  const toggleEmailVerifyScreen = () => {
    setEmailVerifyScreen(true);
    setOtpScreen(false);
    setSignInWithEmail(false);
    setSignInWithMobile(false);
    setSignUp(false);
  }

  const loginUserWithEmailPass = (e) => {
    setLoading(true);
    e.preventDefault();

    dispatch(sendEmailVerification(email, "Email Verification"))
      .then((sendOtpRes) => {
        if (!sendOtpRes) {
          setLoading(false);
          errorToast(auth?.error);
        } else {
          setLoading(false);
          toggleEmailVerifyScreen();
        }
      })
      .catch((error) => {
        setLoading(false);
        errorToast(auth?.error);
      });
  }

  const emailVerification = (e) => {
    e.preventDefault();
    if (emailVerificationCode == auth?.otp) {
      const user = {
        email,
        password
      }
      dispatch(login(user)).then(() => {
        navigate("/");
      }).catch((error) => {
        console.log("Error");
        errorToast(error);
      })
    }
  }

  const otpVerification = (e) => {
    e.preventDefault();
    if (verificationCode == auth?.otp) {
      dispatch(loginWithOTP(phone)).then(() => {
        navigate("/", {
          state: {
          },
        });
      })
        .catch((error) => {
          const formData = {
            phone: phone,
            wrongOtp: error.toString(),
          };
          // navigate("/login", { state: formData });
        });
    }
    else {
      const formData = {
        phone: phone,
        wrongOtp: "Wrong OTP"
      };
      // navigate("/login", { state: formData });
    }
  }

  const registerUser = (e) => {
    e.preventDefault();
    if(phone.length < 10){
      errorToast("Invalid Mobile Number");
      return;
    }
    if (password == confirmPassword) {
      setLoading(true);
      const user = {
        fullname,
        email,
        phone,
        password
      }
      dispatch(signup(user)).then((userRegistered) => {
        setLoading(false);
        navigate('/');
      }).catch((error)=>{
        errorToast("User Already Registered");
        setLoading(false);
      })
    } else {
      setLoading(false);
      errorToast("Passwords does not matched!");
    }
  };

  return (
    <div className='flex flex-col'>
      <Header />
      <Header2 />
      <div className='w-full h-screen flex justify-start items-start mt-[-60px]'>
        <div className='hidden sm:flex w-1/2 h-full flex-col justify-center items-center scale-50 lg:scale-100 '>
          <div className='h-[120px] w-[420px] justify-center items-center ml-32'>
            <img className='max-h-full max-w-full' src={Logo} alt="" />
          </div>
        </div>


        {/* SIGN IN WITH EMAIL AND PASSWORD  */}
        {signInWithEmail &&
          <div className='flex sm:w-1/2 w-full h-full flex-col justify-center items-center scale-90 lg:scale-100'>
            <div className='border border-[#1a1a1d27] shadow-2xl w-[370px] sm:w-[400px] h-[490px]  sm:mr-32 rounded-md'>

              <form action="" onSubmit={loginUserWithEmailPass}>
                <div className='text-pink w-full h-14 text-xl flex items-center font-semibold'>
                  <span className='cursor-pointer h-full w-1/2 flex justify-center items-center border-b-2' onClick={toggleMobileSignIn}>Sign In</span>
                  <span className='cursor-pointer h-full w-1/2 flex justify-center items-center text-gray border-b' onClick={toggleSignUp}>Sign Up</span>
                </div>
                <div className='pl-10 pr-10 pt-6'>
                  <label className='text-sm font-dmsans' htmlFor="">Email Address</label>
                  <input type="text" className='border border-[#1a1a1d52] w-full h-11 mt-1 mb-4 text-sm text-gray pl-5 rounded' onChange={(e) => { setEmail(e.target.value) }} required />
                  <label className='text-sm font-dmsans' htmlFor="">Password</label>
                  <input type="password" className='border border-[#1a1a1d52] w-full h-11 mt-1 text-sm text-gray pl-5 rounded' onChange={(e) => { setPassword(e.target.value) }} required />
                  <button className='w-full h-11 bg-darkred font-dmsans uppercase text-[#ffffff] mt-5 rounded flex items-center justify-center' type='submit'>{loading ? <Spinner /> : `Sign In`}</button>
                  <div className='text-xs flex items-center justify-center mt-4 mb-4'>
                    <span className='h-[1px] w-full bg-gray mr-1'></span>
                    or
                    <span className='h-[1px] w-full bg-gray ml-1'></span>
                  </div>
                  <button className='mb-4 w-full h-11 border border-[#1a1a1d38] text-sm rounded relative flex items-center justify-center'>
                    <span className='left-2 h-full absolute flex justify-center items-center'><img className='flex items-center justify-center p-2 h-full w-full' src={Google} alt="" /></span>
                    Login with Google
                  </button>
                  <button className='mb-4 w-full h-11 border border-[#1a1a1d38] text-sm rounded relative flex items-center justify-center'>
                    <span className='left-2 h-full absolute flex justify-center items-center'><img className='flex items-center justify-center p-2 h-full w-full' src={Apple} alt="" /></span>
                    Login with Apple
                  </button>
                </div>
              </form>

            </div>
          </div>
        }
        {/* SIGN IN WITH EMAIL AND PASSWORD  */}

        {/* SIGN IN WITH MOBILE NUMBER  */}
        {signInWithMobile &&
          <div className='flex sm:w-1/2 w-full h-full flex-col justify-center items-center scale-90 lg:scale-100'>
            <div className='border border-[#1a1a1d27] shadow-2xl w-[370px] sm:w-[400px] h-[440px] sm:mr-32 rounded-md'>

              <form action="" onSubmit={loginUserWithMobileNumber}>
                <div className='text-pink w-full h-14 text-xl flex items-center font-semibold'>
                  <span className='cursor-pointer h-full w-1/2 flex justify-center items-center border-b-2' onClick={toggleMobileSignIn}>Sign In</span>
                  <span className='cursor-pointer h-full w-1/2 flex justify-center items-center text-gray border-b' onClick={toggleSignUp}>Sign Up</span>
                </div>
                <div className='pl-10 pr-10 pt-6'>
                  <label className='text-sm font-dmsans' htmlFor="">Mobile Number</label>
                  <div className='relative items-center justify-start'>
                    <p className='absolute text-gray flex h-12 text-[16px] pl-2 items-center'>+91</p>
                    <input type="text" className='border border-[#1a1a1d52] w-full h-12 mt-1 mb-4  text-gray pl-10 rounded flex items-center' maxLength={10} onChange={(e) => { setPhone(e.target.value) }} required />
                  </div>
                  <button className='w-full h-11 bg-darkred font-dmsans uppercase text-[#ffffff] mt-5 rounded flex items-center justify-center' type='submit'>{loading ? <Spinner /> : `Sign In`}</button>
                  <div className='text-[13px] font-dmsans mt-3'>Login using <span onClick={toggleEmailSignIn} className='text-[#25baff] cursor-pointer'>Password</span></div>
                  <div className='text-xs flex items-center justify-center mt-4 mb-4'>
                    <span className='h-[1px] w-full bg-gray mr-1'></span>
                    or
                    <span className='h-[1px] w-full bg-gray ml-1'></span>
                  </div>
                  <button className='mb-4 w-full h-11 border border-[#1a1a1d38] text-sm rounded relative flex items-center justify-center'>
                    <span className='left-2 h-full absolute flex justify-center items-center'><img className='flex items-center justify-center p-2 h-full w-full' src={Google} alt="" /></span>
                    Login with Google
                  </button>
                  <button className='mb-4 w-full h-11 border border-[#1a1a1d38] text-sm rounded relative flex items-center justify-center'>
                    <span className='left-2 h-full absolute flex justify-center items-center'><img className='flex items-center justify-center p-2 h-full w-full' src={Apple} alt="" /></span>
                    Login with Apple
                  </button>
                </div>
              </form>

            </div>
          </div>
        }
        {/* SIGN IN WITH MOBILE NUMBER  */}


        {otpScreen &&
          <div className='flex sm:w-1/2 w-full h-full flex-col justify-center items-center'>
            <div className='border border-[#1a1a1d27] shadow-2xl w-[370px] sm:w-[400px] h-[300px]  sm:mr-32 rounded-md'>
              <form action="" onSubmit={otpVerification}>
                <div className='w-full h-12 flex items-end mb-3 font-semibold justify-center text-lg'>
                  Verify Your Mobile Number
                </div>
                <div className='text-[13px] text-gray pl-10 pr-10 text-center'>
                  Lorem ipsum dolor sit amet, consectetur lorem epsum lorem adipisicing elit. Accusantium, maiores.
                </div>
                <div className='pl-10 pr-10 pt-6'>
                  <label className='text-sm font-dmsans flex items-center justify-between mb-1' htmlFor="">
                    <span>Verification Code</span>
                    <span className='text-[#379bff] cursor-pointer'>Resend Code</span>
                  </label>
                  <input type="text" className='border border-[#1a1a1d52] w-full h-11 mt-1 text-sm text-gray pl-5 rounded' onChange={(e) => { setVerificationCode(e.target.value) }} required />
                  <button className='w-full h-11 bg-darkred font-dmsans uppercase text-[#ffffff] mt-5 rounded flex items-center justify-center' type='submit'>{loading ? <Spinner /> : `Verify me`}</button>
                </div>
              </form>

            </div>
          </div>
        }

        {emailVerifyScreen &&
          <div className='flex sm:w-1/2 w-full h-full flex-col justify-center items-center'>
            <div className='border border-[#1a1a1d27] shadow-2xl w-[360px] sm:w-[400px] h-[300px]  sm:mr-32 rounded-md'>
              <form action="" onSubmit={emailVerification}>
                <div className='w-full h-12 flex items-end mb-3 font-semibold justify-center text-lg'>
                  Verify Your Email Address
                </div>
                <div className='text-[13px] text-gray pl-10 pr-10 text-center'>
                  Lorem ipsum dolor sit amet, consectetur lorem epsum lorem adipisicing elit. Accusantium, maiores.
                </div>
                <div className='pl-10 pr-10 pt-6'>
                  <label className='text-sm font-dmsans flex items-center justify-between mb-1' htmlFor="">
                    <span>Verification Code</span>
                    <span className='text-[#379bff] cursor-pointer'>Resend Code</span>
                  </label>
                  <input type="text" className='border border-[#1a1a1d52] w-full h-11 mt-1 text-sm text-gray pl-5 rounded' onChange={(e) => { setEmailVerificationCode(e.target.value) }} required />
                  <button className='w-full h-11 bg-darkred font-dmsans uppercase text-[#ffffff] mt-5 rounded flex items-center justify-center' type='submit'>{loading ? <Spinner /> : `Verify me`}</button>
                </div>
              </form>

            </div>
          </div>
        }



        {signUp &&

          <div className='flex sm:w-1/2 w-full h-full flex-col justify-center items-center mt-[120px] mb-[10px]'>
            <div className='border border-[#1a1a1d27] shadow-2xl w-[330px] sm:w-[400px] h-[740px]  sm:mr-32 rounded-md'>

              <form action="" onSubmit={registerUser}>
                <div className='text-pink w-full h-14 text-xl flex items-center font-semibold'>
                  <span className='cursor-pointer h-full w-1/2 flex justify-center items-center border-b text-gray' onClick={toggleMobileSignIn}>Sign In</span>
                  <span className='cursor-pointer h-full w-1/2 flex justify-center items-center border-b-2' onClick={toggleSignUp}>Sign Up</span>
                </div>

                <div className='pl-10 pr-10 pt-6'>
                  <label className='text-sm font-dmsans' htmlFor="">Name</label>
                  <input type="text" className='border border-[#1a1a1d52] w-full h-10 mt-1 mb-4 text-sm text-gray pl-5 rounded' onChange={(e) => { setFullName(e.target.value) }} required />
                  <label className='text-sm font-dmsans' htmlFor="">Mobile Number</label>
                  <div className='relative flex items-center h-10 mt-2'>
                    <p className='absolute text-gray h-full flex left-2 text-[16px]'>+91</p>
                    <input type="text" maxLength={10} className='border pb-1 border-[#1a1a1d52] w-full h-10 mt-1 mb-4 text-[15px] text-gray pl-10 rounded' onChange={(e) => { setPhone(e.target.value) }} required />
                  </div>
                  <label className='text-sm font-dmsans' htmlFor="">Email Address</label>
                  <input type="email" className='border border-[#1a1a1d52] w-full h-10 mt-1 mb-4 text-sm text-gray pl-5 rounded' onChange={(e) => { setEmail(e.target.value) }} required />
                  <label className='text-sm font-dmsans' htmlFor="">Password</label>
                  <div className='relative h-10 mt-1 mb-4 flex items-center'>
                    <div className='absolute h-full flex items-center text-gray right-3'><FiEyeOff /></div>
                    <input type="password" placeholder='8+ characters' className='border border-[#1a1a1d52] w-full h-full text-sm text-gray pl-5 rounded' onChange={(e) => { setPassword(e.target.value) }} required />
                  </div>
                  <label className='text-sm font-dmsans' htmlFor="">Confirm Password</label>
                  <div className='relative h-10 mt-1 mb-4 flex items-center'>
                    <div className='absolute h-full flex items-center text-gray right-3'><FiEyeOff /></div>
                    <input type="password" className='border border-[#1a1a1d52] w-full h-10 mt-1 mb-3 text-sm text-gray pl-5 rounded' onChange={(e) => { setConfirmPassword(e.target.value) }} required />

                  </div>
                  <div className='flex w-full h-4 items-center justify-start'>
                    <span><input type="checkbox" className=' active:bg-darkred' required /></span>
                    <span className='text-xs ml-2'>Subscribe to our newsletter</span>
                  </div>
                  <button className='w-full h-11 bg-darkred font-dmsans uppercase text-[#ffffff] mt-5 rounded flex items-center justify-center' type='submit'>{loading ? <Spinner /> : `Sign Up`}</button>
                  <div className='text-xs flex items-center justify-center mt-4 mb-4'>
                    <span className='h-[1px] w-full bg-gray mr-1'></span>
                    or
                    <span className='h-[1px] w-full bg-gray ml-1'></span>
                  </div>
                  <button className='mb-4 w-full h-11 border border-[#1a1a1d38] text-sm rounded relative flex items-center justify-center'>
                    <span className='left-2 h-full absolute flex justify-center items-center'><img className='flex items-center justify-center p-2 h-full w-full' src={Google} alt="" /></span>
                    Login with Google
                  </button>
                  <button className='mb-4 w-full h-11 border border-[#1a1a1d38] text-sm rounded relative flex items-center justify-center'>
                    <span className='left-2 h-full absolute flex justify-center items-center'><img className='flex items-center justify-center p-2 h-full w-full' src={Apple} alt="" /></span>
                    Login with Apple
                  </button>
                </div>
              </form>
            </div>
          </div>

        }


      </div>
      <ToastContainer />
    </div>
  )
}

export default Login