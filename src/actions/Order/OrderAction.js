import axios from "../../helpers/axios";
import { getUserOrdersConstant, orderConstants } from "../../constant/constant";

export const getOrders=(uid)=>{
  return async (dispatch) => {
    dispatch({ type: getUserOrdersConstant.USER_ORDERS_REQUEST });
    const res = await axios.post(`/get-user-orders`,{
        uid
    })
    if (res.status === 200) {
      const { orders } = res.data;
      dispatch({
        type: getUserOrdersConstant.USER_ORDERS_SUCCESS,
        payload: {
          orders
        },
      });
    }
  }; 
}

export const orderItem = (uid,status,cartdata,paymentmode,totalprice) => {
  return async (dispatch) => {
    dispatch({ type: orderConstants.ORDER_REQUEST });
    const res = await axios.post(`/create-order`,{
        uid,
        status,
        cartdata,
        paymentmode,
        totalprice
    })
    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: orderConstants.ORDER_SUCCESS,
        payload: {
          message
        },
      });
    }
  };

};

