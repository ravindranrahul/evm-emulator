import { useState } from "react";
import store from "../../store";
import { stackClear, stackPush, statePop } from "../../store/feature/stack/stackSlice";

// This class provide a stack instance to EVM.
// This class is a wrapper over the redux stores which maintains the stack
// and propogates updates to the UI.
export class Stack {

  constructor(){
    store.dispatch(stackClear());
  }
  pop = () : number => {
    // FYI: cloning the stack first before pop;
    // becuase the store remains immutable.
    // Use dispatcher to mutate state
    let top = [...store.getState().stack].pop();
    store.dispatch(statePop())
    return top?.value;
  };

  push = (value: number) => {
    store.dispatch(stackPush(value));
  };
}
