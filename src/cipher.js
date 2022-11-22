const cipher = {
  /**
   *
   * @param {number} offset Posiciones que queremos mover a la derecha en el alfabeto
   * @param {string} string Mensaje que queremos cifrar
   * @returns Mensaje cifrado
   */
  encode: (offset, string) => {
    let msgResult = "";

    if (typeof offset !== "number") throw new TypeError("No es un número");
    if (typeof string !== "string") throw new TypeError("No es un  texto");

    for (let i = 0; i < string.length; i++) {
      let position = string.charCodeAt(i);
      let textChar = ((position - 65 + offset) % 26) + 65;

      position <= 90 && position >= 65
        ? (msgResult += String.fromCharCode(textChar))
        : (msgResult += string(i));
    }

    return msgResult;
  },

  /**
   *
   * @param {number} offset Posiciones que queremos mover a la izquierda en el alfabeto
   * @param {string} string Mensaje que queremos descifrar
   * @returns Mensaje decifrado
   */
  decode: (offset, string) => {
    let msgResult = "";

    if (typeof offset !== "number") throw new TypeError("No es un número");
    if (typeof string !== "string") throw new TypeError("No es un  texto");

    for (let i = 0; i < string.length; i++) {
      let position = string.charCodeAt(i);
      let textChar = ((position + 65 - offset) % 26) + 65;

      position <= 90 && position >= 65
        ? (msgResult += String.fromCharCode(textChar))
        : (msgResult += string(i));
    }
    return msgResult;
  },
};

export default cipher;
