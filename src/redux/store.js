import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import ProductSlice from "./reducers/ProductSlice";
import loginSlice from "./reducers/loginSlice";
import signupSlice from "./reducers/signupSlice";

const store=configureStore({
    reducer:{
        user:userSlice,
        product:ProductSlice,
        login:loginSlice,
        signup:signupSlice
    }
});
export default store