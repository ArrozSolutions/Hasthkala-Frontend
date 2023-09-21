import { categoryConstants} from "../../constant/constant";

const initState = {
    categories: [],
    error: [],
};

export default (state = initState, action) => {

    switch (action.type) {
        case categoryConstants.CATEGORY_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
    }
    return state;
}