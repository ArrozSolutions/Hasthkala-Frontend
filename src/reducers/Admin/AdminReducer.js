import { adminAllCategoryConstant, adminAllOrdersConstant, adminAllProductConstant, adminCustomersConstants, adminRecentOrderConstants } from "../../constant/constant";

const initState = {
    recentorders: [],
    products: [],
    category: [],
    allorders: [],
    totalorders: null,
    totalcustomers: null,
    totalproducts: null,
    totalcategory: null,
    products: [],
    category: [],
    customers: [],
    message: ''
};

const AdminReducer = (state = initState, action) => {

    switch (action.type) {
        case adminRecentOrderConstants.ADMIN_RECENTORDER_SUCCESS:
            state = {
                ...state,
                recentorders: action.payload.recentorders,
            }
            break;
        case adminAllProductConstant.ADMIN_PRODUCTS_SUCCESS:
            state = {
                ...state,
                products: action.payload.products,
                totalproducts: action.payload.totalproducts,
            }
            break;
        case adminAllCategoryConstant.ADMIN_CATEGORY_SUCCESS:
            state = {
                ...state,
                category: action.payload.category,
                totalcategory: action.payload.totalcategory,
            }
            break;
        case adminCustomersConstants.ADMIN_CUSTOMERS_SUCCESS:
            state = {
                ...state,
                customers: action.payload.customers,
                totalcustomers: action.payload.totalcustomers
            }
            break;
        case adminAllOrdersConstant.ADMIN_ALLORDERS_SUCCESS:
            state = {
                ...state,
                allorders: action.payload.orders,
                totalorders: action.payload.totalorders
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

export default AdminReducer