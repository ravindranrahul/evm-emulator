import { Address } from "../common/address";

export class Account {
  code: string;
  nonce = 0;
  balance = 0;

  constructor(code = "") {
    this.code = code;
  }
}
// State provides a simple emulation the Ethereum state trie.
export class StateDB {
  state: Map<string, Account> = new Map();

  create(address: Address, code: string = "") {
    // *** Convert Address to string ***
    // It's important to understand that when comparing objects as keys,
    // JavaScript compares them by reference.
    // This means that two different objects with identical contents
    // will not be considered equal unless they reference the same memory location.

    this.state.set(address.toString(), new Account(code));
  }

  getAccount(address: Address) {
    return this.state.get(address.toString());
  }
}
