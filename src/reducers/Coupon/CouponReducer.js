import { addToCartConstants, checkCouponConstants, getCartDataConstants, getSavedConstants, initialCartDataConstant, quantityEditConstants, removeCartDataConstants, removeSavedDataConstants, saveConstants } from "../../constant/constant";

const initState = {
    discount:null,
    type:null,
    minPurchase:null,
    minProducts:null,
    valid:false,
};

const CouponReducer = (state = initState, action) => {

    switch (action.type) {
        case checkCouponConstants.CHECK_COUPON_SUCCESS:
            state={
                ...state,
                discount:action?.payload?.discount,
                type:action?.payload?.type,
                minPurchase:action?.payload?.minPurchase,
                minProducts:action?.payload?.minProducts,
                minProducts:action?.payload?.minProducts,
                valid:action?.payload?.valid,
                message:action?.payload?.message,
            }
            break;
        default: {
            state = {
                ...state
            }
        }
    }
    return state;
}

export default CouponReducer