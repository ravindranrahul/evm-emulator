import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IndexedItem } from "../..";

const initialState:IndexedItem[] = []

export const stackSlice  = createSlice({
  name:'stack',
  initialState,
  reducers:{
    stackPush:(state,action:PayloadAction<IndexedItem>)=>{
      state.push(action.payload)
    }
  }
})

export const {stackPush} = stackSlice.actions;

export default stackSlice.reducer;
