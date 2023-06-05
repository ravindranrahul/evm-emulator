import { Contract } from "./contract";
import EVM from "./evm";
import { JumpTable, newInstructionSet } from "./jumpTable";
import { OpCode } from "./opcodes";
import { Stack } from "./stack";

class ScopeContext {
  stack: Stack = new Stack();
}

export class EVMInterpreter {
  evm: EVM;
  jumpTable: JumpTable;

  constructor(evm: EVM) {
    this.evm = evm;
    this.jumpTable = newInstructionSet();
  }

  run(contract: Contract, input: []): { result?: Uint8Array; error?: string } {
    // Increment the call depth which is restricted to 1024
    this.evm.depth++;

    let context = new ScopeContext();

    //Skip execution if contract has no code
    if (!contract.code.length) return {};

    console.log(contract.code);
    return {};
  }
}
