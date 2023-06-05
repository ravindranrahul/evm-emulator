import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IndexedItem, useAppDispatch, useAppSelector } from "../..";

const initialState: IndexedItem[] = [];

export const stackSlice = createSlice({
  name: "stack",
  initialState,
  reducers: {
    stackPush: (state, action: PayloadAction<IndexedItem>) => {
      state.push(action.payload);
    },
    update: (_, action: PayloadAction<IndexedItem[]>) => action.payload,
  },
});

// export const stackPop = () => {
//   let dispatch = useAppDispatch();
//   let stack = useAppSelector((state) => state.stack);
//
//   let top = stack.pop();
//   dispatch(stackSlice.actions.update(stack));
//   return top;
// };

export const { stackPush } = stackSlice.actions;

export default stackSlice.reducer;
