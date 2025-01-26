import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice.js';
//import userReducer from './features/users/userSlice.js'
import productReducer from './features/product/productSlice.js';
import formReducer from './features/form/formSlice.js'

export  const store = configureStore({
    reducer:{
        counter: counterReducer,
        //user:userReducer,
        product: productReducer,
        form: formReducer,
    },
});

export default store;

