import { addToCartConstants, getCartDataConstants, getSavedConstants, quantityEditConstants, removeCartDataConstants, removeSavedDataConstants, saveConstants } from "../../constant/constant";

const initState = {
    saved:[],
    cart: [],
    error: [],
    itemAdded:false,
    itemRemoved:false,
    message:''
};

const CartReducer = (state = initState, action) => {

    switch (action.type) {
        case getSavedConstants.GET_SAVED_SUCCESS:
            state={
                ...state,
                saved:action.payload.savedproducts
            }
            break;
        case saveConstants.SAVE_SUCCESS:
            state={
                ...state,
                message:action.payload.message
            }
            break;
        case addToCartConstants.ADDTOCART_SUCCESS:
            state = {
                ...state,
                itemAdded:true
            }
            break;
        case getCartDataConstants.GETCARTDATA_SUCCESS:
            state = {
                ...state,
                cart: action.payload.cart
            }
            break;
        case removeCartDataConstants.REMOVECARTDATA_SUCCESS:
            state={
                ...state,
                itemRemoved:true,
            }
            break;
        case removeSavedDataConstants.REMOVE_SAVED_SUCCESS:
            state={
                ...state,
                message:action.payload.message
            }
            break;
        case quantityEditConstants.QUANTITY_EDIT_SUCCESS:
            state={
                ...state,
                message:action.payload.message
            }
            break;
        default:{
            state={
                ...state
            }
        }
    }
    return state;
}

export default CartReducer