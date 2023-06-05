import { EVMInterpreter } from "./interpreter";

type ExecutionFunc = (
  pc: number,
  interpreter: EVMInterpreter
) => { result?: Uint8Array[]; error?: Error };

type Operation = {
  execute: ExecutionFunc;
  minStack: number;
  maxStack: number;
};

// Operand is of 1 byte so at most 256 operands are allowed
export type JumpTable = {
  [key: string]: Operation;
};

const opAdd = (pc: number, interpreter: EVMInterpreter) => {
  return {};
};

// This simple version of EVM does not have release wise mapping of instructions.
// Rather, it supports ALL instructions until the shanghai release.
// See: ethereum/go-ethereum/core/vm/jump_table.go 
export const newInstructionSet = (): JumpTable => {
  const tbl: JumpTable = {
    ADD: {
      execute: opAdd,
      minStack: 2,
      maxStack: 4,
    },
  };

  //TODO: add validation
  //TODO: add undefined operations

  return tbl;
};
