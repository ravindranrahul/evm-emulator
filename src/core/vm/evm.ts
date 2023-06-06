import { Address } from "../common/address";
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
    let contractAccount = this.stateDB.getAccount(contractAddress);
    if (!contractAccount) throw VM_ERROR.ACCOUNT_NOT_FOUND;

    let contract = new Contract(caller);
    contract.setCallCode(contractAddress, contractAccount.getCode());

    this.interpreter.run(contract, input);
  };

  create(caller: Address, code: string) {
    this.stateDB.create(new Address("0x2022"), code);
  }

  error() {}
}
