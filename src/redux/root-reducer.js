import { combineReducers } from 'redux';

import dataReducer from './data/data.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    data: dataReducer,
    cart: cartReducer
});