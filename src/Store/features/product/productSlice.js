import { createSlice } from '@reduxjs/toolkit'
//import { products } from '@reduxjs/toolkit'

const initialState = {
  //Aquí se definen todas las variables globales del componente Counter.jsx
  initialValue: 10,
  dataProduct:[
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
   
  ]
  
}

export const productSlice = createSlice({
  name:'product',
  initialState,
  reducers:{
    setInitialValue:(state,payload)=>{
      state.initialValue = payload
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
  export const { setInitialValue} = productSlice.actions
  export default productSlice.reducer