import { Address } from "../common/address";
import { OpCode } from "./opcodes";

// Contract represents an ethereum contract in the state database. It contains
// the contract code, calling arguments.
export class Contract {
  //Context info
  callerAddress: Address;

  code: Uint8Array = new Uint8Array();
  codeAddress: Address = new Address("0x0");

  constructor(callerAddress: Address) {
    this.callerAddress = callerAddress;
  }

  setCallCode(codeAddress: Address, code: Uint8Array) {
    this.codeAddress = codeAddress;
    this.code = code;
  }

  getOP(pc: number): OpCode {
    if (pc >= this.code.length) return OpCode.STOP;
    return this.code[pc] as OpCode;
  }
}
