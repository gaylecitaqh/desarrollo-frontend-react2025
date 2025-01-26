
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
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
  },
    updateForm: (state, action) => { 
      const { name, value } = action.payload;   
      state[name] = value; 
    }, 
    resetForm: (state, action) => {
      if (action.payload === "logout") {
       // Reinicia todo el estado al inicial
       // Object.assign(state, initialState); 
       console.log("Reseteando estado:", state);
        state.userInfo = { username: "", email: "" };
        state.dataForm = [{
          module:'',
          password:''}];  // Limpia el arreglo de dataForm
        state.initialValue = 10; // Restablece el valor inicial

      }
    },
  }, 
}); 

 export const { setInitialValue,setDataForm, setUsername, setEmail, updateForm,resetForm } = formSlice.actions; 
 export { initialState };
 export default formSlice.reducer;