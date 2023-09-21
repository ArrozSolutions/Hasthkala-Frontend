import { filterConstants, newProductConstants, productConstants, relatedConstants, searchConstants, singleProductConstants, trendingProductsConstants } from "../../constant/constant";

const initState = {
    products: [],
    relatedproducts: [],
    filteredproducts: [],
    searchedProducts: [],
    trendingProducts:[],
    error: [],
};

export default (state = initState, action) => {

    switch (action.type) {
        case trendingProductsConstants.TRENDING_PRODUCTS_SUCCESS:
            state={
                ...state,
                trendingProducts:action.payload.trendingproducts
            }
            break;
        case newProductConstants.NEW_PRODUCT_SUCCESS:
            state = {
                ...state,
                newproducts: action.payload.newproducts
            }
            break;
        case newProductConstants.NEW_PRODUCT_FAILURE:
            state = {
                ...state,
                error: action.payload.message
            }
            break;
        case productConstants.PRODUCT_SUCCESS:
            state = {
                ...state,
                products: action.payload.products
            }
            break;
        case searchConstants.SEARCH_SUCCESS:
            state = {
                ...state,
                searchedProducts: action.payload.products
            }
            break;
        case searchConstants.SEARCH_FAILURE:
            state = {
                ...state,
                searchedProducts: null,
                error: action.payload.message
            }
            break;
        case filterConstants.FILTER_SUCCESS:
            state = {
                ...state,
                filteredproducts: action.payload.filteredproducts
            }
            break;
        case relatedConstants.RELATED_SUCCESS:
            state = {
                ...state,
                relatedproducts: action.payload.relatedproducts
            }
            break;
    }
    return state;
}