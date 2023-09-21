import { useDispatch } from "react-redux";
import axios from "../../helpers/axios";
import { filterConstants, newProductConstants, productConstants, relatedConstants, searchConstants, trendingProductsConstants } from "../../constant/constant";

export const getNewProducts = () => {

  return async (dispatch) => {
    dispatch({ type: newProductConstants.NEW_PRODUCT_REQUEST });
    const res = await axios.get(`/new-products`)
    if (res.status === 200) {
      const { products } = res.data;
      dispatch({
        type: newProductConstants.NEW_PRODUCT_SUCCESS,
        payload: {
          products,
        },
      });
    }
  };

};

export const getAllProducts = (page) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.PRODUCT_REQUEST });

    const res = await axios.get(`/get-products/${page}`)
    if (res.status === 200) {
      const { products } = res.data;
      dispatch({
        type: productConstants.PRODUCT_SUCCESS,
        payload: {
          products,
        }
      })
    } else {
      console.log("Error");
    }
  }
}


export const getFilteredProducts = (checked,value,page) => {
  return async (dispatch) => {
    dispatch({ type: filterConstants.FILTER_REQUEST })
    const res = await axios.post(`/filter-product`,{
      checked,
      value,
      page
    }).catch((err)=>{
      if(err.response.status == 500){
        const {message} = err.response.data.message;
        dispatch({
          type:filterConstants.FILTER_FAILURE,
          payload:{
            message,
          }
        })
      }
    })
    if(res.status === 200){
      const { products } = res.data;
      dispatch({
        type:filterConstants.FILTER_SUCCESS,
        payload:{
          filteredproducts:products,
        }
      })
    }
  }
}

export const getTrendingProducts = () => {
  return async (dispatch) => {
    dispatch({ type: trendingProductsConstants.TRENDING_PRODUCTS_REQUEST })
    const res = await axios.get(`/trending-products`).catch((err)=>{
      if(err.response.status == 500){
        const {message} = err.response.data.message;
        dispatch({
          type:trendingProductsConstants.TRENDING_PRODUCTS_FAILURE,
          payload:{
            message,
          }
        })
      }
    })
    if(res.status === 200){
      const { products } = res.data;
      dispatch({
        type:trendingProductsConstants.TRENDING_PRODUCTS_SUCCESS,
        payload:{
            trendingproducts:products,
        }
      })
    }
  }
}


export const getRelatedProducts = (cid,pid) => {
  return async (dispatch) => {
    dispatch({ type: relatedConstants.RELATED_REQUEST })
    const res = await axios.get(`/related-products/${pid}/${cid}`).catch((err)=>{
      if(err.response.status == 500){
        const {message} = err.response.data.message;
        dispatch({
          type:relatedConstants.RELATED_FAILURE,
          payload:{
            message,
          }
        })
      }
    })
    if(res.status === 200){
      const { products } = res.data;
      dispatch({
        type:relatedConstants.RELATED_SUCCESS,
        payload:{
          relatedproducts:products,
        }
      })
    }
  }
}



export const getSearchedProducts = (keyword,page) => {
  return async (dispatch) => {
    dispatch({ type: searchConstants.SEARCH_REQUEST })
    const res = await axios.get(`/search-product/${keyword}/${page}`).catch((err)=>{
      if(err.response.status == 500){
        const {message} = err.response.data.message;
        dispatch({
          type:searchConstants.SEARCH_FAILURE,
          payload:{
            message,
          }
        })
      }
    })
    if(keyword == null){
      dispatch({
        type:searchConstants.SEARCH_SUCCESS,
        payload:{
          products:null,
        }
      })
    }
    if (res.status === 200) {
      const { products } = res.data;
      dispatch({
        type: searchConstants.SEARCH_SUCCESS,
        payload: {
          products,
        }
      })
    }
  }
}

