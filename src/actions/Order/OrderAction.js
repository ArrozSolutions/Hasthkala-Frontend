import { useDispatch } from "react-redux";
import axios from "../../helpers/axios";
import { orderConstants } from "../../constant/constant";

export const orderItem = (orderby,cartdata,paymentmode,totalprice) => {
  return async (dispatch) => {
    dispatch({ type: orderConstants.ORDER_REQUEST });
    const res = await axios.post(`/create-order`,{
        orderby,
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

