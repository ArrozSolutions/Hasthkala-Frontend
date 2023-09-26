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
import { getAllProducts, getTrendingProducts } from "./actions/Product/ProductAction";
import { getInitialData } from "./actions/InitialData/InitialDataAction";
import FooterPages from "./pages/FooterPages/FooterPages";
import ListingForCategories from "./pages/Listing/ListingForCategories";
import Saved from "./pages/Saved/Saved";
import Wishlist from "./pages/WishList/WishList";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminSettings from "./pages/Admin/AdminSettings";
import Inbox from "./pages/Admin/Inbox";
import AdminCategory from "./pages/Admin/AdminCategory";
import AdminProducts from "./pages/Admin/AdminProducts";
import AdminOrders from "./pages/Admin/AdminOrders";
import Customers from "./pages/Admin/Customers";
import OurStaff from "./pages/Admin/OurStaff";
import AddProducts from "./pages/Admin/AddProducts";
import AddCategory from "./pages/Admin/AddCategory";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData());
  }, [dispatch]); 
  
   useEffect(() => {
    dispatch(getAllProducts(1));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTrendingProducts());
  }, [dispatch]);



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
        <Route exact path={"/wishlist"} element={<Wishlist />} />
        <Route exact path={"/admin-dashboard"} element={<AdminDashboard />} />
        <Route exact path={"/admin-customers"} element={<Customers />} />
        <Route exact path={"/admin-orders"} element={<AdminOrders />} />
        <Route exact path={"/admin-products"} element={<AdminProducts />} />
        <Route exact path={"/admin-categories"} element={<AdminCategory />} />
        <Route exact path={"/admin-inbox"} element={<Inbox />} />
        <Route exact path={"/admin-settings"} element={<AdminSettings />} />
        <Route exact path={"/admin-staff"} element={<OurStaff />} />
        <Route exact path={"/admin-add-product"} element={<AddProducts />} />
        <Route exact path={"/admin-add-category"} element={<AddCategory />} />
      </Routes>
    </div>
  );
}

export default App;
