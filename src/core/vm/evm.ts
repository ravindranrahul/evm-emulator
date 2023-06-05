import { Address } from "../common/types";
import { Contract } from "./contract";
import { VM_ERROR } from "./errors";
import { EVMInterpreter } from "./interpreter";
import { StateDB } from "./stateDB";

export default class EVM {
  interpreter: EVMInterpreter;
  depth: number;
  // Simulated, ephemeral state
  stateDB: StateDB = new StateDB();

  constructor() {
    this.interpreter = new EVMInterpreter(this);
    this.depth = 0;
  }

  // CallCode executes the contract associated with the addr with the given input
  // as parameters.
  // CallCode differs from Call in the sense that it executes the given address'
  // code with the caller as context.
  callCode = (caller: Address, contractAddress: Address, input: []) => {
    let contract = new Contract(caller);

    let account = this.stateDB.getAccount(contractAddress);
    if (!account) throw VM_ERROR.ACCOUNT_NOT_FOUND;
    contract.setCallCode(contractAddress, account.code);

    //   this.interpreter.run(contract, input);
  };

  error() {}
}
