import { has0xPrefix, hex2Byte, validateHex } from "./bytes";

export class Address {
  hex: string;
  constructor(hex: string) {
    if (validateHex(hex)) {
      throw Error(`Invalid hexadecimal address ${hex}`);
    }

    if (has0xPrefix(hex)) {
      hex = hex.replace(hex.substring(0, 2), "");
    }
    this.hex = hex;
  }

  toByte() {
    return hex2Byte(this.hex);
  }

  toString() {
    return `0x${this.hex}`;
  }
}
