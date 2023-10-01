import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productDetailReducer, productReducer } from './reducers/productReducer';
const reducer=combineReducers({
    products:productReducer,
    productDetails:productDetailReducer,
})

let initialState={};
const middleware=[thunk];
const store=legacy_createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;