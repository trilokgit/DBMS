import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import { cartReducer } from '../redux/reducers/cartReducers'
import { getProductDetails,getProductReducer } from '../redux/reducers/productReducers'


const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductReducer,
    getProductDetails: getProductDetails

});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

const INISIAL_STATE = {
    cart: {
        cartItems: cartFromLocalStorage
    }
}

const store = createStore(
    reducer,
    INISIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;