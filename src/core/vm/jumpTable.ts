import instructions, { ExecutionFunc } from "./instruction";


type Operation = {
  execute: ExecutionFunc;
  minStack: number;
  maxStack: number;
};

// Operand is of 1 byte so at most 256 operands are allowed
export type JumpTable = {
  [key: string]: Operation;
};


// This simple version of EVM does not have release wise mapping of instructions.
// Rather, it supports ALL instructions until the shanghai release.
// See: ethereum/go-ethereum/core/vm/jump_table.go 
export const newInstructionSet = (): JumpTable => {
  const tbl: JumpTable = {
    ADD: {
      execute: instructions.opAdd,
      minStack: 2,
      maxStack: 4,
    },

    PUSH1:{
      execute:instructions.opPush1,
      minStack:2,
      maxStack:4,
    }
  };

  //TODO: add validation
  //TODO: add undefined operations

  return tbl;
};
