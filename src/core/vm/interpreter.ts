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

  run(
    contract: Contract,
    input: []
  ): { result?: Uint8Array; error?: string } {
    // Increment the call depth which is restricted to 1024
    this.evm.depth++;

    let context = new ScopeContext(); 
    context.stack.push(123)
    console.log(context.stack.pop())
    //Skip execution if contract has no code
    if (contract.code.length == 0) return {};

    console.log(context)
    return {};
  }
}
