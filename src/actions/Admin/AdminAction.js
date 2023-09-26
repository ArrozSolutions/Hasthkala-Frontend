import axios from "../../helpers/axios";
import { addToCartConstants, adminAllCategoryConstant, adminAllOrdersConstant, adminAllProductConstant, adminCreateCategoryConstants, adminCreateProductConstants, adminCustomersConstants, adminRecentOrderConstants, getCartDataConstants, getSavedConstants, quantityEditConstants, removeCartDataConstants, removeSavedDataConstants, saveConstants } from "../../constant/constant";

export const AdminCreateProduct = (productObj) => {
  const formData = new FormData();
  for (const image of productObj["images"]) {
    formData.append("images", image);
  }
  for (const key in productObj) {
    if (productObj[key] !== undefined && key !== "images") {
      formData.append(key, productObj[key]);
    }
  }
  return async (dispatch) => {
    dispatch({ type: adminCreateProductConstants.ADMIN_CREATEPRODUCT_REQUEST });
    const res = await axios.post(`/admin-create-product`, formData)
    if (res.status === 200) {
      const { product } = res.data;
      dispatch({
        type: adminCreateProductConstants.ADMIN_CREATEPRODUCT_SUCCESS,
        payload: {
          product
        },
      });
    }
  };

};

export const AdminCreateCategory = (categoryObj) => {
  const formData = new FormData();
  for (const image of categoryObj["images"]) {
    formData.append("images", image);
  }
  for (const key in categoryObj) {
    if (categoryObj[key] !== undefined && key !== "images") {
      formData.append(key, categoryObj[key]);
    }
  }
  return async (dispatch) => {
    dispatch({ type: adminCreateCategoryConstants.ADMIN_CREATEPRODUCT_REQUEST });
    const res = await axios.post(`/admin-create-category`, formData)
    if (res.status === 200) {
      const { category } = res.data;
      dispatch({
        type: adminCreateCategoryConstants.ADMIN_CREATEPRODUCT_SUCCESS,
        payload: {
          category
        },
      });
    }
  };

};

export const AdminRecentOrders = () => {
  return async (dispatch) => {
    dispatch({ type: adminRecentOrderConstants.ADMIN_RECENTORDER_REQUEST });
    const res = await axios.get(`/admin-recent-orders`)
    if (res.status === 200) {
      const { recentorders } = res.data;
      dispatch({
        type: adminRecentOrderConstants.ADMIN_RECENTORDER_SUCCESS,
        payload: {
          recentorders,
        },
      });
    }
  };

};

export const AdminAllCustomers = () => {
  return async (dispatch) => {
    dispatch({ type: adminCustomersConstants.ADMIN_CUSTOMERS_REQUEST });
    const res = await axios.get(`/admin-all-customers`)
    if (res.status === 200) {
      const { customers, totalcustomers } = res.data;
      dispatch({
        type: adminCustomersConstants.ADMIN_CUSTOMERS_SUCCESS,
        payload: {
          customers,
          totalcustomers
        },
      });
    }
  };

};

export const AdminAllOrders = () => {
  return async (dispatch) => {
    dispatch({ type: adminAllOrdersConstant.ADMIN_ALLORDERS_REQUEST });
    const res = await axios.get(`/admin-all-orders`)
    if (res.status === 200) {
      const { orders, totalorders } = res.data;
      dispatch({
        type: adminAllOrdersConstant.ADMIN_ALLORDERS_SUCCESS,
        payload: {
          orders,
          totalorders
        },
      });
    }
  };

};

export const AdminAllProducts = () => {
  return async (dispatch) => {
    dispatch({ type: adminAllProductConstant.ADMIN_PRODUCTS_REQUEST });
    const res = await axios.get(`/admin-all-products`)
    if (res.status === 200) {
      const { products, totalproducts } = res.data;
      dispatch({
        type: adminAllProductConstant.ADMIN_PRODUCTS_SUCCESS,
        payload: {
          products,
          totalproducts
        },
      });
    }
  };

};

export const AdminAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: adminAllCategoryConstant.ADMIN_CATEGORY_REQUEST });
    const res = await axios.get(`/admin-all-category`)
    if (res.status === 200) {
      const { category, totalcategory } = res.data;
      dispatch({
        type: adminAllCategoryConstant.ADMIN_CATEGORY_SUCCESS,
        payload: {
          category,
          totalcategory
        },
      });
    }
  };

};
