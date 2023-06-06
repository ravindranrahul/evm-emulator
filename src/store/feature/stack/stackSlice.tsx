import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IndexedItem, useAppDispatch, useAppSelector } from "../..";

const initialState: IndexedItem[] = [];

export const stackSlice = createSlice({
  name: "stack",
  initialState,
  reducers: {
    stackClear: (state) => {
      state = initialState;
    },
    stackPush: (state, action: PayloadAction<number>) => {
      state.push({ offset: state.length, value: action.payload });
    },
    statePop: (state) => {
      state.pop();
    },
  },
});

export const { stackPush, statePop, stackClear } = stackSlice.actions;

export default stackSlice.reducer;
