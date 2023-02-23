import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};
export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, action) {
      state.todo.push(action.payload);
    },

    deleteAll(state, action) {
      state.todo = action.payload;
    },
    delete(state, action) {
      state.todo = state.todo.filter((el) => el.id !== action.payload);
    },

    completed(state, action) {
      state.todo = state.todo.map((el) => {
        if (el.id === action.payload) {
          return {
           ...el,
            completed: !el.completed,
          };
        
        }
        return el
      });
    },
    editeHandler(state,action){
    state.todo = state.todo.map((item) => {
  if(item.id === action.payload.id){
    return{
        item,
        title:action.payload.editeInputValue
    }
  }
  return item
    })
    }

  },
});

export const todoActions = toDoSlice.actions;
