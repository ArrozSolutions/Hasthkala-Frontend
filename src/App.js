import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import UserProfile from "./pages/UserProfile/UserProfile";
import './App.css';
import MyOrders from "./pages/MyOrders/MyOrders";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import ContactUs from "./pages/ContactUs/ContactUs";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Listing from "./pages/Listing/Listing";
import Cart from "./pages/Cart/Cart";
import Billing from "./pages/Billing/Billing";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts, getNewProducts, getTrendingProducts } from "./actions/Product/ProductAction";
import { getInitialData } from "./actions/InitialData/InitialDataAction";
import FooterPages from "./pages/FooterPages/FooterPages";
import ListingForCategories from "./pages/Listing/ListingForCategories";
import Saved from "./pages/Saved/Saved";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData());
  }, []); 
  
   useEffect(() => {
    dispatch(getAllProducts(1));
  }, []);

  useEffect(() => {
    dispatch(getTrendingProducts());
  }, []);



  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/login"} element={<Login />} />
        <Route exact path={"/profile"} element={<UserProfile />} />
        <Route exact path={"/contact-us"} element={<ContactUs />} />
        <Route exact path={"/change-pass"} element={<ChangePassword />} />
        <Route exact path={"/orders"} element={<MyOrders />} />
        <Route exact path={"/product/:slug"} element={<SingleProduct />} />
        <Route exact path={"/listing"} element={<Listing />} />
        <Route exact path={"/listing/:keyword"} element={<ListingForCategories />} />
        <Route exact path={"/cart"} element={<Cart />} />
        <Route exact path={"/billing"} element={<Billing />} />
        <Route exact path={"/footer-pages"} element={<FooterPages />} />
        <Route exact path={"/saved"} element={<Saved />} />
      </Routes>
    </div>
  );
}

export default App;
