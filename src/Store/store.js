import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice.js';
//import userReducer from './features/users/userSlice.js'
//import userProduct from './features/users/userProduct.js'

const store = configureStore({
    reducer:{
        counter: counterReducer,
        //user:userReducer,
        //product: userProduct,
    },
});

export default store;

