import { combineReducers } from "redux";
import userReducer from "./User/UserReducer";
import ProductsReducer from "./Products/ProductsReducer";
import InitialDataReducer from './InitialData/InitialDataReducer';
import CartReducer from "./Cart/CartReducer";

const rootReducer = combineReducers({
    user: userReducer,
    products:ProductsReducer,
    initialData:InitialDataReducer,
    cart:CartReducer
});



export default rootReducer;