"use strict";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

const validacionDNI = (numeroDeIdentificacion) => {
  try {
    if (
      numeroDeIdentificacion.length !== 10 ||
      typeof numeroDeIdentificacion !== "string"
    ) {
      throw new Error(
        "Produciuse un erro:por favor introducir unha string de 10 caracteres"
      );
    }
    const dniArray = numeroDeIdentificacion.split("-");
    if (dniArray.length !== 2) {
      throw new Error(
        "Produciuse un erro:Existen  mais de 2 partes separados por guión"
      );
    }

    const dniNumero = parseInt(dniArray[0]);

    if (dniNumero.toString().length !== 8) {
      throw new Error("Produciuse un erro:antes do guión de ter 8 dixitos");
    }
    if (dniArray[1].length !== 1 || 0 <= parseInt(dniArray[1])) {
      throw new Error(
        "Produciuse un erro:despois do guión debe ter unha letra "
      );
    }
    const identificadorLetra = dniNumero % 23;

    if (dniArray[1].toUpperCase() !== letras[identificadorLetra]) {
      throw new Error(
        "Produciuse un erro:a letra non corresponde co número facilitado asociado"
      );
    }
    console.log("DNI válido");
  } catch (error) {
    console.error(error.message);
  }
};
validacionDNI("47371542-Y");
