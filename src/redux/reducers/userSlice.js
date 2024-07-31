import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        id:1,
        name:"user"
    },
    reducers:{
        update:(state,action)=>{
       state.name=action.payload
        }
    },
})
export const {update}=userSlice.actions
export default userSlice.reducer