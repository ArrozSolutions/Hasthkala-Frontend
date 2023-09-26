import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";
import ProductsReducer from "./Products/ProductsReducer";
import InitialDataReducer from './InitialData/InitialDataReducer';
import CartReducer from "./Cart/CartReducer";
import AdminReducer from "./Admin/AdminReducer";

const rootReducer = combineReducers({
    user: UserReducer,
    products:ProductsReducer,
    initialData:InitialDataReducer,
    cart:CartReducer,
    admin:AdminReducer,
});



export default rootReducer;