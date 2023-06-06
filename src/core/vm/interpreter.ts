import { Contract } from "./contract";
import EVM from "./evm";
import { JumpTable, newInstructionSet } from "./jumpTable";
import { OpCode } from "./opcodes";
import { Stack } from "./stack";

export class ScopeContext {
  contract: Contract;

  constructor(contract: Contract) {
    this.contract = contract;
  }
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

    //Skip execution if contract has no code
    if (!contract.code.length) return {};

    let pc = 0;
    let scope = new ScopeContext(contract);

    while (pc < contract.code.length) {
      let op = contract.getOP(pc);
      let operation = this.jumpTable[OpCode[op]];
      let result = operation.execute(pc, this, scope);
      pc = result.pc;
      pc++;
    }
    return {};
  }
}
