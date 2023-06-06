// EVM Assembler
// EVM Assembly (string) => Uint8Array (EVM bytecode)
// Ref: https://github.com/ethereum/go-ethereum/blob/master/core/asm/asm.go
import { has0xPrefix, validateHex } from "../common/bytes";
import { isPush, OpCode } from "../vm/opcodes";

export class InstructionIterator {
  code: string[];
  pc: number = 0;
  arg: string[] = [];
  op: number = 0;
  error: boolean = false;
  started: boolean = false;

  constructor(sourceCode: string) {
    this.code = this.formatSource(sourceCode);
  }

  next() {
    if (this.error || this.code.length <= this.pc) {
      return false;
    }

    //increment pc
    if (this.started) {
      if (this.arg.length) {
        //skip towards the end of argument
        this.pc += this.arg.length;
      }
      this.pc++;
    } else {
      this.started = true;
    }

    if (this.code.length <= this.pc) {
      return false;
    }

    // shite typescript dance to get dynamic enum key
    this.op = OpCode[this.code[this.pc] as keyof typeof OpCode];
    if (!this.op)
      throw Error("Invalid opcode in EVM assembly:" + this.code[this.pc]);

    if (isPush(this.op)) {
      // bytes of argument as calculated as offset from PUSH1
      let argLength = this.op - OpCode.PUSH1 + 1;
      // [pc->op, pc+1->arg, pc+1+arg -> argend]
      this.arg = this.code.slice(this.pc + 1, this.pc + 1 + argLength);
    } else {
      this.arg = [];
    }

    return true;
  }

  assemble() {
    let bytecode: string = "";
    while (this.next()) {
      bytecode = bytecode.concat(this.op.toString(16).padStart(2, '0'));
      if (this.arg.length) {
        bytecode = bytecode.concat(this.arg.join(""));
      }
    }
    return bytecode;
  }

  formatSource(sourceCode: String) {
    let tokens = sourceCode.trim().split(/\s+|\n/);
    let result = [];

    for (let token of tokens) {
      if (has0xPrefix(token)) {
        let prefix = token.substring(0, 2);
        token = token.replace(prefix, "");
        if (!validateHex(token))
          throw Error("Invalid hexdecimal in EVM assembly: " + token);
        //@ts-ignore: push chunk of 2 char hex
        result.push(...token.match(/.{1,2}/g));
      } else {
        result.push(token.toUpperCase());
      }
    }
    return result;
  }
}
