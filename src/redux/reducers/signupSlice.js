import { createSlice } from "@reduxjs/toolkit";
const signupSlice=createSlice({
    name:'signup',
    initialState:{
        first_name:'',
        last_name:'',
        email:'',
        password:''
    },
    reducers:{
      
    }
})
export default signupSlice.reducer