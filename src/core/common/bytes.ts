// Returns the bytes represented by the hexadecimal string
export function hex2Byte(hex: string): Uint8Array {
  hex = hex.startsWith("0x") ? hex.slice(2) : hex; // Remove the '0x' prefix if present

  if (hex.length % 2 !== 0) {
    throw new Error("Invalid hex string length");
  }

  const byteLength = hex.length / 2;
  const byteArray = new Uint8Array(byteLength);

  for (let i = 0; i < byteLength; i++) {
    const hexByte = hex.substring(i * 2, i * 2 + 2);
    byteArray[i] = parseInt(hexByte, 16);
  }

  return byteArray;
}

// has0xPrefix validates str begins with '0x' or '0X'.
export const has0xPrefix = (str: string): boolean => {
  return str.length >= 2 && str[0] == "0" && (str[1] == "x" || str[1] == "X");
};

export const validateHex = (hex: string): boolean => {
  if (hex.length % 2 !== 0) return false;
  for (let c of hex) {
    if (!isHexCharacter(c)) return false;
  }

  return true;
};

const isHexCharacter = (c: string): boolean => {
  return (
    ("0" <= c && c <= "9") || ("a" <= c && c <= "f") || ("A" <= c && c <= "F")
  );
};
