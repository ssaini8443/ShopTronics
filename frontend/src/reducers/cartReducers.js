import {
    CART_ADD_ITEM,
} from '../constants/cartConstant.js';




export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existedItem = state.cartItems.find(x => x.product === item.product);
            if (existedItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existedItem.product ?  item : x)  
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        default:
return state;
    }
}