import { 
    
    CART_ADD_ITEM,

} from '../constants/cartConstant.js';

import axios from 'axios';



export const addToCart = (id,qty) => async (dispatch,getstate)  => {
        try {
            

            const { data } = await axios.get(`/api/products/${id}`);
            dispatch({ type: CART_ADD_ITEM, payload: {
                product:data._id,
                name:data.name,
                image:data.image,
                price:data.price,
                countInStock:data.countInStock,
                qty
            } });


            localStorage.setItem('cartItems',JSON.stringify(getstate().cart.cartItems));

        } catch (error) {
            // dispatch({ type: PRODUCT_LIST_FAIL, payload: error.response.data.message });
        }
}

