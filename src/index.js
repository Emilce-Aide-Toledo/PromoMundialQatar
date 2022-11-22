import cipher from "./cipher.js";

/**
 * Botón para cifrar
 */
const buttonEncode = document.getElementById("buttonEncode");
buttonEncode.addEventListener("click", () => {
  const encrypCode = document.getElementById("codificar").value;
  const encrypCodeN = document.getElementById("encrypCodeN").value;
  // offset y string son los parámetros, se aseguran que sean números y letras mayúsculas
  const offset = parseInt(encrypCodeN);
  const string = encrypCode.toUpperCase();
  const result = cipher.encode(offset, string)

  document.getElementById("result").textContent = result;
});

/**
 * 
 * @param {string} text  texto desencriptado 
 * @returns Mensaje informativo: si es ganador. 
 */

const winner = (text) =>{
  return text === "GANADOR" 
  ?`Resultado: ${text} 
  ¡Felicidades: Ganaste!`
  : `Resultado: ${text}
  ¡Será la próxima, sigue participando!`
 }

/**
 * Botón para decifrar
 */

const buttonDecode = document.getElementById("buttonDecode");
buttonDecode.addEventListener("click",  () => {
  const encrypCodeN = document.getElementById("encrypCodeN").value;
  const decipherCode = document.getElementById("decipherCode").value;
  // offset y string son los parámetros, se aseguran que sean números y letras mayúsculas
  const offset = parseInt(encrypCodeN);
  const string = decipherCode.toUpperCase();
  const result = cipher.decode(offset, string)
  document.getElementById("result").textContent = winner(result);
});


const buttonBusiness = document.getElementById('buttonBusiness');
buttonBusiness.addEventListener('click', () =>{
  document.getElementById('container').style.display = 'none';
  document.getElementById('formCode').style.display = 'none';
  document.getElementById('containerCode').style.display = 'none';
  document.querySelector('.encrypCode').style.display = 'block';
  document.getElementById('codificar').style.display='block';
  document.getElementById('buttonEncode').style.display = 'block';
  document.getElementById('imgCode').style.display ='block';
});

const btnHome = document.getElementById('btnHome');
btnHome.addEventListener('click', () => {
  location.reload()
});

