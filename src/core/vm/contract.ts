import { Address } from "../common/types";

// Contract represents an ethereum contract in the state database. It contains
// the contract code, calling arguments.
export class Contract {
  //Context info
  callerAddress: Address;

  code: [] = [];
  codeAddress: Address = new Uint8Array(0x0);

  constructor(callerAddress: Address) {
    this.callerAddress = callerAddress;
  }

  setCallCode(codeAddress: Address, code: []) {
    this.codeAddress = codeAddress;
    this.code = code;
  }
}
