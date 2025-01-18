import { createSlice } from '@reduxjs/toolkit'
//import { useState } from 'react'

const initialState = {
    //Aquí se definen todas las variables globales del componente Counter.jsx
    initialValue: 10,
    dataForm:[
        {module: "React Mod7", username: "", email: "", password:"mod7USIP-TUNOMBRE"}
      ]
  }
  

  export const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
      setInitialValue: (state, action) =>{
        state.initialValue = action.payload
      },
      setDataForm: (state, action) =>{
          state.dataForm = action.payload
      },
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { setInitialValue,setDataForm} = formSlice.actions
    
  export default formSlice.reducer