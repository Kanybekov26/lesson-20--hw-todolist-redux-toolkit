import { createSlice } from "@reduxjs/toolkit";

export const authActionTypes = {
    LOG_IN: "LOG_IN",
    LOG_OUT: "LOG_OUT"
    }
    
    const initialState = {
        email: "",
    }
    export const authSlice = createSlice({
      name:"auth",
      initialState,
      reducers:{
        login(state,action){
          state.email = action.payload
        }
      }
    })


  export const authActions = authSlice.actions