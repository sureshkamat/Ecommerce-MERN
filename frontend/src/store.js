import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productDetailReducer, productReducer } from './reducers/productReducer';
import { userReducer } from './reducers/userReducer';
const reducer=combineReducers({
    products:productReducer,
    productDetails:productDetailReducer,
    user:userReducer,
})

let initialState={};
const middleware=[thunk];
const store=legacy_createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;