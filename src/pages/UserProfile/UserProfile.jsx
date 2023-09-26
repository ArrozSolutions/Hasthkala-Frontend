import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../actions/User/UserAction';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import { BiSolidBell, BiSearch, BiSolidDownArrow, BiMenu, BiCross, BiX} from 'react-icons/bi';
import UserImage from '../../assets/lamp.jpg';

const UserProfile = () => {

  const [hamburger,setHamburger] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.user);

  const navigate = useNavigate();

  const toggleHamburger=()=>{
    setHamburger(!hamburger);
  }

  useEffect(() => {
    if (auth?.user) {
      setFirstName(auth.user?.fullname?.split(" ")[0]);
      setLastName(auth.user?.fullname?.split(" ")[1]);
      setEmail(auth.user?.email);
      setPhone(auth.user?.phone);
      setCity(auth.user?.city);
      setState(auth.user?.state);
      setAddress(auth.user?.address);
    }
  }, [auth?.user])

  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const user = {
      fullname: `${firstname} ${lastname}`,
      email,
      phone,
      city,
      state,
      address,
      password
    }

    dispatch(update(user)).then((userUpdated)=>{
      window.location.reload();
    })

    console.log(user);
  }

  const cityMap = [
    { name: "Jabalpur" },
    { name: "Indore" },
    { name: "Bhopal" },
  ]

  const stateMap = [
    { name: "Madhya Pradesh" },
    { name: "UttarPradesh" },
    { name: "Rajasthan" },
  ]

  return (
    <div>
      <div className='flex'>
        <SideBar name={"profile"} show={hamburger}/>

        <div className='flex flex-col w-full h-screen justify-start items-center sm:pl-10 pl-3 pr-5'>

          <div className='flex justify-between w-full h-20 sm:h-16 items-center'>
            <div className='flex mt-2 sm:mt-0 justify-between items-center w-full'>
            <div className='z-50' onClick={toggleHamburger}>
            {
              hamburger?<BiX size={23}/>:<BiMenu size={23}/>
            }
            </div>
            <div className='hidden relative sm:flex items-center'>
              <span className='absolute ml-3 mt-1'><BiSearch color='gray' size={20}/></span>
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

          <div className='w-full pl-2 text-lg sm:text-2xl font-semibold mt-8 sm:mt-3 mb-9'>Edit Profile</div>

          <form action="" className='w-full pl-2 pr-2' onSubmit={formSubmitHandler}>
            <div className='flex w-full sm:w-[780px] flex-col'>

              <div className='flex w-full justify-between'>

                <div className='flex flex-col'>
                  <label htmlFor="firstname" className='mb-2 font-semibold sm:text-[16px] text-sm'>First Name</label>
                  <input onChange={(e) => { setFirstName(e.target.value) }} type="text" placeholder={firstname} name='firstname' className=' sm:h-[46px] w-[160px] sm:w-[350px] border rounded pl-3 text-xs sm:text-sm capitalize' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="lastname" className='mb-2 font-semibold sm:text-[16px] text-sm'>Last Name</label>
                  <input onChange={(e) => { setLastName(e.target.value) }} type="text" placeholder={lastname} name='lastname' className='sm:h-[46px] w-[160px] sm:w-[350px] border rounded pl-3 text-xs sm:text-sm capitalize' />
                </div>

              </div>

              <div className='h-3'></div>

              <div className='flex w-full justify-between'>
                <div className='flex flex-col w-full'>
                  <label htmlFor="email" className='mb-2 font-semibold sm:text-[16px] text-sm'>Email</label>
                  <input disabled type="email" placeholder={email} name='email' className='sm:h-[46px] w-full border rounded pl-3 text-xs sm:text-sm' />
                </div>
              </div>

              <div className='h-3'></div>

              <div className='flex w-full justify-between'>
                <div className='flex flex-col w-full'>
                  <label htmlFor="contactnumber" className='mb-2 font-semibold sm:text-[16px] text-sm'>Contact Number</label>
                  <input onChange={(e) => { setPhone(e.target.value) }} type="text" placeholder={phone} name='contactnumber' className='sm:h-[46px] w-full border rounded pl-3 text-xs sm:text-sm' />
                </div>
              </div>

              <div className='h-3'></div>

              <div className='flex w-full justify-between'>

                <div className='flex flex-col'>
                  <label htmlFor="city" className='mb-2 font-semibold sm:text-[16px] text-sm'>City</label>
                  <select onChange={(e) => { setCity(e.target.value) }} className='sm:w-[350px] w-[160px] sm:h-[46px]  border rounded  pl-3 text-xs sm:text-sm pr-2'>
                    {city == null ?
                      <option value="" defaultChecked hidden>Select City</option>:
                      <option value="" defaultChecked hidden>{city}</option>
                    }
                    {cityMap?.map((c, key) => (
                      <option key={key} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="state" className='mb-2 font-semibold sm:text-[16px] text-sm'>State</label>
                  <select onChange={(e) => { setState(e.target.value) }} className='sm:w-[350px] w-[160px] sm:h-[46px]  border rounded  pl-3 text-xs sm:text-sm pr-2'>
                    {state == null ?
                      <option value="" defaultChecked hidden>Select State</option>:
                      <option value="" defaultChecked hidden>{state}</option>
                    }
                    {stateMap?.map((s, key) => (
                      <option key={key} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>

              </div>

              <div className='h-3'></div>

              <div className='flex w-full justify-between'>
                <div className='flex flex-col w-full'>
                  <label htmlFor="address" className='mb-2 font-semibold sm:text-[16px] text-sm'>Address</label>
                  <input onChange={(e) => { setAddress(e.target.value) }} type="text" placeholder={address} name='address' className='sm:h-[46px] w-full border rounded  pl-3 text-xs sm:text-sm ' />
                </div>
              </div>

              <div className='h-3'></div>

              <div className='flex w-full justify-between'>
                <div className='flex flex-col w-full'>
                  <label htmlFor="password" className='mb-2 font-semibold sm:text-[16px] text-sm'>Password</label>
                  <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='' name='password' className='sm:h-[46px] w-full border rounded pl-3 text-xs sm:text-sm' required />
                </div>
              </div>

            </div>

            <div className='flex mt-5 mb-5'>
              <button className='w-[100px] h-8 flex justify-center items-center border border-blue rounded text-blue mr-6 hover:scale-105 transition-all' onClick={
                ()=>{navigate('/')}
              }>Cancel</button>
              <button className='w-[100px] sm:h-9 flex justify-center items-center bg-darkred rounded text-white hover:scale-105 transition-all' type='submit' >Save</button>
            </div>
          </form>

        </div>


      </div>
    </div>
  )
}

export default UserProfile