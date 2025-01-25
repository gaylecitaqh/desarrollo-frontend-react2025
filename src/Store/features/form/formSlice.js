
import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  initialValue: 10, 
  dataForm:[ {module: "React Mod7",password:"mod7USIP-GAYLE"} ], 
  userInfo: { username: '', email: '' } 
} 

export const formSlice = createSlice({ 
  name:'form', initialState, 
  reducers:{ 
    setInitialValue: (state, action) =>{ state.initialValue = action.payload }, 
    setDataForm: (state, action) =>{ state.dataForm = action.payload }, 
    updateForm: (state, action) => { 
      const { name, value } = action.payload;   
      state[name] = value; 
    }, 
    resetForm: () => initialState, // Resetea a su estado inicial
  }, 
}); 

 export const { setInitialValue,setDataForm, updateForm,resetForm} = formSlice.actions; 
 export default formSlice.reducer;