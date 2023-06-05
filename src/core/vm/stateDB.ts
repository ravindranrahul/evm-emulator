import { Address } from "../common/types";

export class Account {
  code: [] = [];
  nonce = 0;
  balance = 0;
}
// State provides a simple emulation the Ethereum state trie.
export class StateDB {
  state: Map<Address, Account> = new Map();

  dump() {
    console.log(this.state);
  }

  create(address: Address) {
    this.state.set(address, new Account());
    console.log(this.state);
  }

  getAccount(address: Address) {
    return this.state.get(address);
  }
}
