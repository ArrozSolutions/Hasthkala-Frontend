import React, { useEffect } from 'react';
import Heading1 from '../../assets/heading1.jpg';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import TrendingProducts from '../../components/Carousel/TrendingProducts';
import Testimonials from '../../components/Carousel/Testimonials';
import NewlyAddedProducts from '../../components/Carousel/NewlyAddedProducts';
import GiftBoxes from '../../assets/gifboxes.jpg';
import Header from '../../components/Header/Header';
import Header2 from '../../components/Header2/Header2';
import CircularCategories from '../../components/Carousel/CircularCategories'
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';
import Blog1 from '../../assets/blog1.jpg'
import Blog2 from '../../assets/blog2.png'
import Blog3 from '../../assets/blog3.jpg'
import Banner from '../../components/Carousel/Banner';
import Navbar from '../../components/Navbar/Navbar';
import { BiCross, BiMenu, BiX } from 'react-icons/bi';

const Home = () => {

  const [category, setCategory] = useState(null);
  const navigate = useNavigate();
  const auth = useSelector(state => state.user);
  const allcategories = useSelector(state => state.initialData.categories);
  const [hamburger,setHamburger] = useState(false);

  const toggleHamburger=()=>{
    setHamburger(!hamburger);
  }
  useEffect(() => {
    if (allcategories) {
      setCategory(allcategories);
    }
  }, [allcategories])

  return (
    <>
      <div className='flex flex-col'>
        <div className='absolute block sm:hidden top-4 left-6 z-[60]' onClick={toggleHamburger}>
        {
          hamburger?<BiX color='darkred' size={22}/>:
          <BiMenu size={22} color='#1a1a1d' />

        }
        </div>
        <Navbar show={hamburger} />
        <Header />
        <Header2 />

        {/* GOLDEN BORDER  */}
        <div className='w-full pl-1 pr-1 sm:pl-14 sm:pr-14 lg:pl-20 lg:pr-20 pt-6 sm:pt-5'>
          <Banner />
        </div>
        {/* GOLDEN BORDER  */}

        {/* HEADING 1 */}
        <div className='h-14 sm:h-28 mb-1 w-full flex items-end justify-center text-lg sm:text-3xl font-alegreya'>
          Interiors Of Heritage
        </div>
        <div className='flex items-start justify-center'>
          <img className='w-[100px] sm:w-[180px]' src={Heading1} alt="" />
        </div>
        {/* HEADING 1 */}

        <br className='hidden sm:block' />

        {/* CIRCLE CATGORIES  */}
        <CircularCategories />
        {/* CIRCLE CATGORIES  */}

        <br />
        <br className='hidden sm:block' />
        <br className='hidden sm:block' />
        <br className='hidden sm:block' />
        <br className='hidden sm:block' />

        {/* TRENDING PRODUCTS  */}
        <div className='w-full h-[300px] sm:h-[500px] '>
          <TrendingProducts />
        </div>
        {/* TRENDING PRODUCTS  */}

        {/* HEADING 2 */}
        <div className='h-14 sm:h-28 mb-1 w-full flex items-end justify-center text-lg sm:text-3xl font-alegreya'>
          Newly Added Products
        </div>
        <div className='flex items-start justify-center'>
          <img className='w-[100px] sm:w-[180px]' src={Heading1} alt="" />
        </div>
        {/* HEADING 2 */}

        <br />
        <br className='hidden sm:block' />
        <br className='hidden sm:block' />

        {/* NEWLY ADDED PRODUCTS  */}
        <div className='w-full max-h-[540px] sm:h-[900px] lg:h-[500px]'>
          <NewlyAddedProducts />
        </div>
        {/* NEWLY ADDED PRODUCTS  */}
        <br className='hidden sm:block' />
        {/* SEARCH  */}
        <div className='flex h-[50px] sm:h-[90px] w-full  sm:pl-20 sm:pr-20 pl-5 pr-5  sm:rounded relative items-center mt-10'>
          <div className='absolute w-full sm:w-[400px] hidden sm:flex justify-center items-center z-0 bottom-0 sm:right-[500px] '>
            <img className='h-full w-[120px] ml-8 sm:ml-0 sm:w-[450px] z-40' src={GiftBoxes} alt="" />
          </div>

          <div className='z-10 h-full w-full border border-[#DD2745] rounded-xl flex items-center justify-between'>

            <div className='flex flex-col pl-2 sm:pl-8'>
              <p className='uppercase text-[#DD2745] font-semibold text-xs sm:text-xl font-noto '>Find The Perfect Gift</p>
              <p className='text-[9px] sm:text-xs text-[#DD2745]'>Discover Gift by Recipent, Relationship & Occasions</p>
            </div>

            <div className='flex pr-2 sm:pr-8'>
              <Link to={'/listing'}><button className='bg-[#dd2745] text-[#ffffff] text-[12px] sm:text-sm sm:w-[300px] h-[30px] w-[110px] sm:h-[65px] rounded sm:rounded-md'>Start Search</button></Link>
            </div>

          </div>

        </div>
        {/* SEARCH  */}
        <br />
        <br className='hidden sm:block' />
        <br className='hidden sm:block' />


        <br className='hidden sm:block' />
        <br className='hidden sm:block' />


        {/* TESTIMONIALS  */}
        <div>
          <Testimonials />
        </div>
        {/* TESTIMONIALS  */}

        {/* BLOGS  */}
        <div className='flex flex-col min-h-[700px] items-center '>

          <div className='h-20 sm:h-32 font-alegreya flex items-center justify-center text-2xl'>Blogs</div>
          <div className='flex flex-col sm:flex-row pl-5 pr-5 sm:pl-20 sm:pr-20 max-[600px]:w-full'>

            <div className='flex flex-col justify-center sm:justify-start items-center sm:mr-8 sm:w-[360px] w-full'>
              <div className='w-[300px] sm:w-[360px] h-[220px] sm:h-[260px] mb-5'><img className='h-full w-full' src={Blog1} alt="" /></div>
              <div className='pl-5 pr-5 sm:pl-0 sm:pr-0'>
                <p className='font-alegreya mb-2 text-[15px]'>The Enchanting Frescoes of Bundi, Rajasthan</p>
                <p className='text-xs sm:text-sm text-gray leading-6 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit dolorum placeat, voluptate dignissimos maxime sint sed magnam expedita eveniet minima doloremque ullam iure reiciendis molestiae, a quia sequi blanditiis?</p>
                <p className='font-dmsans text-red text-sm font-semibold mt-3'>Learn more ></p>
              </div>
            </div>


            <div className='flex flex-col w-full items-center justify-center sm:w-[360px] sm:mr-8 mt-4 sm:mt-0'>
              <div className='sm:w-full bg-[#61616b22] rounded-md h-[90px] mr-5 sm:mr-0 ml-5 sm:ml-0 sm:h-[120px] font-alegreya flex items-center justify-center  text-[15px] sm:text-lg pl-2 pr-2 sm:pl-10 sm:pr-10'>Enchanting warli wall painting -- <br /> Western India's art form that cherishes nature</div>
              <div className='w-[300px] sm:w-full mt-5 h-[150px]'>
                <img src={Blog2} className='h-full w-full' alt="" />
              </div>
              <div className='mt-5 pl-5 pr-5 sm:pl-0 sm:pr-0'>
                <p className='font-alegreya mb-2'>The Enchanting Frescoes of Bundi, Rajasthan</p>
                <p className='text-xs sm:text-sm text-gray leading-6 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit dolorum placeat, voluptate dignissimos Lorem ipsum dolor sit amet.</p>
                <p className='font-dmsans text-red text-sm font-semibold mt-3'>Learn more ></p>
              </div>
            </div>


            <div className='flex flex-col w-full sm:w-[360px] justify-center sm:justify-start items-center mt-8 sm:mt-0'>
              <div className='w-[300px] h-[180px] sm:w-[360px] sm:h-[220px] mb-5'><img className='h-full w-full' src={Blog3} alt="" /></div>
              <div className='w-[300px] h-[180px] sm:w-[360px] sm:h-[220px]'><img className='h-full w-full' src={Blog3} alt="" /></div>
            </div>
          </div>

        </div>
        <br />
        <br />
        <br />

        {/* BLOGS  */}

      </div>

      <Footer />
    </>
  )
}

export default Home