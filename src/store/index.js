import { combineReducers, createStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { toDoSlice } from "./todo/toDoSlice";

const rootReducer = combineReducers({
   auth:authSlice.reducer, 
   todo:toDoSlice.reducer,
})

export const store = createStore(rootReducer)