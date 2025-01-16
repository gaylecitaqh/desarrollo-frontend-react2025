import { createSlice } from '@reduxjs/toolkit'
//import { products } from '@reduxjs/toolkit'

const initialState = {
  //Aquí se definen todas las variables globales del componente Counter.jsx
  initialValue: 10,
  dataProduct:[
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
   
  ]
  
}

export const productSlice = createSlice({
  name:'product',
  initialState,
  reducers:{
    setInitialValue: (state, payload) =>{
      state.initialValue = payload
    },
    setdataProduct: (state, payload) =>{
        state.dataProduct = payload
    },
  },
})
  
    /*{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
    */



//  export const { increment, decrement, incrementByAmount } = products.actions
  export const { setInitialValue,setdataProduct} = productSlice.actions
  export default productSlice.reducer