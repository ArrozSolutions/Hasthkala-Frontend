import { newProductConstants, categoryConstants} from "../../constant/constant"
import axios from '../../helpers/axios';

export const getInitialData = ()=>{
    return async dispatch=>{
        const res = await axios.get('/initialdata');
        if(res.status  === 200){
            const {categories,newproducts} = res.data;
            dispatch({
                type: categoryConstants.CATEGORY_SUCCESS,
                payload:{categories}
            })
            dispatch({
                type: newProductConstants.NEW_PRODUCT_SUCCESS,
                payload:{newproducts}
            })
        }
    }

}