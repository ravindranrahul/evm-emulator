import { Contract } from "./contract";
import EVM from "./evm";
import { JumpTable, newInstructionSet } from "./jumpTable";
import { OpCode } from "./opcodes";

export class EVMInterpreter {
  evm: EVM;
  jumpTable: JumpTable;

  constructor(evm: EVM) {
    this.evm = evm;
    this.jumpTable = newInstructionSet()
  }

  run(contract: Contract, input: Uint8Array) : { result ?: Uint8Array, error?: string} {
    // Increment the call depth which is restricted to 1024
    this.evm.depth++;

    //Skip execution if contract has no code
    if(contract.code.length==0) return {}

    let op: OpCode;
    op=0x0;
    let operation = this.jumpTable[OpCode[op]]
    return {}

  }
}
