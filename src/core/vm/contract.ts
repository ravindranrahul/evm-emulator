import { Address } from "../common/address";

// Contract represents an ethereum contract in the state database. It contains
// the contract code, calling arguments.
export class Contract {
  //Context info
  callerAddress: Address;

  code: string = "";
  codeAddress: Address = new Address("0x0");

  constructor(callerAddress: Address) {
    this.callerAddress = callerAddress;
  }

  setCallCode(codeAddress: Address, code: string) {
    this.codeAddress = codeAddress;
    this.code = code;
  }
}
