import { EVMInterpreter, ScopeContext } from "./interpreter";

export type ExecutionFunc = (
  pc: number,
  interpreter: EVMInterpreter,
  scope: ScopeContext
) => { pc: number; result?: Uint8Array[]; error?: Error };

type Instruction = {
  [key: string]: ExecutionFunc;
};

const instructions: Instruction = {
  opAdd(pc, interpreter, scope) {
    let x = scope.stack.pop();
    let y = scope.stack.pop();
    scope.stack.push(x + y);
    return { pc };
  },

  opPush1(pc, interpreter, scope) {
    let codeLen = scope.contract.code.length;
    pc++;
    if (pc < codeLen) {
      scope.stack.push(scope.contract.code[pc]);
    }

    return { pc };
  },
};

export default instructions;
