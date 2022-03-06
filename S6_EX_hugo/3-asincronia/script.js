"use strict";

//Promesa de la edad. Devuelve un número del 0 al 100, tardando entre 0 y 1 segundos
const agePromise = new Promise((resolve, reject) =>
  setTimeout(
    () => resolve(Math.round(Math.random() * 100)),
    Math.random() * 1000
  )
);
agePromise.then((resolve) => {
  let age = resolve;
  resolverEdad(age)
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((reject) => {
      console.error(reject);
    });
});

function resolverEdad(edad) {
  return new Promise((resolve, reject) => {
    if (edad < 18) {
      reject(`${edad} es menor`);
    }
    if (edad % 2 === 0) {
      setTimeout(() => {
        resolve(`${edad} es par`);
      }, 1000);
    }
    if (edad % 2 !== 0) {
      setTimeout(() => {
        resolve(`${edad} es impar`);
      }, 2000);
    }
  });
}
