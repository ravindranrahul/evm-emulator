import { createContext } from "react";

type IndexedValue = {
  offset: number;
  value: any;
};

export type State = {
  nonce:number;
  StackValues: IndexedValue[];
  MemoryValues: IndexedValue[];
  StorageValues: IndexedValue[];
};

export const defaultState = {
  nonce:0,
  StackValues: [],
  MemoryValues: [],
  StorageValues: [],
};

export const StateContext = createContext<{
  evmState: State;
  setEvmState: any;
}>({
  evmState: defaultState,
  setEvmState: null,
});
